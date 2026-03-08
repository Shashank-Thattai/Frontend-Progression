import { useEffect, useState } from "react";
import axios from "axios"

export default function useAxiosAPI(url,method ='Get'){
    const[data,setData] = useState(null)
    const[loading,setLoading] = useState(true)
    const[error,setError] =useState(null)

    useEffect(()=>{
        async function getData(){
            
            axios.get(url).then((response)=>{
             
               
                setData(response.data)
            }).catch((err)=>{
                setError("Error while loading" + err.message)
            }).finally(()=>{
                setLoading(false)
            })

            

        }
        getData()
    },[url])
    return {data, loading, error}
}


{/*export default function useFetchHook(url){
    const[data,setData]= useState(null)
    const[loading,setLoading]=useState(true)
    const[error,setError] = useState(null)
    useEffect(()=>{
        async function fetchdata(){
            try{
                const response = await fetch(url);
                const json = await response.json();
                await new Promise(resolve => setTimeout(resolve,3000))
                setData(json);
            } catch(err){
                setError("Error while fetching data" + err.message)
            } finally{
                setLoading(false)
            }
        }
        fetchdata();
    },[url])

    return {data,loading,error};

}*/}
import React, { useEffect, useState } from 'react'
import axios from "axios";


const UsingAPICalls = () => {

    //const[satlliteInfo, setSatlliteInfo] = useState([{"id":"DLR-TUBSAT","country":"Germany","launch_date":"26-05-1999","mass":"45","launcher":"PSLV-C2"},{"id":"KITSAT-3","country":"REPUBLIC OF KOREA","launch_date":"26-05-1999","mass":"110","launcher":"PSLV-C2"},{"id":"BIRD","country":"GERMANY","launch_date":"22-10-2001","mass":"92","launcher":"PSLV-C3"},{"id":"PROBA","country":"BELGIUM","launch_date":"22-10-2001","mass":"94","launcher":"PSLV-C3"},{"id":"LAPAN-TUBSAT","country":"INDONESIA","launch_date":"10-07-2007","mass":"56","launcher":"PSLV-C7"},{"id":"PEHUENSAT-1","country":"ARGENTINA","launch_date":"10-07-2007","mass":"6","launcher":"PSLV-C7"}])

    //https://isro.vercel.app/api/customer_satellites

    const[satlliteInfo, setSatlliteInfo] = useState([])
    const[mastersatlliteInfo, setMasterSatlliteInfo] = useState([])
    //var isSorted = false;
    const[isSorted,setIsSorted] =useState(false)


    

    useEffect(()=>{

        //fetch('https://isro.vercel.app/api/customer_satellites').then(res=>res.json().then((result)=>{
            //console.log('result')
            //console.log(result)
       // }))
       axios.get('https://isro.vercel.app/api/customer_satellites').then((response)=>{
        var filteredList = [];
       response.data.customer_satellites.forEach((item)=>{
        
        item.mass =item.mass == ' '? 0: parseInt(item.mass)
        filteredList.push(item)
       })

        console.log('response')
        console.log(response)
        setSatlliteInfo(/*response.data.customer_satellites*/ filteredList)
        setMasterSatlliteInfo(response.data.customer_satellites)
       }).catch((err)=>{
        console.log("error")
        console.log(err)
       })

       axios.get('https://www.amazon.in/suggestions?limit=11&prefix=book&suggestion-type=WIDGET&suggestion-type=KEYWORD&page-type=Gateway&alias=aps&site-variant=desktop&version=3&event=onkeypress&wc=&lop=en_IN&last-prefix=boo&avg-ks-time=527&fb=1&predicted_text_accepted=&estoken=&session-id=525-5652010-3097310&request-id=RNHS47BVXFT2W3XB9310&mid=A21TJRUUN4KGV&plain-mid=44571&client-info=search-ui').then((response)=>{
        console.log("response")
        console.log(response)
       }).catch((err)=>{
        console.log("error")
        console.log(err)
       })
    },[])


    function handleCountry(event){
        var userSelection = event.target.value;
        //userSelection = userSelection.toLowerCase();
        //console.log(userSelection)
        console.log(satlliteInfo)

        var filteredList = mastersatlliteInfo.filter((item)=>{
            var str = item.country.substr(0,userSelection.length) 

            if(/*item.country.substr(0,userSelection.length) */ str.toLowerCase()== userSelection)
            {
                return true;
            }
        });
        console.log('filteredList')
        console.log(filteredList)
        setSatlliteInfo(filteredList)

    }

    function handleMass(){
        setIsSorted(!isSorted);
        var sortedList = satlliteInfo.sort((a,b)=>{
            if(isSorted){
            if(a.mass > b.mass )
            {
                return -1
            }
        } else{
            if(a.mass < b.mass )
            {
                return 1
            }
        }

        })
        console.log('sortedList' + isSorted)

        console.log(sortedList)
        setSatlliteInfo(sortedList);

    }


  return (
   <> 
   <div> Using API CAlls</div>

   <table className="table table-bordered">
    <thead>
        <tr>
            <th>ID</th>
            <th>Country<br/>
                <input type='text' onChange={handleCountry}></input>
            </th>
            <th>Launch Date</th>
            <th onClick={handleMass}>Mass</th>
            <th>Launcher</th>
        </tr>
    </thead>
    <tbody>
        
            {
            satlliteInfo.map((satellite,index)=>{
                     return (<tr key ={index}>
                        <td>{satellite.id}</td>
                        <td>{satellite.country}</td>
                        <td>{satellite.launch_date}</td>
                        <td>{satellite.mass}</td>
                        <td>{satellite.launcher}</td>
                    </tr>)

                })
            }
        
    </tbody>
    {
        (satlliteInfo.length == 0) &&
        <tbody>
            <tr>
                <td colSpan='6'>
                    No Results Found

                </td>
            </tr>
        </tbody>
    }
   </table>
   
   </>
  )
}

export default UsingAPICalls
import React  from 'react'
import UseState from './Components/UseState/UseState';
import EventHandlingDemo from './Components/EventHandling/EventHandlingDemo';
import ReadingDataFromInputElements from './Components/ReadingDataFromInputElements/ReadingDataFRomInputElements';
import TwoWayDataBinding from './Components/TwoWayDataBinding/TwoWayDataBinding';
import ReadingUserDataThroughObj from './Components/ReadingMultipleFieldsThroughOBj/ReadingUserDataThroughObj';
import ReadingDataTest from './Components/ReadingDataFromInputElements/ReadingDataTest';
import UseEffect from './Components/useEffectHook/UseEffect';
import UsingAPICalls from './Components/UsingAPICalls/UsingAPICalls';
import FormDemo from './Components/FormsDemo/FormDemo';
import UseEffectTest from './Components/useEffectHook/UseEffectTest';
import Promises from './Components/Promises/Promises';
import FormTesting from './Components/FormsDemo/FormTesting';
import UseEffectTest3 from './Components/useEffectHook/UseEffectTest3';
import UsingAPICallsTest from './Components/UsingAPICalls/UsingAPICallsTest';
import PropsDemo from './Components/Props/PropsDemo';
import VisitingCard from './Components/Props/VisitingCard';
import ProductDetails from './Components/Props/ProductDetails/ProductDetails';
import RatingStars from './Components/Props/ProductDetails/Common/RatingStars';
import IncrementAndDecrement from './Components/CustomHooks/IncrementAndDecrement';
import PlusandMinus from './Components/CustomHooks/PlusandMinus';
import LoadProducts from './Components/CustomHooks/Example_Fetch/LoadProducts';
import LoadSROData from './Components/CustomHooks/Example_Fetch/LoadSROData';
import Demo_Dom from './Components/UseRefHook/Demo_Dom';
import RefUsage_Cleanup from './Components/UseRefHook/RefUsage_Cleanup';
import MutableObjectRef from './Components/UseRefHook/MutableObjectRef';
import PropDrilling from './Components/PropDrilling/PropDrilling';
import UseContextDemo from './Components/PropDrilling/UseContextDemo';
import CallBackExample from './Components/ParentAccessingChildData/CallBackExample';
import UseReduerDemo from './Components/UseReducer/UseReduerDemo';
import UseReduerDemo2 from './Components/UseReducer/UseReducerDemo2';
import IncDecUseReducer from './Components/UseReducer/IncDecUseReducer';
import Component1 from './Components/Lite-Redux-Statemanagement/Component1/Component1';
import Component2 from './Components/Lite-Redux-Statemanagement/Component2/Component2';
import Component3 from './Components/Lite-Redux-Statemanagement/Component3/Component3';
import { UserDataContext } from './Components/Lite-Redux-Statemanagement/common';
import { ProviderComponent } from './Components/Lite-Redux-Statemanagement/ProviderComponent';
import UseContextTest1 from './Components/PropDrilling/UseContextTest1';
import PropDrillingTest from './Components/PropDrilling/PropDrillingTest';
import FormTesting1 from './Components/FormsDemo/FormTesting1';
import UseReducerTest1 from './Components/UseReducer/UseReducerTest1';
import ReduxComponent1 from './Components/redux/Example/ReduxComponent1';
import ReduxComponent2 from './Components/redux/Example/ReduxComponent2';
import ReduxComponent3 from './Components/redux/Example/ReduxComponent3';
import Header from './Components/Routing/Header';
import Footer from './Components/Routing/Footer';
import Main from './Components/Routing/MainBlock';
import MainBlock from './Components/Routing/MainBlock';
import './index.css'
import HigherOrderComponents from './Components/HigerOrderComponents/HigherOrderComponents';
import MemoDemo from './Components/Memoization/MemoDemo';
import UseMemo from './Components/Memoization/UseMemo';
//import store from './Components/redux/store';
//import { Provider } from 'react-redux'

let App = () => {
  {/*const[showproductdetails,setShowProductDetails] =useState(true)

  const[name,setName] =useState('')
  const[email,setEmail] = useState('')
  const[age,setAge] = useState(0)
  const[background,setBackground] = useState('')
  var userAge = 20;
  var addressObject ={
    1:'1',
    2:'2',
    3:'3',
    4:'4',
  }*/}
  return (
    <>
    {/*<button onClick={()=>setShowProductDetails(!showproductdetails)}>Toggle Product Details</button>*/}



   {/* <div>App</div>
    <UseState/>
    <EventHandlingDemo/>
    <ReadingDataFromInputElements/>
    <TwoWayDataBinding/>*?)
 
 <ReadingDataFromInputElements/>

  <ReadingUserDataThroughObj/>
  <ReadingDataTest/>

  <UseEffect/>
  <UsingAPICalls/>

  <FormDemo/>

  <UseEffectTest/>
  <Promises/>
  <FormTesting/>
  <UseEffectTest3/>
  <UsingAPICallsTest/>*

  <input type='text' placeholder='enter your name' value={name} onChange={(event)=>{setName(event.target.value)}}></input>
<input type='email' placeholder='enter your email' value={email}></input>
<input type='number' placeholder='enter your age' value={age}></input>
<input type='text' placeholder='whats the background coloe' value={background}></input>
  <VisitingCard/>
  
  <PropsDemo userName = "John" lastName = "doe" age = {userAge} profession = "doctor" className = "test" id = "contatiner" backgroundColor ="red" address ={addressObject}/>
  <PropsDemo userName ="teena" age = "30" profession = "dev" />

  {showproductdetails && <ProductDetails/>}
  <RatingStars rating={4.32}/>
  <IncrementAndDecrement/>
  <div>
    <hr/>
    <PlusandMinus/>
  </div>
  8
  <LoadProducts/>
  <hr/>
  <LoadSROData/>

  <Demo_Dom/>
  <RefUsage_Cleanup/>

  <MutableObjectRef/>

  <PropDrilling/>
  <UseContextDemo/>

  <CallBackExample/>

  <UseReduerDemo/>

  <UseReduerDemo2/>

  <IncDecUseReducer/>

<ProviderComponent>
  <Component1/>
  <Component2/>
  <Component3/>
</ProviderComponent>

<UseContextTest1/>
<PropDrillingTest/>

<FormTesting1/>

<UseReducerTest1></UseReducerTest1>

<ProviderComponent>
  <Component1/>
  <Component2/>
  <Component3/>
</ProviderComponent>


<Provider store={store}>
  <ReduxComponent1/>
    <hr/>
    <ReduxComponent2/>
    <hr/>
    <ReduxComponent3/>
</Provider>


<Header></Header>
<MainBlock>
</MainBlock>
<Footer></Footer>

<HigherOrderComponents/>

<MemoDemo/>*/}
<UseMemo/>


  
  
  


  </>

  )
}

export default App;
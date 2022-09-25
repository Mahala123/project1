import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expnseSlice } from '../store/Store1';
import "./Page1.css"

function Page4() {
  const details1=useSelector(state=>state.exp.details)
  const details2=useSelector(state=>state.exp.email)
  const details3=useSelector(state=>state.exp.image)
 // console.log(details3)
  const dispatch=useDispatch()
  useEffect(()=>{
    const ReceiveData1 = async () => {
     const response = await fetch(
      'https://expense-a4b14-default-rtdb.firebaseio.com/expenses.json');
       const data=await response.json();
     // console.log(data);
   dispatch(expnseSlice.setDetails(data))
   }
   ReceiveData1()
  }
   ,[dispatch])
   useEffect(()=>{
    const ReceiveData2 = async () => {
     const response = await fetch(
      'https://expense-a4b14-default-rtdb.firebaseio.com/mail.json');
       const data=await response.json();
     // console.log(data);
   dispatch(expnseSlice.setEmail(data))
   }
   ReceiveData2()
  }
   ,[dispatch])
   useEffect(()=>{
    const ReceiveData3 = async () => {
     const response = await fetch(
      'https://expense-a4b14-default-rtdb.firebaseio.com/image.json');
       const data=await response.json();
      //console.log(data);
   dispatch(expnseSlice.setImage(data))
   }
   ReceiveData3()
  }
   ,[dispatch])

  const Page1Details = () => {
    if (!details1) return <p className="l1">No Expenses</p>;
    return (
      <ul>
        {Object.keys(details1).map((item) => (
          <li className="l1" key={item} id={item}>
            {`FIRST NAME: ${details1[item].cost}\n,LAST NAME: ${details1[item].catagory}\n,NUMBER: ${details1[item].description}`}
            
          </li>
        ))}
      </ul>
    );
  };
  const Page2Details = () => {
    if (!details2) return <p className="l1">No Expenses</p>;
    return (
      <ul>
        {Object.keys(details2).map((item) => (
          <li  className="l1" key={item} id={item}>
            {`EMAIL: ${details2[item].email}\n,GENDER: ${details2[item].gen1}\n`}
            
          </li>
        ))}
      </ul>
    );
  };
  const Page3Details = () => {
    if (!details3) return <p className="l1">No Expenses</p>;
    return (
      <ul>
        {Object.keys(details3).map((item) => (
          <li className="l1" key={item} id={item}>
            {`ADDRES: ${details3[item].addres}\n,PICTURE: ${details3[item].pic}\n`}
            
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className='form1'>
      <h1>YOUR DETAILS</h1>
      {/* <button onClick={ReceiveData}>FETCH DETAILS</button> */}
      <Page1Details className="l1"/><br/>
      <Page2Details className="l1"/><br/>
      <Page3Details className="l1"/>
    </div>
  )
}

export default Page4

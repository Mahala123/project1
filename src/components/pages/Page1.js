import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { expnseSlice } from '../store/Store1'
import './Page1.css'

function Page1() {
    const fName=useRef()
    const lName=useRef()
    const num=useRef()
    const history=useHistory()
    const dispatch=useDispatch()
    
    const submitDetails=(event)=>
    {
        event.preventDefault()
        const firstName=fName.current.value
        const lastName=lName.current.value
        const number=num.current.value
        const form1={
            id: Math.random(),
            cost:firstName,
            catagory:lastName,
            description:number,
        }
        fetch(
            `https://expense-a4b14-default-rtdb.firebaseio.com/expenses.json`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(form1),
            }
          )
            .then((res) => res.json())
            .then((data) => {
                 
                     // console.log(data)
                      dispatch(expnseSlice.setDetails(data));
                      history.replace('/page2')
                    });
                  
               
            
    }
  return (
    <div className='form1'>
      <form>
        <label className="l1">FIRST NAME</label><br/>
        <input type="text"   placeholder='first name' ref={fName} required></input><br/>
        <label className="l1">LAST NAME</label><br/>
        <input type="text" placeholder='last name' ref={lName} required></input><br/>
        <label className="l1"> MOBILE NUMBER</label><br/>
        <input type="tel" maxLength="10" pattern="[7-9][0-9]" placeholder='mobile number' ref={num} required></input><br/>
        <button type='submit'onClick={submitDetails}>NEXT</button>

      </form>
    </div>
  )
}

export default Page1

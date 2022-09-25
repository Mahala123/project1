import React, { useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { expnseSlice } from '../store/Store1'
import './Page1.css'

function Page2() {
    const email=useRef()
    
    const[state,setState]=useState()
    
    const history=useHistory()
    const dispatch=useDispatch()
    const click1=()=>
    {
      setState('MALE')
    }
    const click2=()=>
    {
      setState('FEMALE')
    }
    const click3=()=>
    {
      setState('OTHER')
    }
    const submitButton=(event)=>
    {
        event.preventDefault()
        const emailid=email.current.value
        
        const newEntry={
            id: Math.random(),
            email:emailid,
            gen1:state,
        }
        fetch(
            `https://expense-a4b14-default-rtdb.firebaseio.com/mail.json`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(newEntry),
            }
          )
            .then((res) => res.json())
            .then((data) => {
                 
                     // console.log(data)
                      dispatch(expnseSlice.setEmail(data));
                      history.replace('/page3')
                    });
                  

    }
  return (
    <div className='form1'>
    <form>
        <label className="l1">ENTER EMAIL</label><br/>
        <input type="email" id="email" name="email" placeholder="EMAIL" ref={email} required></input><br/>
        <label className="l1">GENDER</label><br/>
        <input type="radio" id="html" value="html" name="fav_language" onClick={click1}/>
        <label className="l1" htmlFor="html">MALE</label><br/>
        <input type="radio" id="css" value="css" name="fav_language" onClick={click2} />
        <label className="l1" htmlFor="css">FEMALE</label><br/>
        <input type="radio" id="javascript" value="javascript"  name="fav_language" onClick={click3} />
        <label className="l1" htmlFor="javascript">OTHER</label><br/>
        <button type="submit" onClick={submitButton}>NEXT</button>

    </form> 
    </div>
  )
}

export default Page2

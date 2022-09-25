import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { expnseSlice } from "../store/Store1";
import './Page1.css'

function Page3() {
  const history = useHistory();
 // const imgRef=useRef()
  const addr = useRef();
  const dispatch = useDispatch();
  const [img, setImg] = useState();
  const imageHandler = (event) => {
   
    setImg(URL.createObjectURL(event.target.files[0]));
   // console.log(img)
  };
  const submitImg = (event) => {
    event.preventDefault();
    const data1 = {
      addres: addr.current.value,
      pic:img,
    };
    fetch(`https://expense-a4b14-default-rtdb.firebaseio.com/image.json`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data1),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        dispatch(expnseSlice.setImage(data));
        history.replace("/page4");
      });
  };

  return (
    <div className='form1'>
    <form onSubmit={submitImg}>
      <label className="l1">YOUR ADDRESS</label>
      <br />
      <textarea
        rows="4"
        cols="50"
        name="comment"
        form="usrform"
        ref={addr}
      ></textarea>
      <br />
      <label className="l1">UPLOAD YOUR IMAGE</label>
      <br />
      <input type="file"  id="profilePic" onChange={imageHandler}></input>
      <br />
      <button > SUBMIT</button>
      </form>
    </div>
  );
}

export default Page3;

import { configureStore, createSlice } from "@reduxjs/toolkit"
const initialPage={
 details:{},
 id:null,
 email:{},
 image:localStorage.getItem({})||{}
 
}
const p1=createSlice({
  name:'contact',
  initialState: initialPage,
  reducers:{
     setDetails(state,action)
     {
      state.details=action.payload
      state.id=action.payload
     },
     setEmail(state,action)
     {
        state.email=action.payload
     },
     setImage(state,action)
     {
      state.image=action.payload
      localStorage.setItem('image',action.payload)
     }
  }
})
const store=configureStore({
    reducer:{exp:p1.reducer}
})

export const expnseSlice=p1.actions;

export default store;
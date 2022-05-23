import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet, doApiMethod } from './services/apiService';
import './App.css'
import Mishion from './mishion';
export default function App() {
  const [inputVale, setinputVal] = useState("");
  const [arr, setarr] = useState([]);

  useEffect(()=>{
  doApi();
  setInterval(() => {
    doApi();
  }, 30000);
  },[])


  const doApi= async()=>{
  let data=await doApiGet(API_URL);
  setarr(data);
  }

  const onR = (e) => {
    setinputVal(e.target.value);
  }
  const onEnter = (e) => {
    if (e.key === "Enter") addMision();
  }

  const addMision =async () => {
    if (inputVale != "") {
      await doApiMethod(API_URL,"POST",{data:inputVale});
      doApi();
      setinputVal("");
    }
  }
  return (
    <>
      <div className='container'>
        <h1 className='title pb-2 mt-5 col-6 col-md-3  text-center   mx-auto'>רשימת קניות</h1 >
        <div>
          <div className='d-flex justify-content-center mt-4  '>
            <button onClick={async() => {window.confirm("בטוח שאתה רוצה למחוק")&&await doApiMethod(API_URL+"/all","DELETE")&& doApi()}} className='btn btn-danger me-2'>
              נקה את רשימת המוצרים
            </button>
            <button onClick={addMision} className='btn btn-primary -danger'>
              הוסף מוצר
            </button>
          </div>
          <div className='mt-3 col-md-4 col-11 mx-auto pre'>
            <input placeholder='הקלד מוצר' style={{ direction: "rtl" }} onKeyDown={onEnter} value={inputVale} onInput={onR} maxLength={100} className='form-control' />
          </div>
        </div>
        <div className='mt-3 mb-5' >
          {arr.map((_item, i) => {
            return (
              <Mishion key={i} _item={_item} setarr={setarr} arr={arr} i={i} doApi={doApi} />
            )
          })}
        </div>
      </div>
    </>
  )
}

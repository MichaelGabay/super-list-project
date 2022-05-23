import React, { useEffect, useState } from 'react'
import { BsCheck2Square, BsXCircleFill } from 'react-icons/bs'
import { API_URL, doApiMethod } from './services/apiService'


export default function Mishion({ _item, arr, i, setarr,doApi }) {

    const [changeStyle, setChangeStyle] = useState({})
    const [color, setColor] = useState("")

    const onChangeArr =async () => {
     await doApiMethod(API_URL+`?id=${_item._id}`,"PUT");
     doApi();
    }
    const onDelClick = async() => {
        window.confirm("בטוח שאתה רוצה למחוק") && await doApiMethod(API_URL+`?id=${_item._id}`,"DELETE")&&
        doApi();
    }
    useEffect(() => {
        if (arr[i].flag) {
            setChangeStyle({ textDecoration: "line-through" });
            setColor("rgb(31, 206, 31)");
        }
        else {
            setChangeStyle({});
            setColor("");
        }
    }, [arr[i].flag])


    return (
        <div  className='d-flex justify-content-center mt-1'>
            <div style={{border:`1px solid ${color}`}} className='col-md-4 col-11 mision p-2 d-flex justify-content-between  '>
                <div className='col-auto '>
                    <BsCheck2Square onClick={onChangeArr} style={{ cursor: "pointer", color: `${color}` }} className='me-3' size={30} />
                    <BsXCircleFill onClick={onDelClick} className='me-3' style={{ cursor: "pointer",color:`rgb(218, 51, 51)` }} size={30} />

                </div>
                <p style={changeStyle} className='hP p-0 m-0 myPar' >{_item.data}</p>
            </div>
        </div>
    )
}

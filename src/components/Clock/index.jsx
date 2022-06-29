import { useState,useRef } from "react"

export default function Clock(props){
    console.log(props.test)
    //标记函数
    const myRef =  useRef()
    console.log(myRef.current)
    let [count,setcount]=useState(1)
    const add=()=>{
        setcount(++count)
    }
    const less=()=>{
        //setcount还可以传入回调函数
        //函数的返回值会作为新的state
        //回调函数能收到最新的state值
        setcount(preValue=>--preValue)
    }
    return(
        <div>
            <h1 ref={myRef}>计数器</h1>
            <h1>{count}</h1>
            <button onClick={less}>  - </button>
            <button onClick={add}> + </button>
            <label htmlFor="date"></label>
            <input type="date" />
        </div>
    )
}
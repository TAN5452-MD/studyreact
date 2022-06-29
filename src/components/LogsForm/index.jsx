import { Card ,DatePicker,Input,Button } from 'antd';
import { useState } from 'react';
import './index.css'
export default function Index() {
  const[inputForm,setinputForm] = useState({
    inputDate:'',
    inputTodo:'',
    inputTime:''
  })
  const [inputkey, setinputkey] = useState('');
  const clearInput = ()=>{
    setinputForm({
      inputDate:'', 
      inputTodo:'',
      inputTime:''
    })
    setinputkey(new Date())
  }
  const handleChangeDate=(_,dateString)=>{
    setinputForm({
      ...inputForm,
      inputDate:dateString
    })
  }
  const handleChangeTodo=(e)=>{
    setinputForm({
      ...inputForm,
      inputTodo:e.target.value
    })
  }
  const handleChangeTime=(e)=>{
    setinputForm({
      ...inputForm,
      inputTime:e.target.value
    })
  }

  const handleSubmit=()=>{
    const newLog={
      date:new Date(inputForm.inputDate),
      desc:inputForm.inputTodo,
      time:+inputForm.inputTime
    }
    console.log(newLog)
    clearInput()

  }
  return (
    <div className='logsform'>
      <Card
      title="添加TODO"
      headStyle={{fontSize:24,fontWeight:'bold'}}
      hoverable
      style={{
        width: 500,
        display: 'flex',
        justifyContent:'space-around',
        flexDirection:'column',
      }}
    >
        <span >请选择日期<DatePicker onChange={handleChangeDate} key={inputkey} style={{marginLeft:'10px'}}/></span>
        <br />
        <span>请输入内容<Input value={inputForm.inputTodo} onChange={handleChangeTodo} style={{marginLeft:'10px',width:'200px',marginTop:'10px'}}/></span>
        <br />        
        <span>请输入时长<Input value={inputForm.inputTime} onChange={handleChangeTime} style={{marginLeft:'10px',width:'200px',marginTop:'10px'}}/>

        </span> 
        <Button onClick={handleSubmit} style={{float:'right',marginTop:'10px'}} type="primary" danger>添加</Button>
    </Card>
  </div>
  )
}

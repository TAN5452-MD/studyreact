import './index.css'

export default function index(props) {

  const date = props.todos[0].date.toLocaleDateString()
  console.log(date)
  return (
     props.todos.map((item,index)=>
    <div key={index} style={{marginTop:'20px'}}>
        <div className='month'>
            十月
        </div>
        <div className='day'
        >
          20
    </div>
    <div className='item'>
      <p>{item.todo}</p>
      <span>{item.time}</span>
    </div>
    <br />
    </div>

   )
   )
}

import './index.css'

export default function index(props) {

  const date = props.todos[0].date
  console.log(props.children);
  console.log(date)
  return (
     props.todos.map((item,index)=>
    <div key={index} style={{marginTop:'20px'}}>
        <div className='month'>
            {date.getMonth()}月
        </div>
        <div className='day'
        >
          {date.getDay()}
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

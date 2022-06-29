import  './index.css'
import { Card } from 'antd';
import TodoItem from '../TodoItem/index'
import { useState } from 'react';

export default function Index() {
    const [todos,usetodos]= useState([
        {
            date: new Date('2011','11','1'),
            todo:'吃饭',
            time:'20'
        },
        {
            date: new Date('2021','3','23'),
            todo:'吃饭',
            time:'1'
        },
        {
            date: new Date('2022','7','15'),
            todo:'吃饭',
            time:'23'
        }
    ]);
    return (
        <div className='bgtodo'>
              <Card
      title="待办"
      headStyle={{fontSize:24,fontWeight:'bold'}}
      hoverable
      style={{
        width: 500,
        backgroundColor:'#1abc9c'
      }}
    >
        <TodoItem todos={todos}/>
    </Card>
        </div>
    );
}



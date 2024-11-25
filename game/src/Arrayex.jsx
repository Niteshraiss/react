
import { useState } from 'react';
function Arrayex(params) {
    const [todo,setTodo]=useState(['todo 1','todo 2']);
    return(
        <>
        <div>
            <h1>Todo List</h1>
            {todo.map((e,key)=><li key={key}>{e}</li>)}
        </div>
        <div>
            <button onClick={()=>setTodo([...todo,'todo 3'])}>Click</button>
        </div>
        </>
    )
}
export default Arrayex;
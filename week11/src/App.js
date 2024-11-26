import React, { useState, useEffect } from 'react';


function App() {

 const [todos, setTodos] = useState([]);

 useEffect(() => {

 fetch('https://jsonplaceholder.typicode.com/users1/1/todos')

 .then((response) => response.json())

 .then((json) => setTodos(json));

 }, []);

 if (todos.length === 0) {

 return (

 <div>

 <p>Todo 데이터가 아직 없어요.</p>

 </div>

 );

 }


 return (

 <div>

 {todos.map((todo) => (

 <div key={todo.id}>

 <p>{todo.title}</p>

 </div>

 ))}

 </div>

 );

}


export default App;
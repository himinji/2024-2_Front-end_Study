import { useState } from 'react';


function Counter() {

 const [count, setCount] = useState(0);


 function increment() {

 setCount(count+1);

 }

 const h2Style = {
    fontSize: '30px',
    color: 'gray'
    }

 return (

 <div>

 <h2 style={h2Style}>{count}</h2>

 <button onClick={increment}>+1</button>

 </div>

 )

}


export default Counter;
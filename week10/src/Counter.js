import { useState } from 'react';
import CountNumber from './CountNumber';
import Button from './Button';


function Counter() {

 const [count, setCount] = useState(0);


 function increment10() {
  setCount(count+10);
 }

function increment() {
  setCount(count+1);
 }

function decrement() {
  setCount(count-1);
 }
 
function decrement10() {
  setCount(count-10);
 }
  
function reset() {
  setCount(0);
}


 return (

  <div>
  <CountNumber count={count} />
  <Button onClick={increment10} text="+10" color="#e63946" />
  <Button onClick={increment} text="+1" color="#f4a261" />
  <Button onClick={reset} text="reset!" color="#2a9d8f" />
  <Button onClick={decrement} text="-1" color="#457b9d" disabled={count <= 0} />
  <Button onClick={decrement10} text="-10" color="#1d3557" disabled={count < 10} />
</div>

 )

}


export default Counter;
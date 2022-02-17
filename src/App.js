import { useState } from 'react';
import './App.css';
import data from './data'
function App() {
  const [text , setText] = useState([])
  const [count , setCount] = useState(0)
  const submitForm = (e)=>{
    e.preventDefault();
    let amount = parseInt(count)
    if(count <= 0){
      amount = 1;
    }
    if(count>8){
      amount = 8;
    }
    setText(data.slice(0 , amount))
  }
  return (
    <div className="App">
       <h1>Tired of boring lorem Ipsum</h1>
       <form onSubmit={submitForm} style={{marginBottom:'1rem'}}>
         <label htmlFor="paracount">
           Paragraph:
         </label>
         <input onChange= {(e)=>setCount(e.target.value)} type="number" name='paracount' className='paracount'/>
         <button type='submit' className="submit">Generate</button>
       </form>
         <div className="paragraphs">
         {text.map((para)=>{
          return <p style={{textAlign:'center'}}>
            {para}
           </p>
         })}
         </div>
    </div>
  );
}

export default App;

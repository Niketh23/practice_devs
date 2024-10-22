import { useMemo, useState } from "react";

const Usememo = ()=>{
  const [counter,setCounter] = useState(0);
  const [inputVal,setInputVal] = useState(1);

  let count = useMemo(()=>{
    let finalCount = 0;
    for(let i=1;i<=inputVal;i++){
      finalCount = finalCount + i;
    }
    return finalCount;
  },[inputVal])

  // let count = 0;
  //   for(let i=1;i<=inputVal;i++){
  //     count = count + i;
  //   }
  return <div>
    <input type="number" onChange={(e)=>setInputVal(e.target.value)}/>
    <br />
    Sum from 1 to {inputVal} is {count}
    <br />
    <button onClick={()=>setCounter(counter+1)}>counter ({counter})</button>
  </div>
}

export default Usememo;
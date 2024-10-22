import { memo, useCallback, useState } from "react";

const Callback = ()=>{
  const [count,setCount] = useState(0);
  const inputFunction = useCallback(()=>{
    console.log("hi there");
  },[])

  // const inputFunction = ()=>{
  //   console.log("hi there")
  // }
  return <div>
    <ButtonComponent inputFunction = {inputFunction}/>
    <button onClick={()=>setCount(count+1)}>click Me {count}</button>
  </div>
}


const ButtonComponent = memo(({inputFunction})=>{
  console.log("child render")
  return <div>
    <button>Button clicked</button>
  </div>
})

export default Callback;


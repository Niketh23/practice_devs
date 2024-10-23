import { useNavigate } from "react-router-dom";

const Appbar = ()=>{
  const navigate = useNavigate();
  return <div>
  <button onClick={()=> navigate('/dashboard')} >Dashboard</button>
  <button onClick={()=> navigate('/')} >Landing</button>
  </div>
}

export default Appbar;
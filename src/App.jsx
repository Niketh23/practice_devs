import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Callback from './components/Callback'
import ChildrenCode from './components/ChildrenCode'
import Memo from './components/Memo'
import Usememo from './components/UseMemo'
// import Dashboard from './components/Dashboard'
// import Landing from './components/Landing'
import { lazy, Suspense } from 'react'
import Appbar from './components/Appbar'

const Dashboard = lazy(()=> import('./components/Dashboard'));
const Landing = lazy(()=>import('./components/Landing'));

function App() {

  return (
    <>
      {/* <Memo/> */}
      {/* <ChildrenCode> 
        <div>Hi there</div>
        <div>passing props via children to parent</div>
      </ChildrenCode> */}
      {/* <Callback/> */}
      {/* <Usememo/> */}
      <BrowserRouter>
      <Appbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/Dashboard' element= {<Dashboard/>}/>
          <Route path='/' element = {<Landing/>}/>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

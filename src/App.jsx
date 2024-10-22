import './App.css'
import Callback from './components/Callback'
import ChildrenCode from './components/ChildrenCode'
import Memo from './components/Memo'
import Usememo from './components/UseMemo'

function App() {

  return (
    <>
      {/* <Memo/> */}
      {/* <ChildrenCode> 
        <div>Hi there</div>
        <div>passing props via children to parent</div>
      </ChildrenCode> */}
      {/* <Callback/> */}
      <Usememo/>
    </>
  )
}

export default App

import './App.css'
import ChildrenCode from './components/ChildrenCode'
import Memo from './components/Memo'

function App() {

  return (
    <>
      {/* <Memo/> */}
      <ChildrenCode> 
        <div>Hi there</div>
        <div>passing props via children to parent</div>
      </ChildrenCode>
    </>
  )
}

export default App

import MyComponent from './MyComponent'
import './App.css'
import ConditionalRendering from "./ConditionalRendering";

function App() {

  return (
    <>
     <MyComponent order='first'/>
     <MyComponent order = 'second'/>
     <MyComponent order = 'third'/>

      <ConditionalRendering isLoggedIn={true} username={'Shiv'}/>
      <ConditionalRendering isLoggedIn={false} username={'Ajeet'}/>
    </>
  )
}

export default App

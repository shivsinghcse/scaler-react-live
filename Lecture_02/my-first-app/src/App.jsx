import MyComponent from './MyComponent'
import './App.css'
import ConditionalRendering from "./ConditionalRendering";
import Button from './Button';


function App() {

  return (
    <>
     <MyComponent order='first'/>
     <MyComponent order = 'second'/>
     <MyComponent order = 'third'/>

      <ConditionalRendering isLoggedIn={true} username={'Shiv'}/>
      <ConditionalRendering isLoggedIn={false} username={'Ajeet'}/>
      <Button />
    </>
  )
}

export default App

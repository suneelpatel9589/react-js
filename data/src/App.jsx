import Ch1 from './Ch1'
import Child2 from './Child2'
import Child from './Child'

function App() {
  let userdata={
    username:'suneel',
    userage:24

  }
  return (
    <>
    <Child />

    <Child2 userinfo={userdata}/>

    <Ch1 name="suneel" />
    
    </>
  )

  }
export default App


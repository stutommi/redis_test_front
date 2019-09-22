// Libs
import React from 'react'
import { Button } from 'semantic-ui-react'
// Hooks
import { useCounter } from './hooks/useCounterService'

const appStyle = {
  height: '100vh',
  background: 'salmon',
  color: 'white',
  textAlign: 'center'
}

const BACKEND_URL = 'http://localhost:8000/api'

const App = () => {
  const [counter, setCounter, counterService] = useCounter(BACKEND_URL)

  return (
    <div style={appStyle}>
      <h1 style={{ paddingTop: '3em' }}>Counter</h1>
      <h3>{counter}</h3>
      <Button primary onClick={() => { setCounter(counter - 1) }}>
        Substract one
      </Button>
      <Button primary onClick={() => { setCounter(counter + 1) }}>
        Add one
      </Button>
      <Button primary onClick={() => { setCounter(0) }}>
        Reset
      </Button>
      <Button primary onClick={() => { counterService.sendCounter() }}>
        Save count
      </Button>
      <Button primary onClick={() => { counterService.getCounter() }}>
        Load count
      </Button>
      <h3 style={{marginTop: 40}}>This is just a simple counter made as a quick learning project to get some grasp of the basics in redis!</h3>
    </div>
  );
}

export default App;

import './App.css'
import Counter from '../components/CounterClass'
import CounterFunc from '../components/CounterFunc'
import Greeting from '../components/GreetingClass'
import GreetingFunc from '../components/GretingFunc'

function App() {
  return (
    <>
      <div className='App'>
        <Counter initialValue= {0} />
      </div>

      <div className='App'>
        <CounterFunc initialValue= {1} />
      </div>

      <div className='App'>
        <Greeting name= "Hola Euralio" />
      </div>

      <div className='App'>
        <GreetingFunc name= "Hola Euralio" />
      </div>
    </>
  )
}

export default App

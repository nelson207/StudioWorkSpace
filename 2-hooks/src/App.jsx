import './App.css'
import ClassComponent from './components/ClassComponent'
import FuncComponent from './components/FuncComponent'

function App() {
  return (
    <>
      <h1>Hooks em React</h1>
      <hr />
        <section className='App'>
          <ClassComponent></ClassComponent>
          <FuncComponent></FuncComponent>
        </section>
    </>
  )
}

export default App

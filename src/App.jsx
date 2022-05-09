import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Background } from "./components/Background/Background"
import { FigmaMirror } from "./components/FigmaMirror/FigmaMirror"
import "./App.scss"


function App(){

  return (
    <div className="page">
      <Header />
      <Main />
      <Background />
    </div>
    
    
  )

}

export default App
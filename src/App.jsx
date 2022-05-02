import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { FigmaMirror } from "./components/FigmaMirror/FigmaMirror"
import "./App.scss"


function App(){

  return (
    <div className="page">
      <Header />
      <Main />
    </div>
  )

}

export default App

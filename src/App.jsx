import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Background } from "./components/Background/Background"
import { FigmaMirror } from "./components/FigmaMirror/FigmaMirror"
import "./App.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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



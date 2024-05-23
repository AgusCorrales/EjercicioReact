import "./App.css"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './component/Home & Header/Menu'
import Reserve from "./component/Home & Header/Reserve"
import Header from "./component/Home & Header/Header"
import Menu from "./component/Home & Header/Home"


function App() {
  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]
  const printDishes = dishes.map((dishe)=><Home dishe={dishe} key={dishe.id}/>)
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/reserve" element={<Reserve/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/" element={printDishes}/>

      </Routes>
    </BrowserRouter>
  )
   
}

export default App

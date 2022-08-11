import { Router } from './lib/lib-alifer.js'
import Home from "./pages/Home.js";
import Produto  from './pages/Produto.js'





export default function App(){ 
    Router({ "/": Home, "/produto": Produto,})
}





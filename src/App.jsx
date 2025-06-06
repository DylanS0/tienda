
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Laptop from './pages/Laptop'
import Movil from './pages/Movil'
import Tienda from './pages/Tienda'
import Detalle from './pages/Detalle'
import Error404 from './pages/Erro404'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Vehiculos from './pages/Vehiculos'
import Motos from './pages/Motos'
import Categoria from './pages/Categoria'
import Busquedas from './pages/Busquedas'


const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/movil' element={<Movil />} />
        <Route path='/laptop' element={<Laptop />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/categoria/:slug/:name' element={<Categoria />} />
        <Route path='/vehiculos' element={<Vehiculos />} />
        <Route path='/motos' element={<Motos />} />
        <Route path='/busqueda' element={<Busquedas />} />

        <Route path='/detalle/:id/:titulo' element={<Detalle />} />{/* ruta con parametros /:variable*/}
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
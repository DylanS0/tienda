import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct";
const API = 'https://dummyjson.com/products?limit=8&skip=';

const Tienda = () => {
  const [datos, setDatos] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total , setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagina, setPagina] = useState(8);

  const getDatos = async () => {
    try {
      const URI = API + skip
      const response = await fetch(URI); //CAMBIAR API POR URI
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDatos(data.products);
       setTotal(data.total)
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getDatos();
  }, [skip]); //PONER que es lo que esta camabiando
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Cargando Personajes...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center py-5 text-danger">
        <h4>Error al cargar los Personajes</h4>
        <p>{error}</p>
      </div>
    );
  }


  return (
    <div className="container">
      <h4 className="text-center py-4">Tienda {datos.length}</h4>
       <div className="card mb-2 p-1">
      <div className="d-flex justify-content-between align-content-center text-black">
          <p className="lead m-0 fw-bold text-sombra text-white">Pagina {Math.floor(skip / pagina) + 1} de {Math.ceil(total / pagina)}</p>
          <nav className="">
            <ul className="pagination m-0">
              <li className="page-item">
                <a className="page-link" href="#"
                  onClick={() => {
                    if (skip >= pagina) {
                      setSkip(skip - pagina);
                    }
                  }}
                >
                  &lt;&lt;
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {Math.floor(skip / pagina) + 1}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#"
                  onClick={() => {
                    if (skip + pagina < total) {
                      setSkip(skip + pagina);
                    }
                  }}
                >
                  &gt;&gt;
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
      <div className="row">
        {datos.map((item) => (
          <CardProduct key={item.id} item={item}/>
        ))}



      </div>
    </div>
  )
}

export default Tienda
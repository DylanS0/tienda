import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProduct from "../components/CardProduct";
const API = 'https://dummyjson.com/products/category/';
import { useParams } from 'react-router-dom'

const Categoria = () => {

  const param = useParams()
  const URI = API + param.slug
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDatos = async () => {
    try {
      const response = await fetch(URI);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDatos(data.products);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    getDatos();
  }, [param.slug]); //PARAMENTRO
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
      <h3 className='text-center py-4' >{param.slug} </h3>
      <div className="row">
        {datos.map((item) => (
          <CardProduct key={item.id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Categoria
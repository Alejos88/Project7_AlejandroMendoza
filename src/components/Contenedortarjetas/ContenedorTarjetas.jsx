import "./ContenedorTarjetas.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import axios from "axios";




const ContenedorTarjeta = () => {
  const [datos, setDatos] = useState([]);
  const ts = 2;
  const key ="72efe4dd49d31cf6e763208ab598e890";
  const hash = "549d7ae351c9da38a7ffa64748058696";
  const categotia = "comics";
 const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${key}&hash=${hash}`;
  
  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
      } catch (error) {
        console.log("hubo un error: ", error);
      }
    };
    solicitud();
  }, [url]);
  
  
  
  
  return (
    <>
    <main className="contenedor">              
    


      {datos.map((item) => (
        <Card
        key={item.id}
        ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
        titulo={item.title}
        descripcion={item.descripcion}
        />
      ))}
    
    </main>
    </>
  );
};

export default ContenedorTarjeta;

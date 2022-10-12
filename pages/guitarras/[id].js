import { useState } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({guitar, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(1)

    const {descripcion, nombre, precio} = guitar.data.attributes

    const id = guitar.data.id

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cantidad < 1) {
            alert('Cantidad no valida')
            return;
        }
        // Agregarlo al carrito
        const guitarraSeleccionada = {
            id,
            imagen: 'http://localhost:1337'+(guitar.data.attributes.imagen.data.attributes.url),
            nombre,
            precio,
            cantidad,
        };
        agregarCarrito(guitarraSeleccionada)
    }

    return (
        
        <Layout 
            pagina={`Guitarra ${nombre}`}
        >
            
            <div className={styles.guitarra}>
                <Image
                    layout="responsive" 
                    width={180} 
                    height={350} 
                    src={'http://localhost:1337'+(guitar.data.attributes.imagen.data.attributes.url)} 
                    alt={`Imagen Guitarra ${nombre}`}
                />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <label>Cantidad:</label>

                        <select
                            value={cantidad}
                            onChange={(e) => setCantidad(parseInt(e.target.value))}
                        >
                            <option value=''>-- Seleccione -- </option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                        </select>
                        <input 
                            type='submit'
                            value='Agregar al Carrito'
                        />
                    </form>
                </div>
            </div>
        </Layout>
      
    )
    }

    export async function getStaticPaths() {
        const urlGuitar = `${process.env.API_URL}/api/guitarras?fields=*&populate=imagen`
        const respuesta = await fetch(urlGuitar)
        const guitars = await respuesta.json()
        const nuevasGuitar = guitars.data
        const paths = nuevasGuitar.map( guitar => ({
            params: {id: guitar.id.toString()}
        }))
        return {
            paths,
            fallback: false
        }
    }
    
    export async function getStaticProps({params: {id}}) {
        const urlGuitar = `${process.env.API_URL}/api/guitarras/${id}?fields=*&populate=imagen`
        const answer = await fetch(urlGuitar);
        const guitar = await answer.json();
    
        return {
            props: {
                guitar
            }
        }
    }
    
    

    export default Producto

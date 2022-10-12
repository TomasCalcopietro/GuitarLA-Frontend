import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {

    console.log(guitarra)

    const {descripcion, imagen, nombre, precio, id} = guitarra.attributes

    return (
        <div className={styles.guitarra}>
            <Image 
                layout="responsive" 
                width={150} 
                height={350} 
                src={'http://localhost:1337'+(guitarra.attributes.imagen.data.attributes.url)} 
                alt={`Imagen Guitarra ${nombre}`}
            />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${guitarra.id}`}>
                    <a className={styles.enlace}>
                        Ver Producto
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Guitarra
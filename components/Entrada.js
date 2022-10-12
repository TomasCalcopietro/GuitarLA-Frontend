import Link from 'next/link'
import Image from 'next/image'
import { formatearFecha } from "../helpers"
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {

    const { titulo, resumen, imagen, publishedAt, id, url } = entrada.attributes

    return (
        <article>
             <Image 
                layout="responsive" 
                width={800} 
                height={600} 
                src={'http://localhost:1337'+(entrada.attributes.imagen.data.attributes.url)} 
                alt={`imagen blog ${titulo}`}
                />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blog/${entrada.id}`}>
                    <a className={styles.enlace}>
                    Leer Entrada
                    </a>
                </Link>
            </div>
            
        </article>
    )
}

export default Entrada
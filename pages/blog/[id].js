import Image from 'next/image'
import Layout from '../../components/Layout'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {

    const { contenido, imagen, publishedAt, titulo} = entrada.data.attributes

    return (
        <Layout
            pagina = {titulo}
        >
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1> 
                <article className={styles.entrada}>
                    <Image 
                        layout="responsive" 
                        width={800} 
                        height={600} 
                        src={'http://localhost:1337'+(entrada.data.attributes.imagen.data.attributes.url)} 
                        alt={`imagen blog ${titulo}`}
                    />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>

                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
        
    )
}

export async function getStaticPaths() {
    const url = `${process.env.API_URL}/api/blogs?fields=*&populate=imagen`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    const nuevasEntrada = entradas.data
    const paths = nuevasEntrada.map(entrada => ({
        params: {id: entrada.id.toString()}
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {id}}) {
    
    const url = `${process.env.API_URL}/api/blogs/${id}?fields=*&populate=imagen`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()
    return {
        props: {
            entrada
        }
    }
}

export default EntradaBlog
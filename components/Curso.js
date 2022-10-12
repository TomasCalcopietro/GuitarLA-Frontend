import styles from '../styles/Curso.module.css'

const Curso = ({curso}) => {

    const {titulo, contenido} = curso.data.attributes
    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>

                    <a className={styles.enlace} href='#'>Mas Información</a>
                </div>
            </div>

            <style jsx>{`
                section{
                    padding: 10rem 0;
                    margin-top: 10rem;
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), 
                    url(${'http://localhost:1337'+(curso.data.attributes.imagen.data.attributes.url)});
                    background-size: cover ;
                    background-position: 50% ;
                }  
            `}</style>


        </section>
    )
}

export default Curso
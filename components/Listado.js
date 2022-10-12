import Guitarra from "./Guitarra"
import styles from '../styles/Listado.module.css'

const Listado = ({guitarras}) => {

    const guitar = guitarras.data

    return (
        <div className={styles.listado}>
            {guitar.map(guitarra => (
                <Guitarra
                    key = {guitarra.id}
                    guitarra = {guitarra}
                />
            ))}
        </div>
    )
}

export default Listado
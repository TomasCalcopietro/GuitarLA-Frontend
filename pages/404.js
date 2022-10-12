import Link from 'next/link'
import styles from '../styles/NoEncontrado.module.css'

const NoEncotrado = () => {
  return (
    <div>
            <div className={styles.no_encontrado}>
                <h1 className='heading'>Pagina no encontrada</h1>
                <Link href='/'>Volver al Inicio</Link>
            </div>
    
    </div>
  )
}

export default NoEncotrado
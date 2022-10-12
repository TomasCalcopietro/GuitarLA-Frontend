import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'


const Header = ({guitarra}) => {

  const router = useRouter();

  return (
    <header className={styles.header}>
        <div className='contenedor'>
            <div className={styles.barra}>
              <Link passHref href={"/"}>
              <a>
                <Image
                  width={400}
                  height={100}
                  src="/img/logo.svg"
                  alt="logo"
                  className={styles.image}
                />
              </a>
            </Link>

              <nav className={styles.navegacion}>
                  <Link href='/'> Inicio </Link>
                  <Link href='/nosotros'>Nosotros</Link>
                  <Link href='/blog'>Blog</Link>
                  <Link href='/tienda'>Tienda</Link>
                  <Link href='/carrito'>
                    <a>
                      <Image layout='fixed' width={30} height={25} src='/img/carrito.png' alt='Imagen carrito' />
                    </a>
                  </Link>
              </nav>
            </div>
            {guitarra && (
              <div className={styles.modelo}>
                <h2>Modelo {guitarra.attributes.nombre}</h2>
                <p>{guitarra.attributes.descripcion}</p>
                <p className={styles.precio}>${guitarra.attributes.precio}</p>
                <Link href={`/guitarras/${guitarra.id}`}>
                  <a className={styles.enlace}>
                    Ver Producto
                  </a>
                </Link>
              </div>
            )}
        </div>

        {router.pathname === '/' && (
            <img className={styles.guitarra} src='/img/header_guitarra.png' alt='imagen header guitarra' />
        )}

    </header>
  )
}

export default Header
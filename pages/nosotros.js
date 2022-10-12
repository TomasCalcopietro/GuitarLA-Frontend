import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
      <Layout
        pagina='Nosotros'
      >
        <main className='contenedor'>
           <h2 className='heading'>Nosotros</h2>


           <div className={styles.contenido}>

              <Image layout='responsive' width={600} height={450} alt='Imagen sobre Nosotros' src='/img/nosotros.jpg'/>

             <div>
                <p>Nullam pellentesque nisi non dolor porta mattis quis quis turpis. 
                  Duis mattis lacus ac commodo tincidunt. Integer congue gravida iaculis. 
                  Pellentesque cursus pharetra lacus, vel faucibus ante condimentum ut. 
                  Curabitur id pharetra leo, nec efficitur tellus. Vivamus pretium, 
                  arcu nec porttitor tincidunt, erat leo luctus nibh</p>

                  <p>Nullam pellentesque nisi non dolor porta mattis quis quis turpis. 
                  Duis mattis lacus ac commodo tincidunt. Integer congue gravida iaculis. 
                  Pellentesque cursus pharetra lacus, vel faucibus ante condimentum ut. 
                  Curabitur id pharetra leo, nec efficitur tellus. Vivamus pretium, 
                  arcu nec porttitor tincidunt, erat leo luctus nibh</p>
             </div>
           </div>
         </main>
      </Layout>
  )  
}

export default Nosotros
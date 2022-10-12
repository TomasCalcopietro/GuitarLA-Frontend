import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'

export default function Home({guitarras, curso, entradas}) {

  const nuevasEntradas = entradas.data

  return (
      <Layout
        pagina='Inicio'
        guitarra={guitarras.data[3]}
      >
        <main className='contenedor'>
            <h1 className='heading'>Nuestra Coleccion</h1>
            <Listado
              guitarras={guitarras}
            />
        </main>
        <Curso
          curso={curso}
        />
        <section className='contenedor'>
          <ListadoBlog
            nuevasEntradas={nuevasEntradas}
          />
        </section>
        


      </Layout>

  )
}

export async function getServerSideProps() {
 
  
  const urlGuitarras = `${process.env.API_URL}/api/guitarras?fields=*&populate=imagen`
  const urlCursos = `${process.env.API_URL}/api/curso?fields=*&populate=imagen`
  const urlBlog = `${process.env.API_URL}/api/blogs?fields=*&populate=imagen&pagination[limit]=3`

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])


  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}


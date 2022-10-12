import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog"


const Blog = ({ entradas }) => {
 
  const nuevasEntradas = entradas.data
  
  return (
    <Layout 
      pagina="Blog"
    >
      <main className="contenedor">
        <ListadoBlog
          nuevasEntradas={nuevasEntradas}
        />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  

  const url = `${process.env.API_URL}/api/blogs?fields=*&populate=imagen`
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  return {
    props: {
      entradas
    }
  }
}

export default Blog
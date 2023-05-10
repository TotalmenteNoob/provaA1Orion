import Pagina from '@/components/pagina'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import apiProva from '@/services/apiProva'
import { Container } from 'react-bootstrap'

const index = (dados) => {
  return (
    <Pagina titulo='Tipos de Arte'>
      <Container>
        <ul>

          {dados.dados.map(item => (
            <li> {item.title} (Atualizado em: {item.updated_at})</li>
          ))}
        </ul>
      </Container>
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiProva.get('/artwork-types')
  const dados = resultado.data.data

  return {
    props: { dados },
  }
}
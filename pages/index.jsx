import Pagina from '@/components/pagina'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Table } from 'react-bootstrap'
import apiProva from '@/services/apiProva'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/Ai';

const index = (dados) => {
  console.log(dados.dados)
  return (
    <Pagina titulo='Obras de Arte'>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Detalhes</th>
              <th>Título</th>
              <th>Artista</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            {dados.dados.map(item => (
              <tr>
                <td><Link href={'/detalhes/' + item.id}><AiOutlineSearch size={25}/></Link></td>
                <td>{item.title}</td>
                <td>{item.artist_title}</td>
                <td>{item.department_title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiProva.get('/artworks')
  const dados = resultado.data.data

  return {
    props: { dados },
  }
}
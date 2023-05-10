import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import apiProva from '@/services/apiProva'
import Pagina from '@/components/pagina'
import { BsBoxArrowUpRight } from 'react-icons/Bs';
import { AiOutlineArrowLeft } from 'react-icons/Ai';
import Link from 'next/link'

const Detalhes = (dados) => {
    console.log(dados.dados.title)
    return (

        <Pagina titulo={dados.dados.title}>
            <Container>
                <Row>
                    <Col md={5}>
                        {dados.dados.image_id !== null ? (
                            <Card border="success">
                                <Card.Header className='bg-success text-light'><h5>Foto</h5></Card.Header>
                                <Card.Body>
                                    <Card.Img src={"https://www.artic.edu/iiif/2/" + dados.dados.image_id + "/full/843,/0/default.jpg"}></Card.Img>
                                </Card.Body>
                                <Link href={"https://www.artic.edu/iiif/2/" + dados.dados.image_id + "/full/843,/0/default.jpg"}><Button variant='primary m-2'>Ampliar <BsBoxArrowUpRight size={20} /></Button></Link>

                            </Card>
                        ) : ''}
                        <Link href={'/'}><Button variant='danger my-2' ><AiOutlineArrowLeft size={20} /> Voltar</Button></Link>
                    </Col>
                    <Col md={7}>
                        <Card border="success">
                            <Card.Header className='bg-success text-light'><h5>{dados.dados.title}</h5></Card.Header>
                            <Card.Body>
                                <p className="fs-3">
                                    <strong>Artista: </strong>
                                    {dados.dados.artist_title}
                                </p>
                                <p className="fs-3">
                                    <strong>Departamento: </strong>
                                    {dados.dados.department_title}
                                </p>
                                <p className="fs-3">
                                    <strong>Origem: </strong>
                                    {dados.dados.place_of_origin}
                                </p>
                                <p className="fs-3">
                                    <strong>Dimensões: </strong>
                                    {dados.dados.dimensions}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {
    const id = context.params.id

    const resultado = await apiProva.get('/artworks/' + id)
    const dados = resultado.data.data


    return {
        props: { dados }, // will be passed to the page component as props
    }
}


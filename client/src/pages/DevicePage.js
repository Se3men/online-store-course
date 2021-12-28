import React from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import photo from '../assets/Apple_iPhone_12_mini.jpg';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
  const device = { id: 1, name: "12 mini", price: 50000, rating: 5, img: photo }
  const description = [
    {id: 1, title: 'Оперативная память', description: '64 гб'},
    {id: 2, title: 'Камера', description: '84 мп'},
    {id: 3, title: 'Процессор', description: 'core i 16'},
    {id: 4, title: 'Кол-во ядер', description: '24'},
    {id: 5, title: 'Аккумулятор', description: '20000'},
  ]
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2 className='col-md-4'>{device.name}</h2>
            <div
              className='col-md-4 d-flex justify-content-center align-items-center'
              style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover'}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Характеристики</h1>
        {description.map((info, index) =>
          <Row className='col-md-12' key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;

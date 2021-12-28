import React from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';
import Row from "react-bootstrap/Row";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'
import { useLocation, NavLink } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container 
      className='d-flex justify-content-center align-items-center'
      style={{height: window.innerHeight - 54}}
      >  
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш email...'
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите ваш пароль...'
          />
          <Row 
            className='d-flex justify-content-between mt-3 ps-3 pe-3'
          >
            {isLogin ?
              <div className='col-md-8'>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
              :
              <div className='col-md-8'>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            }
            <Button
              className='col-md-4'
              variant={"outline-success"}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;

import React, { useContext } from 'react';
import { Context } from '../..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const {user} = useContext(Context);
  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Купи девайс</NavLink>
        {user.isAuth ?
          <Nav className="ms-auto" style={{color: 'white'}}>
            <Button variant={'outline-light'}>Админ панель</Button>
            <Button variant={'outline-light'} className='ms-2'>Выйти</Button>
          </Nav>
          :
          <Nav className="ms-auto" style={{color: 'white'}}>
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
});

export default NavBar;

import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Logo from './images/logo1.jpg'
function App() {
  return (
    <BrowserRouter>
      <Layout fixedHeader>
        {/* <Header title={<span><span style={{ color: '#ddd' }}>E-Book </span><strong>Reader</strong></span>}> */}
        <Header style={{ background: "#008080", zIndex: "1" }} title={<Link style={{ textDecoration: "none", color: "white" }}
          to="/"><span><img style={{ borderRadius: "100%", width: "30px", height: "30px" }}
            src={Logo}
            alt="book images" />
          &nbsp;<span style={{ color: '#ddd' }}>E-Book </span><strong>Reader</strong></span></Link>}>
          <Navigation>
            <Link style={{ color: 'white', fontSize: '15px', fontWeight: 'bold', textDecoration: "none", }} to="AboutUs">About Us</Link>
            <Link style={{ color: 'white', fontSize: '15px', fontWeight: 'bold', textDecoration: "none", }} to="BookLibrary">All Books</Link>
            <Link style={{ color: 'white', fontSize: '15px', fontWeight: 'bold', textDecoration: "none", }} to="/BookCollections">Book Store</Link>
            <Link style={{ color: 'white', fontSize: '15px', fontWeight: 'bold', textDecoration: "none", }} to="CreateBook">Create Book</Link>
          </Navigation>
        </Header>
        <Drawer style={{ textDecoration: "none", color: "white" }} title={<Link style={{ textDecoration: "none", color: "black" }}
          to="/"><span><img style={{ borderRadius: "100%", width: "30px", height: "30px", border: "1px solid black" }}
            src={Logo}
            alt="book images" /><span style={{ color: "black" }}> E-Book Reader</span></span></Link>}>
          <Navigation>
            <Link style={{ color: 'black', fontSize: '15px', fontWeight: 'bold', textDecoration: "none", }} to="AboutUs">About Us</Link>
            <Link style={{ color: 'black', fontSize: '15px', fontWeight: 'bold', textDecoration: "none", }} to="/BookLibrary">All Books</Link>
            <Link style={{ color: 'black', fontSize: '15px', fontWeight: 'bold', textDecoration: "none", }} to="/BookCollections">Book Store</Link>
            <Link style={{ color: 'black', fontSize: '15px', fontWeight: 'bold', textDecoration: "none", }} to="CreateBook">Create Book</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

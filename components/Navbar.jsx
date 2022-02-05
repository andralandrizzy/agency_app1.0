import React from 'react';
import NavbarStyle from "../styles/Nav.module.css";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from 'next/link';


const Navheader = () => {
  return (
    <Navbar sticky='top' collapseOnSelect expand="md" className={NavbarStyle.nav} variant="light">
      <Container>
        <Link href="/">
          <Navbar.Brand className={NavbarStyle.lg_link}>
            <h1>R.A</h1>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle className={NavbarStyle.toggle} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className={NavbarStyle.wrap} id="responsive-navbar-nav">
          <Nav className={NavbarStyle.navItem}>
            <Link href= "/">
              <a className={NavbarStyle.listItem}>Home
              </a>
            </Link>
            <Link href= "/about">
              <a className={NavbarStyle.listItem}>About Us
              </a>
            </Link>
            <Link href= "/services">
              <a className={NavbarStyle.listItem}>Services
              </a>
            </Link>
            <Link href= "/blogs">
              <a className={NavbarStyle.listItem}>Blog
              </a>
            </Link>
            <Link href= "/contact">
              <a className={NavbarStyle.listItem}>contact
              </a>
            </Link>
          </Nav>
          <div className={NavbarStyle.icons}>
            <Link href="/">
              <a className={NavbarStyle.phone}><AiOutlinePhone/></a>
            </Link>
            <Link href="/">
              <a className={NavbarStyle.mail}><AiOutlineMail/></a>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Navheader;

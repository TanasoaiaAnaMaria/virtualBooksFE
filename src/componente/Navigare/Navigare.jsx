import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./Navigare.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useAuth from "../../hooks/useAuth";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";

const NavBarStyled = styled.div`
  background-color: #0035e1;
  width: 100%;
  height: 100%;
  margin-top: -8px;
  min-width:220px;
`;

const Navigare = (props) => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Navbar key={props.expand} sticky="top" expand={props.expand}>
      <NavBarStyled>
        <Container
          fluid
          className="d-flex align-items-center justify-content-between"
        >
          <Navbar.Brand href="/" className="text-white">
            Travel
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${props.expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${props.expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${props.expand}`}
            placement="start"
          >
            <NavBarStyled>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${props.expand}`}
                >
                  <Nav.Link href="/" className="text-white">
                    Travel
                  </Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className={styles.bodyNav}>
                <Nav
                  className={`justify-content-end flex-grow-1 pe-3 p-2 d-flex align-items-center`}
                >
                  <Nav.Link className={`text-white ${styles.onHover}`} href="/">
                    Acasa
                  </Nav.Link>
                  {/* <NavDropdown
                    title={<span className="text-white">Descriere</span>}
                    className={` ${styles.onHover}`}
                    id={`offcanvasNavbarDropdown-expand-${props.expand}`}
                  >
                    <NavDropdown.Item
                      className={`${styles.hello}`}
                      href="/detalii/viziune"
                    >
                      Despre noi
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      className={`${styles.hello}`}
                      href="/detalii/istorie"
                    >
                      Scop
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      className={`${styles.hello}`}
                      href="/detalii/premii"
                    >
                      Viziune
                    </NavDropdown.Item>
                  </NavDropdown> */}

                  <Nav.Link className={`text-white ${styles.onHover}`}
                    href="/abonamente"
                  >
                    Abonamente
                  </Nav.Link>
                  <Nav.Link className={`text-white ${styles.onHover}`}
                    href="/bonus"
                  >
                    Bonusuri
                  </Nav.Link>
                  {!user ? (
                    <Nav.Link
                      className={`${styles.hello} text-white`}
                      href="/login"
                    >
                      Conectare
                    </Nav.Link>
                  ) : (
                    <NavDropdown
                      title={
                        <div className={styles.profile}>
                          <div className={styles.photoDiv}>
                            <Person className={`${styles.userPhoto} text-white`} />

                          </div>
                        </div>
                      }
                      className={`${styles.profileTitle} `}
                      id={`offcanvasNavbarDropdown-expand-${props.expand}`}
                    >
                      {/* <NavDropdown.Item className={styles.hello}>
                        {"Hello, " + user.prenume}
                      </NavDropdown.Item> */}

                      <NavDropdown.Item
                        className={`${styles.hello}`}
                        href="/user/profil"
                      >
                        Profil
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        className={`${styles.hello}`}
                        href="/user/biblioteca"
                      >
                        Biblioteca
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        className={`${styles.hello}`}
                        href="/user/abonament"
                      >
                        Abonament
                      </NavDropdown.Item>

                      <NavDropdown.Divider />

                      <NavDropdown.Item
                        onClick={handleLogout}
                        className={styles.profileOption}
                      >
                        <Logout className={styles.logout} />
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                </Nav>
              </Offcanvas.Body>
            </NavBarStyled>
          </Navbar.Offcanvas>
        </Container>
      </NavBarStyled>
    </Navbar>
  );
};

export default Navigare;

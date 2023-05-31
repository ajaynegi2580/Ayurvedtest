import React, { useState } from "react";
import logo from "../home/asset/images/Logo.png";
import { Navbar, Nav } from "rsuite";
import { FaBars, FaClose, FaThLarge } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} vertical onSelect={onSelect} style={{ width: 100 }}>
      <Nav.Item eventKey="home">
        <Link to="">Home</Link>
      </Nav.Item>
      <Nav.Item eventKey="home">
        <Link to="/about">AboutUs</Link>
      </Nav.Item>
      <Nav.Menu title="Kidney Disease" className="navmenubar">
        <Link to="/kidneydisease/acutekidneydisease">
          <Nav.Item>Acute Kidney Disease</Nav.Item>
        </Link>
        <Link to="/kidneydisease/chronickidneydisease">
          <Nav.Item>Chronic Kidney Disease</Nav.Item>
        </Link>
        <Link to="/kidneydisease/polycystickidneydisease">
          <Nav.Item>Polycystic Kidney Disease</Nav.Item>
        </Link>
        <Link to="/kidneydisease/nephroticsyndrome">
          <Nav.Item>Nephrotic Syndrome</Nav.Item>
        </Link>
        <Link to="/kidneydisease/creatinine">
          <Nav.Item>Creatinine</Nav.Item>
        </Link>
        <Link to="/kidneydisease/proteinuria">
          <Nav.Item>Proteinuria</Nav.Item>
        </Link>
      </Nav.Menu>
      <Nav.Item eventKey="ayurveda">
        <Link to="/ayurveda">Ayurveda</Link>
      </Nav.Item>
      <Nav.Item eventKey="contact">
        <Link to="/contact">Contact</Link>
      </Nav.Item>
    </Nav>
  );
};

export default function NavbarHead() {
  const [active, setActive] = React.useState("");

  const [navbarcolleps, setnavbarcolleps] = useState(false);

  return (
    <div>
      <Navbar className="navclass">
        <Navbar.Brand href="">
          <img
            src={logo}
            alt="logo"
            style={{ width: "90px", marginTop: "-30px", marginLeft: "-20px" }}
          />
        </Navbar.Brand>
        <Nav pullRight className="navbarcolleps" id="navcolleps">
          <Link to="/" className="hide-link-decorations">
            <Nav.Item href="/">Home</Nav.Item>
          </Link>

          <Link to="/about" className="hide-link-decorations">
            <Nav.Item href="/about">About us</Nav.Item>
          </Link>

          <Nav.Menu title="Kidney Disease">
            <Link
              to="/kidneydisease/acutekidneydisease"
              className="hide-link-decorations"
            >
              <Nav.Item>Acute Kidney Disease</Nav.Item>
            </Link>

            <Link
              to="/kidneydisease/chronickidneydisease"
              className="hide-link-decorations"
            >
              <Nav.Item>Chronic Kidney Disease</Nav.Item>
            </Link>

            <Link
              to="/kidneydisease/polycystickidneydisease"
              className="hide-link-decorations"
            >
              <Nav.Item>Polycystic Kidney Disease </Nav.Item>
            </Link>

            <Link
              to="/kidneydisease/nephroticsyndrome"
              className="hide-link-decorations"
            >
              <Nav.Item>Nephrotic Syndrome</Nav.Item>
            </Link>

            <Link
              to="/kidneydisease/creatinine"
              className="hide-link-decorations"
            >
              <Nav.Item>Creatinine</Nav.Item>
            </Link>

            <Link
              to="/kidneydisease/proteinuria"
              className="hide-link-decorations"
            >
              <Nav.Item>Proteinuria</Nav.Item>
            </Link>
          </Nav.Menu>
          <Nav pullRight>
            <Link to="/ayurveda" className="hide-link-decorations">
              <Nav.Item href="/ayurveda">Ayurveda</Nav.Item>
            </Link>

            <Link to="/contact" className="hide-link-decorations">
              <Nav.Item href="/contact">Contact</Nav.Item>
            </Link>
          </Nav>
        </Nav>
        <Nav pullRight>
          <Nav.Item>
            <span onClick={() => setnavbarcolleps(!navbarcolleps)}>
              {navbarcolleps ? (
                <GrClose fontSize={20} />
              ) : (
                <FaBars style={{ fontSize: 23 }} className="baricon" />
              )}
            </span>
          </Nav.Item>
        </Nav>
      </Navbar>
      <CustomNav
        active={active}
        onSelect={setActive}
        className={`navformobile  ${navbarcolleps && "active"}`}
      />
    </div>
  );
}

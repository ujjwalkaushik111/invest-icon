import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgsvg from "../assets/image/svg/logofotter.svg";
import { Link } from "react-router-dom";
import uparrow from "../assets/image/png/Uparrow.png";
import imgline from "../assets/image/png/Linelast.png"

const Footer = () => {
  return (
    <section className="bg-gray py-5">
      <Container className="my-5">
        <Row>
          <Col lg={6}>
            <div className="d-sm-flex align-items-start">
              <img className="ps-5 ps-sm-0" src={imgsvg} alt="#" />
              <div className="ps-5 position-relative">
                <p className="text_ffffff fw-normal fs_4md ff_jost mt-5 mt-sm-0">123 Market St. #22B <span className="d-block">Charlottesville, California </span>44635 </p>
                <p className="text_ffffff fw-normal fs_xsm ff_poppins">contact@exmpl.page</p>
                <img className="position-abs position-absolute" src={imgline} alt="#" />
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <Row>
              <Col xs={4}>
                <ul>
                  <li>
                    <Link className="ff_poppins fw-normal fs_sm text_ffffff opacity75 link">About</Link>
                  </li>
                  <li>
                    <Link className="ff_poppins fw-normal fs_sm text_ffffff opacity75 link">Growers</Link>
                  </li>
                  <li>
                    <Link className="ff_poppins fw-normal fs_sm text_ffffff opacity75 link">Merchants</Link>
                  </li>
                  <li>
                    <Link className="ff_poppins fw-normal fs_sm text_ffffff opacity75 link">Partners</Link>
                  </li>
                  <li>
                    <Link className="ff_poppins fw-normal fs_sm text_ffffff opacity75 link">Contact</Link>
                  </li>
                </ul>
              </Col>

              <Col xs={4}>
                <ul>
                  <li>
                    <Link className="ff_poppins fw-normal fs_sm text_ffffff opacity75 link">Facebook</Link>
                  </li>
                  <li>
                    <Link className="ff_poppins fw-normal fs_sm text_ffffff opacity75 link">Telegram</Link>
                  </li>
                  <li>
                    <Link className="ff_poppins fw-normal fs_sm text_ffffff opacity75 link">Watsapp</Link>
                  </li>
                  <li>
                    <Link className="ff_poppins fw-normal fs_sm text_ffffff opacity75 link">Instagram</Link>
                  </li>
                </ul>
              </Col>
              <Col xs={4}>
                <img src={uparrow} alt="#" />
              </Col>
            </Row>
          </Col>
        </Row>
        <h2 className="text-center mt-5 ff_poppins fw-normal fs_sm text_ffffff opacity75">© 2022 Invest Coin. All rights reserved.</h2>
      </Container>
    </section>
  );
};

export default Footer;

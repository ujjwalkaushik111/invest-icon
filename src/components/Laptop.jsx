import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import laptopimg from "../assets/image/png/laptopimg.png";
import leftimg from "../assets/image/png/left-container.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Laptop = () => {
  // first modal
  const [show, setShow] = useState(false);

  // first modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <section className="py-5"> 
      <Container>
        <Row>
          <Col lg={5} data-aos="fade-right" data-aos-duration="3000">
            <h4 className="fs_2lg fw-normal text_252B42 fs_open_sans">
              Invest Coin - это про безопасность!
            </h4>
            <p className="w-390 text_222B32 fw-normal fs_3xmd fs_open_sans ">
              И как выражается безопасность?Чем меньше вложений в инвестиции,
              тем больше риска потерпеть неудачу. Чем больше вложений, тем тем
              меньше риска. Безопасность инвестии означает что ваши вложения
              (10$ или 100$) отдельно не инвестируются. Наши опытные инвесторы
              делают ставки с общего счета, где на балансе всегда больше 100
              000$.
            </p>
            <p className="w-390 text_222B32 fw-normal fs_3xmd fs_open_sans "> Нажмите на кнопку ниже и узнайте все лично от наших
              менеджеров</p>
            <button className="Button-S px-4 mt-4">Узнать подробнее</button>
          </Col>
          <Col lg={7} data-aos="fade-left" data-aos-duration="3000">
            <div className="d-flex justify-content-center">
            <img className=" mt-5 pt-5 w-75" src={laptopimg} alt="#" />
            </div>
          </Col>
        </Row>
        <div className="pt-5 mt-5">
          <Row>
            <Col lg={7} data-aos="fade-right" data-aos-duration="3000">
              <div onClick={handleShow}>
              <img className="w-100" src={leftimg} alt="#" />
              </div>
            </Col>
            <Col lg={5} className="mt-5 justify-content-end d-flex flex-column"data-aos="fade-left" data-aos-duration="3000">
              <div>
                <h4 className="fw-bold fs_2xmd text_252B42 fs_open_sans">
                  Обучение?
                </h4>
                <p className="fw-normal fs_lg text_252B42 fs_open_sans">
                  Конечно!{" "}
                  <span className="d-block"> Индивидуальные уроки </span>{" "}
                  <span className="d-block">
                    {" "}
                    тем кто хочет научиться инвестировать.
                  </span>
                </p>
                <h4 className="fw-bold fs_md text_252B42 fs_open_sans">
                  Подробнее посмотрите на видео
                </h4>
                <p className="fw-normal fs_md text_252B32 fs_open_sans">
                  Или напишите менеджеру
                </p>
                <div>
                  <button className="Button-H">Написать</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Laptop;

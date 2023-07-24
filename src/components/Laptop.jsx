import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import laptopimg from "../assets/image/png/laptopimg.png";
import leftimg from "../assets/image/png/left-container.png";

const Laptop = () => {
  return (
    <section className="py-5"> 
      <Container>
        <Row>
          <Col lg={6}>
            <h4 className="fs_2lg fw-normal text_252B42 fs_open_sans">
              Invest Coin - это про безопасность!
            </h4>
            <p className="w-530 text_222B32 fw-normal fs_3xmd fs_open_sans ">
              И как выражается безопасность?Чем меньше вложений в инвестиции,
              тем больше риска потерпеть неудачу. Чем больше вложений, тем тем
              меньше риска. Безопасность инвестии означает что ваши вложения
              (10$ или 100$) отдельно не инвестируются. Наши опытные инвесторы
              делают ставки с общего счета, где на балансе всегда больше 100
              000$. Нажмите на кнопку ниже и узнайте все лично от наших
              менеджеров
            </p>
            <button className="Button-S px-4 mt-4">Узнать подробнее</button>
          </Col>
          <Col lg={6}>
            <img className="w-100 mt-5 pt-5" src={laptopimg} alt="#" />
          </Col>
        </Row>
        <div className="pt-5 mt-5">
          <Row>
            <Col lg={7}>
              <img className="w-100" src={leftimg} alt="#" />
            </Col>
            <Col lg={5} className="mt-5 justify-content-end d-flex flex-column">
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
    </section>
  );
};

export default Laptop;

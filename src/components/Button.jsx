import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Helloboy from '../assets/image/png/hello_man.png'

const Button = () => {
  return (
    <section className="my-5 overflow-hidden">
      <Container>
        <h2 className="text-center ff_open_sans fw-normal fs-2lg text_252B42">Напишите нам</h2>
        <p className="text-center ff_open_sans fw-normal fs-5md text_252B42">
          Вопросы, отзывы, пожелания и жалобы. Мы всегда стараемся ответить <span className="d-block">быстро и нам важно узнать ваше мнение.</span>
          
        </p>
        <Row>
          <Col xl={6} className="mt-5"data-aos="fade-right" data-aos-duration="3000">
            <div className="py-4 ">
              <input
                className="width-lg-100 Button_input ps-4 "
                type="text"
                placeholder="Ваше имя"
              />
            </div>
            <div className="py-4 ">
              <input
                className="width-lg-100 Button_input ps-4 "
                type="text"
                placeholder="Страна"
              />
            </div>
            <div className="py-4 mt-4 Button_input2 width-lg-100">
              <input
                className=" ps-4"
                type="text"
                placeholder="Сообщение"
              />
            </div>
            <div className="mt-5"><button className="Button-OT mt-5">Отправить</button></div>
            
          </Col>
          <Col xl={6} data-aos="fade-left" data-aos-duration="3000">
          <img className="width-lg-100" src={Helloboy} alt="#" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Button;

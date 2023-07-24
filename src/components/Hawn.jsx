import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img11 from "../assets/image/png/imgbitcoin.png";
import img22 from "../assets/image/png/Litecoin_img.png";
import img33 from "../assets/image/png/Tezos-img.png";
import img44 from "../assets/image/png/ethereum-img.png";
import img55 from "../assets/image/png/Chainlink_img.png";
import img66 from "../assets/image/png/ton_img.png";
import img111 from "../assets/image/png/Frame-111.png";
import img222 from "../assets/image/png/Frame-222.png";
import img333 from "../assets/image/png/Frame-333.png";
import Slider from "react-slick";

const Hawn = () => {
  const Slidercreate = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5 my-5">
      <h2 className="text-center ff_open_sans text_252B42 fs_2lg fw_normal">
        Наши площадки
      </h2>
      <p className="text-center text_252B32 ff_open_sans fs_5md fw-normal">
        Наш проект работает только с проверенными площадками для{" "}
        <span className="d-block">
          инвестиций, чтобы максимально снизить риски.
        </span>
      </p>
      <Container className="mt-5 mt-lg-0 py-5">
        <div class="d-flex justify-content-between align-items-center overflow-auto gap-4">
          <div class="justify-content-center filter_darkgrey animate__animated  animate__infinite animate__slower animate__wobble">
            <img src={img11} alt="#" />
          </div>
          <div class="justify-content-center filter_darkgrey animate__animated  animate__infinite animate__slower animate__wobble">
            <img src={img22} alt="#" />
          </div>
          <div class="justify-content-center filter_darkgrey animate__animated  animate__infinite animate__slower animate__wobble">
            <img src={img33} alt="#" />
          </div>
          <div class="justify-content-center filter_darkgrey animate__animated  animate__infinite animate__slower animate__wobble">
            <img src={img44} alt="#" />
          </div>
          <div class="justify-content-center filter_darkgrey mt-5 mt-md-0 animate__animated  animate__infinite animate__slower animate__wobble">
            <img src={img55} alt="#" />
          </div>
          <div class="justify-content-center filter_darkgrey mt-5 mt-md-0 animate__animated  animate__infinite animate__slower animate__wobble">
            <img src={img66} alt="#" />
          </div>
        </div>
        <div className="d-flex my-5 justify-content-center">
          <div className="line11 text-center "></div>
        </div>

        <div className="py-5">
          <h2 className="text-center mt-5 pt-5 ff_open_sans text_252B42 fw-normal fs_xlg">
            Отзывы наших партнеров
          </h2>
          <p className="text-center ff_open_sans text_222B32 fw-normal fs_5md mb-5">
            Каждый отзыв по-особенному ценный для нас. Ведь для этого было{" "}
            <span className="d-block">
              проделано большой совместный путь. Успех состоит из доверие,
            </span>
            <span>готовности к развитию и перемен.</span>
          </p>
          <Slider {...Slidercreate}>
            <Col xl={4} className="d-flex justify-content-center">
              <img src={img111} alt="#" />
            </Col>
            <Col xl={4} className="d-flex justify-content-center">
              <img src={img222} alt="#" />
            </Col>
            <Col xl={4} className="d-flex justify-content-center">
              <img src={img333} alt="#" />
            </Col>
            <Col xl={4} className="d-flex justify-content-center">
              <img src={img111} alt="#" />
            </Col>
            <Col xl={4} className="d-flex justify-content-center">
              <img src={img222} alt="#" />
            </Col>
            <Col xl={4} className="d-flex justify-content-center">
              <img src={img333} alt="#" />
            </Col>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Hawn;

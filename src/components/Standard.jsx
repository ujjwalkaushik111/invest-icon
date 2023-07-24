import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const Standard = () => {
  const Slidercreate22 = {
    dots: false,
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
        breakpoint: 920,
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
    <section className="bg-gray py-5">
      <Container>
        <h2 className="text-center py-4 ff_open_sans fs_2lg fw-normal text_ffffff">
          Инвестиции
        </h2>
        <p className="text-center pb-5 ff_open_sans fs_5md fw-normal text_ffffff">
          Самые оптимальные варианты инвестиций. Каждый найдет свой путь и{" "}
          <span className="d-block">начнет уверенно шагать по нему.</span>
        </p>
        <Slider {...Slidercreate22} className="my-5">
          <Col lg={4} className="d-flex justify-content-center">
            <div className="Box_1 mb-lg-0 mb-4 ">
              <h3 className="ff_open_sans fw-bold text_252B42 fs_2xmd">FREE</h3>
              <p className="ff_open_sans fw-normal text_222B32 fs_2xsm text-center">
                Organize across all{" "}
                <span className="d-block">apps by hand</span>
              </p>
              <div className="d-flex align-items-center">
                <h2 className="ff_open_sans fs_2xl text_252B42 fw-bold">0</h2>
                <div className="ps-2">
                  <p className="ff_open_sans fs_2xmd text_252B42 fw-bold mb-0">
                    $
                  </p>
                  <p className="ff_open_sans fs_2xsm text_252B42 fw-normal">
                    Per Month
                  </p>
                </div>
              </div>
              <div>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
              </div>
              <button className="B-order">Order Now</button>
            </div>
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <div className="Box_1 mb-lg-0 mb-4 ">
              <h3 className="ff_open_sans fw-bold text_252B42 fs_2xmd">
                STANDARD
              </h3>
              <p className="ff_open_sans fw-normal text_222B32 fs_2xsm text-center">
                Organize across all{" "}
                <span className="d-block">apps by hand</span>
              </p>

              <div className="d-flex align-items-center">
                <h2 className="ff_open_sans fs_2xl text_252B42 fw-bold">10</h2>
                <div className="ps-2">
                  <p className="ff_open_sans fs_2xmd text_252B42 fw-bold mb-0">
                    $
                  </p>
                  <p className="ff_open_sans fs_2xsm text_252B42 fw-normal">
                    Per Month
                  </p>
                </div>
              </div>
              <div>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
              </div>
              <button className="B-order">Order Now</button>
            </div>
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <div className="Box_1 mb-lg-0 mb-4 ">
              <h3 className="ff_open_sans fw-bold text_252B42 fs_2xmd">
                BUSINESS
              </h3>
              <p className="ff_open_sans fw-normal text_222B32 fs_2xsm text-center">
                Organize across all{" "}
                <span className="d-block">apps by hand</span>
              </p>

              <div className="d-flex align-items-center">
                <h2 className="ff_open_sans fs_2xl text_252B42 fw-bold">99</h2>
                <div className="ps-2">
                  <p className="ff_open_sans fs_2xmd text_252B42 fw-bold mb-0">
                    $
                  </p>
                  <p className="ff_open_sans fs_2xsm text_252B42 fw-normal">
                    Per Month
                  </p>
                </div>
              </div>
              <div>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
                <p className="ff_open_snas fs_1xsm fw-normal text_252B42">
                  Pricing Feature
                </p>
              </div>
              <button className="B-order">Order Now</button>
            </div>
          </Col>
        </Slider>
      </Container>
    </section>
  );
};

export default Standard;

import React from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import imgcoin from "../assets/image/png/pngwing.png";
import imgcoin2 from "../assets/image/png/crypto.png";
import imgcoin3 from "../assets/image/png/pngwing-3.png";
import mxplayer from "../assets/image/png/maskgroup1.png";
import mxplayer2 from "../assets/image/png/Maskgroup2.png";
import mxplayer3 from "../assets/image/png/maskgroup3.png";
import Slider from "react-slick";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Investcoin = () => {
  // first modal video
  const [show, setShow] = useState(false);
  // 2nd modal
  const [show1, setShow1] = useState(false);

  // first modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 2nd modal
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const Slider3box = {
    dots: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    arrows: false,
    centerPadding: "55px",
    autoplaySpeed: 1000,
    slidesToShow: 2.3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1244,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
    <section className="pb-5" data-aos="fade-left" data-aos-duration="3000">
      <Container className="my-5 py-5">
        <h2 className="text-center text_252B42 fs_2lg fw-normal ff_open_sans mt-5">
          Как “Invest Coin” работает?{" "}
        </h2>
        <p className="text-center text_222B32 ff_open_sans fs_5md fw-normal mb-5">
          Invest Coin - это команда оптыных инвесторов, аналитиков и
          программистов. Мы работаем на площадках криптовалют (и не только) уже
          более 4 года и имеем конкурентоспособное портфолио. Все встречи,
          общения и договоренности с нашими партнерами (клиентами) проходят в
          прозрачной форме.
        </p>
        <Row>
          <Col lg={4}>
            <div className="d-flex justify-content-center align-items-center flex-column my-5">
              <img src={imgcoin} alt="#" />
              <h4 className="ff_open_sans fw-bold fs_2xmd text_252B42">
                Надежность
              </h4>
              <p className="text-center ff_open_sans fw-normal text_222B32 fs_md w-232">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex justify-content-center align-items-center flex-column my-5">
              <img src={imgcoin2} alt="#" />
              <h4 className="ff_open_sans fw-bold fs_2xmd text_252B42">Опыт</h4>
              <p className="text-center ff_open_sans fw-normal text_222B32 fs_md w-232">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex justify-content-center align-items-center flex-column my-5">
              <img src={imgcoin3} alt="#" />
              <h4 className="ff_open_sans fw-bold fs_2xmd text_252B42">
                Прозрачность
              </h4>
              <p className="text-center ff_open_sans fw-normal text_222B32 fs_md w-232">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Slider {...Slider3box} data-aos="fade-up-left" data-aos-duration="3000">
        <div onClick={handleShow}>
          <img className="w-100 px-5 py-5" src={mxplayer} alt="#" />
        </div>
        <div onClick={handleShow1}>
          <img className="w-100 px-5 py-5" src={mxplayer2} alt="#" />
        </div>
        <div onClick={handleShow}>
          <img className="w-100 px-5 py-5" src={mxplayer3} alt="#" />
        </div>
        <div onClick={handleShow1}>
          <img className="w-100 px-5 py-5" src={mxplayer} alt="#" />
        </div>
        <div onClick={handleShow}>
          <img className="w-100 px-5 py-5" src={mxplayer2} alt="#" />
        </div>
        <div onClick={handleShow1}>
          <img className="w-100 px-5 py-5" src={mxplayer3} alt="#" />
        </div>
      </Slider>

      {/* first modal */}

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

      {/* second modal */}
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/HGTJBPNC-Gw"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Investcoin;

import React, { useState } from 'react'
import header_logo from '../assets/image/svg/firstlogo.svg'
import instagram from '../assets/image/svg/mdi_instagram.svg'
import telegram from '../assets/image/svg/telegram.svg'
import whatsapp from '../assets/image/svg/fa_whatsapp.svg'
import { Link } from 'react-router-dom'
import { Container,Col,Row } from 'react-bootstrap'

const Mynaveclass = () => {
    const [showNavbar, setShowNavbar] =useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow_hidden');
    } else {
        document.body.classList.add('overflow_hidden')
    }
  return (
   <section className='bg_Image min-vh-100'>
    <header className='pt-5'>
                <Container>
                    <nav className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <img className='pe-sm-5 me-sm-5' src={header_logo} alt="logo" />
                            <ul className={showNavbar ? 'd-flex align-items-center gap-5 mb-0 nav_sm' : 'd-flex align-items-center gap-5 mb-0 nav_sm nav_show'} >
                                <li className='me-4'><Link className='ff_open_sans fs_3xmd text_ffffff fw-light link'>Особенности</Link></li>
                                <li className='me-4'><Link className='ff_open_sans fs_3xmd text_ffffff fw-light link'>Отзывы</Link></li>
                                <li><Link className='ff_open_sans fs_3xmd text_ffffff fw-light link'>Инвестиция</Link></li>
                                <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-lg-none" onClick={() => setShowNavbar(true)}>&times;</span>
                            </ul>
                        </div>
                        <div>
                            <a className='me-3' href="https://instagram.com"><img src={instagram} alt="instagram" /></a>
                            <a className='me-3' href="https://telegram.com"><img src={telegram} alt="telegram" /></a>
                            <a href="https://whatsapp.com"><img src={whatsapp} alt="whatsapp" /></a>
                        </div>
                        <span title="open"
                            className="d-inline d-lg-none fw-bold fs-1 text-white"
                            onClick={() => setShowNavbar(false)}>
                            &#9776; </span>
                    </nav>
                </Container>
            </header>
            <Container className='my-5 py-5'>
                <Row>
                    <Col lg={6}>
                    </Col>
                    <Col lg={6}>
                        <h3 className='ff_open_sans fs_5md fw-normal text_8093F6 mb-3'>Лучший проект</h3>
                        <h1 className='ff_open_sans fs_2xl fw-bolder text_ffffff mb-3'>Крипто
                            <span className='d-block text_8093F6'>Инвестиции</span> </h1>
                        <p className='ff_open_sans fs_5md fw-normal text_ffffff mb-4'>Международный проект инвестиции в криптовалюту и не только. Мы заработаем если вы заработаете!</p>
                        <div className='mb-5'>
                            <button className='ff_open_sans fs_2xmd fw-bold text_252B42 join_btn me-5 mb-3'>Присоединиться</button>
                            <button className='ff_open_sans fs_2xmd fw-bold text_252B42 more_btn mb-3'>Подробнее</button>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className=' me-5 align-items-center d-sm-flex'>
                                <h2 className='ff_open_sans fw-bold text_8093F6 fs_xl mb-0 me-2'>330</h2>
                                <p className='ff_open_sans fs_xsm fw-normal text_8093F6 mb-0'>Довольных
                                    <span className='d-block'>клиентов</span></p>
                            </div>
                            <div className='d-sm-flex ps-4 align-items-center'>
                                <h2 className='ff_open_sans fw-bold text_8093F6 fs_xl mb-0 me-2'>360K</h2>
                                <p className='ff_open_sans fs_xsm fw-normal text_8093F6 mb-0'>заработанных
                                    <span className='d-block'>долларов</span></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
   </section>
  )
}

export default Mynaveclass
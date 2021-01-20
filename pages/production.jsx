import React, { Fragment, useState } from 'react'


import productionImg1 from '../public/image/production/productionImg1.jpg'
import productionImg2 from '../public/image/production/productionImg2.jpg'

import imgItem4 from '../public/image/production/1.svg'
import imgItem7 from '../public/image/production/2.svg'
import imgItem3 from '../public/image/production/3.svg'
import imgItem1 from '../public/image/production/4.svg'
import imgItem5 from '../public/image/production/5.svg'
import imgItem6 from '../public/image/production/6.svg'
import imgItem2 from '../public/image/production/7.svg'
import imgItem8 from '../public/image/production/8.svg'
import Head from 'next/head'


const Production = () => {


    return (
        <Fragment>
            <Head>
                <title>МастерЛифт - запчасти для лифтов и подъемного оборудования </title>
                <meta name="title" content="МастерЛифт - запчасти для лифтов и подъемного оборудования " />
                <meta name="description"
                    content="Предлагаем большой выбор сертифицированных запчастей для лифтов, эскалаторов и другого подъемного оборудования от российских и зарубежных производителей" />
            </Head>
            <div className="content-container">
                <h1 className="main-title-subpages">ЗАПЧАСТИ И ПРОИЗВОДСТВО</h1>
                <img src={productionImg1} alt="Фото Производства" className="maker-photo" />
                <div className="production-text-wrapper">
                    <h4 className="maker-block__text">Компания ООО «Мастер Лифт Инт.» имеет богатый опыт в
                    монтаже, ремонте и обслуживании оборудования,
                 как перечисленных поставщиков, так и любого иного оборудования.</h4>
                    <h4 className="maker-block__text">В компании «Мастер Лифт Инт.» постоянно работают 2
                    монтажные бригады по 5 человек, а так же электронщики и наладчики. В случае необходимости наша
                    компания привлекает дополнительные силы. При этом за качеством монтажа постоянно следят специалисты
                «Мастер Лифт Инт.», гарантия на наши работы составляет 5 лет.</h4>
                </div>
                <div className="production-table-wrapper">
                    <h3 className="production-table__title">Комплекс строительно-монтажных и пуско-наладочных работ обычно включает следующие пункты:</h3>
                    <div className="work-content-wrapper production">
                        <div className="work-content-item">
                            <div className="work-item-img-wrapper">
                                <img src={imgItem2} alt="Изображение Этапа Работы" className="work-item__img" />
                            </div>
                            <h3 className="work-item__title production">Монтаж<br />лифтового<br />оборудования</h3>
                        </div>
                        <div className="work-content-item">
                            <div className="work-item-img-wrapper">
                                <img src={imgItem6} alt="Изображение Этапа Работы" className="work-item__img" />
                            </div>
                            <h3 className="work-item__title production"> Установка монтажных<br />ригелей и настилов<br />в шахтах лифтов</h3>
                        </div>
                        <div className="work-content-item">
                            <div className="work-item-img-wrapper">
                                <img src={imgItem3} alt="Изображение Этапа Работы" className="work-item__img" />
                            </div>
                            <h3 className="work-item__title production">Изготовление и монтаж<br />обрамлений дверных<br />проёмов лифтов*</h3>
                        </div>
                        <div className="work-content-item">
                            <div className="work-item-img-wrapper">
                                <img src={imgItem4} alt="Изображение Этапа Работы" className="work-item__img" />
                            </div>
                            <h3 className="work-item__title production">Пусконаладочные<br />работы</h3>
                        </div>
                        <div className="work-content-item">
                            <div className="work-item-img-wrapper">
                                <img src={imgItem1} alt="Изображение Этапа Работы" className="work-item__img" />
                            </div>
                            <h3 className="work-item__title production">Диспетчеризация лифтов<br />комплексом «ОБЬ»**</h3>
                        </div>
                        <div className="work-content-item">
                            <div className="work-item-img-wrapper">
                                <img src={imgItem5} alt="Изображение Этапа Работы" className="work-item__img" />
                            </div>
                            <h3 className="work-item__title production">Полное техническое<br />освидетельствование лифтов<br />инженерным центром</h3>
                        </div>
                        <div className="work-content-item">
                            <div className="work-item-img-wrapper">
                                <img src={imgItem7} alt="Изображение Этапа Работы" className="work-item__img" />
                            </div>
                            <h3 className="work-item__title production"> Оформление деклараций<br />о соответствии лифтов,<br />с регистрацией в органе<br />по сертификации</h3>
                        </div>
                        <div className="work-content-item">
                            <div className="work-item-img-wrapper">
                                <img src={imgItem8} alt="Изображение Этапа Работы" className="work-item__img" />
                            </div>
                            <h3 className="work-item__title production">Участие в комиссии<br />по вводу лифтов в<br />эксплуатацию***</h3>
                        </div>
                    </div>
                    <span className="production-after-items__span">*Из нержавеющей стали (если необходимо) на основном посадочном этаже, металлических с порошковой покраской (ТЛКП) на остальных этажах.
                    <br />**С подключением к диспетчерскому пункту заказчика через интернет-канал, со стоимостью оборудования, без учета прокладки кабельных линий связи между машинными помещениями лифтов (либо с подключением к местному диспетчерскому пункту на объекте по проводному каналу, без учета прокладки внешних линий связи, без учета устройства рабочего места диспетчера).
                    <br />***С оформлением акта приемки лифта в эксплуатацию.</span>
                    <p className="production-after-items__span">В зависимости от пожеланий заказчика, а так же готовности объекта, комплекс работ может быть расширен.</p>
                </div>
                <h4 className="maker-block__text" style={{ "margin-top": "85px", "margin-bottom": "60px" }}>Компания ООО «Мастер Лифт Инт.» имеет широкий парк станков для производства металлических изделий, перемотки двигателей, ремонта электрических изделий и ремонта лифтов, с 2016г. в распоряжении нашей компании есть ЧПУ для лазерной резки металла. Все изделия могут быть окрашены порошковой краской колером по вашему выбору (колеры по цветовой схеме RAL).
                Наша компания может произвести ремонт или восстановление лифтов и их частей, а так же поможет Вам подобрать, заказать и привезти необходимые запасные части.</h4>
                <img src={productionImg2} alt="Фото Производства" className="maker-photo" style={{ "margin-bottom": "113px" }} />
            </div>
        </Fragment>
    )
}

export default Production

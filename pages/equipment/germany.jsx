import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'


import makerImg1 from '../../public/image/maker-block/china/makerImg1.png'
import makerImg2 from '../../public/image/maker-block/china/makerImg2.png'
import makerImg3 from '../../public/image/maker-block/china/makerImg2.png'

import makerdisingsImg1 from '../../public/image/maker-block/china/SJEC/makerdisingsImg1.jpg'
import makerdisingsImg2 from '../../public/image/maker-block/china/SJEC/makerdisingsImg2.jpg'
import makerdisingsImg3 from '../../public/image/maker-block/china/SJEC/makerdisingsImg3.jpg'
import makerdisingsImg4 from '../../public/image/maker-block/china/SJEC/makerdisingsImg4.jpg'
import makerdisingsImg5 from '../../public/image/maker-block/china/SJEC/makerdisingsImg5.jpg'
import makerdisingsImg6 from '../../public/image/maker-block/china/SJEC/makerdisingsImg6.jpg'
import makerdisingsImg7 from '../../public/image/maker-block/china/SJEC/makerdisingsImg7.jpg'
import makerdisingsImg8 from '../../public/image/maker-block/china/SJEC/makerdisingsImg8.jpg'
import makerdisingsImg9 from '../../public/image/maker-block/china/SJEC/makerdisingsImg9.jpg'

import makerdisingsImg10 from '../../public/image/maker-block/china/XIZI/1.jpg'
import makerdisingsImg11 from '../../public/image/maker-block/china/XIZI/2.jpg'
import makerdisingsImg12 from '../../public/image/maker-block/china/XIZI/3.jpg'
import makerdisingsImg13 from '../../public/image/maker-block/china/XIZI/4.jpg'
import makerdisingsImg14 from '../../public/image/maker-block/china/XIZI/5.jpg'
import makerdisingsImg15 from '../../public/image/maker-block/china/XIZI/6.jpg'
import makerdisingsImg16 from '../../public/image/maker-block/china/XIZI/7.jpg'
import makerdisingsImg17 from '../../public/image/maker-block/china/XIZI/8.jpg'
import makerdisingsImg18 from '../../public/image/maker-block/china/XIZI/9.jpg'

import makerdisingsImgCom1 from '../../public/image/maker-block/china/CANNY/1.jpg'
import makerdisingsImgCom2 from '../../public/image/maker-block/china/CANNY/2.jpg'
import makerdisingsImgCom3 from '../../public/image/maker-block/china/CANNY/3.jpg'
import makerdisingsImgCom4 from '../../public/image/maker-block/china/CANNY/4.jpg'
import makerdisingsImgCom5 from '../../public/image/maker-block/china/CANNY/5.jpg'
import makerdisingsImgCom6 from '../../public/image/maker-block/china/CANNY/6.jpg'
import makerdisingsImgCom7 from '../../public/image/maker-block/china/CANNY/7.jpg'
import makerdisingsImgCom8 from '../../public/image/maker-block/china/CANNY/8.jpg'
import makerdisingsImgCom9 from '../../public/image/maker-block/china/CANNY/9.jpg'

const Germany = () => {

    const router = useRouter()
    useEffect(() => {
        scroll()
    }, [])

    const scroll = (e) => {
        console.log(router.query)
        const toEl = router.query.to
        if (!toEl == "") {
            const el = document.querySelector(`.${toEl}`)
            el.scrollIntoView()
        }
    }


    return (
        <Fragment>
            <Head>
                <title>Лифты и подъемники из Германии - прямые поставки от производителя!</title>
                <meta name="title" content="Лифты и подъемники из Германии - прямые поставки от производителя!" />
                <meta name="description"
                    content="Осуществляем прямые поставки, монтаж и обслуживание надежного лифтового оборудования из Германии. Немецкое качество по привлекательной цене. Звоните!" />
            </Head>
            <div className="content-container">
                <h1 className="main-title-subpages">ЛИФТОВОЕ ОБОРУДОВАНИЕ ИЗ КИТАЯ</h1>
                <h2 className="main-title-nameCompani sjec">SJEC Corporation</h2>
                <img src={makerImg1} alt="Фото Завода Производителя" className="maker-photo" />
                <div className="maker-block-text-wrapper">
                    <h4 className="maker-block__text">Корпорация SJEC была основана в 1992 году. Корпорация специализируется на
                    производстве лифтов, эскалаторов и траволаторов, автомобильных подъёмников, а так же энергосберигающих двигателей.
                    Оборудование и продукция SJEC продаются более чем в 100 странах, корпорация насчитывает более 600 филиалов по всему миру.
                     С 2012 года акции SJEC Corp. торгуются на Шанхайской бирже.</h4>
                    <h4 className="maker-block__text">Штаб квартира и основные производственные мощности сосредоточены
                    в Индустриальном Парке г. Сучжоу на территории занимающей более 200 000 м2. Производственные мощности занимают порядка
                    60 000 м2, а для испытания и разработки высокоскоростных лифтов построена специальная испытательная башня высотой 140 м.
                    На корпорацию работают более 3000 специалистов и более 400 научных сотрудников.</h4>
                    <h4 className="maker-block__text">Все оборудование соответствует международным сертификатам,
                    таким как ISO, OHSAS, DIN, TUV, ЕАС ГОСТ РФ. Корпорация SJEC производит порядка 35 000 единиц оборудования
                    в год и входит в 20-ку крупнейших производителей лифтов и эскалаторов в Китайской Народной Республике. В Российскую федерацию
                    поставляется около 750-1000 единиц в год.</h4>
                </div>
                <h2 className="maker-disings-block__title">Варианты дизайна</h2>
                <div className="maker-disings-block-photos-wrapper">
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg1} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg2} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg3} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg4} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg5} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg6} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg7} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg8} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg9} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                </div>
                <h2 className="maker-disings-block__title">Основные характеристики</h2>
                <h3 className="maker-disings-specifications__title">Лифты с машинным помещением C-300</h3>
                <div className="maker-disings-specifications-container">
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Скорость</span>
                        <span className="maker-disings-specifications__text">1,0 – 1,75 м/с</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Грузоподъёмность</span>
                        <span className="maker-disings-specifications__text">400 – 2500 кг</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод/лебёдка</span>
                        <span className="maker-disings-specifications__text">TORIN</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод дверей</span>
                        <span className="maker-disings-specifications__text">Fermator/Wittur</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Контроллер</span>
                        <span className="maker-disings-specifications__text">E-COM</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Огнестойкость дверей</span>
                        <span className="maker-disings-specifications__text">E30/EI60</span>
                    </div>
                </div>
                <h3 className="maker-disings-specifications__title">Лифты с машинным помещением E-550</h3>
                <div className="maker-disings-specifications-container">
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Скорость</span>
                        <span className="maker-disings-specifications__text">2,0 – 2,5 м/с</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Грузоподъёмность</span>
                        <span className="maker-disings-specifications__text">800 – 1600 кг</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод/лебёдка</span>
                        <span className="maker-disings-specifications__text">TORIN</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод дверей</span>
                        <span className="maker-disings-specifications__text">Fermator/Wittur</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Контроллер</span>
                        <span className="maker-disings-specifications__text">E-COM</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Огнестойкость дверей</span>
                        <span className="maker-disings-specifications__text">E30/EI60</span>
                    </div>
                </div>
                <h3 className="maker-disings-specifications__title">Лифты без машинного помещения M-300</h3>
                <div className="maker-disings-specifications-container">
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Скорость</span>
                        <span className="maker-disings-specifications__text">1,0 – 2,5 м/с</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Грузоподъёмность</span>
                        <span className="maker-disings-specifications__text">400 – 2000 кг</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод/лебёдка</span>
                        <span className="maker-disings-specifications__text">TORIN</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод дверей</span>
                        <span className="maker-disings-specifications__text">Fermator/Wittur</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Контроллер</span>
                        <span className="maker-disings-specifications__text">E-COM</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Огнестойкость дверей</span>
                        <span className="maker-disings-specifications__text">E30/EI60</span>
                    </div>
                </div>
                <div className="maker-disings-footer-wrapper">
                    <span className="maker-disings-footer__span">Вы можете воспользоваться интерактивной версией каталога<br />и детально изучить возможные варианты воплощения Вашего проекта.</span>
                    <a href="" className="maker-disings-footer__btn" target="__blank">Скачать каталог SJEC</a>
                </div>
                <h2 className="main-title-nameCompani xizi" >XIZI ELEVATOR CO., LTD.</h2>
                <img src={makerImg2} alt="Фото Завода Производителя" className="maker-photo" />
                <div className="maker-block-text-wrapper">
                    <h4 className="maker-block__text">XIZI Elevator Co., Ltd. была основана 1980 году и является одной из первых компаний
                    производящих лифты в КНР, изначально компания специализировалась на поставках лифтов для Социалистической Республики Вьетнам.
                    В 1997 году на рынок выходит совместное предприятие и новые лифты под маркой XIZI OTIS широко известные в лифтовой сфере в России.
                    Данный бренд просуществовал до конца 2016 года после чего предприятие XIZI вновь стало работать независимо, оставив за собой право на использование
                    некоторых технологий.</h4>
                    <h4 className="maker-block__text">
                        Головная компания расположена в г. Ханчжоу, где на территории 200 000 м2 расположены производственные
                        мощности, занимающие около 50 000 м2, а так же испытательная башня высотой 208м. На корпорацию работают около
                        3000 специалистов и более 300 научных сотрудников.</h4>
                    <h4 className="maker-block__text">Оборудование XIZI Elevator Co., Ltd. представлено более, чем в 70 странах мира.
                     Лифты и эскалаторы XIZI сертифицированы и соответствуют ЕАС ГОСТ РФ.</h4>
                    <h4 className="maker-block__text">Компания входит в 100 крупнейших поставщиков лифтового оборудования КНР.</h4>
                </div>
                <h2 className="maker-disings-block__title">Варианты дизайна</h2>
                <div className="maker-disings-block-photos-wrapper">
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg10} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg11} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg12} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg13} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg14} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg15} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg16} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg17} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImg18} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                </div>
                <h2 className="maker-disings-block__title">Основные характеристики</h2>
                <h3 className="maker-disings-specifications__title">Лифты с машинным помещением UN-VICTOR (R)</h3>
                <div className="maker-disings-specifications-container">
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Скорость</span>
                        <span className="maker-disings-specifications__text">1,0 – 2,5 м/с</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Грузоподъёмность</span>
                        <span className="maker-disings-specifications__text">250 – 2500 кг</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод/лебёдка</span>
                        <span className="maker-disings-specifications__text">VITO/GETM</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод дверей</span>
                        <span className="maker-disings-specifications__text">Jarless-con/Super-II</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Контроллер</span>
                        <span className="maker-disings-specifications__text">U-CON</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Огнестойкость дверей</span>
                        <span className="maker-disings-specifications__text">E30/EI60</span>
                    </div>
                </div>
                <h3 className="maker-disings-specifications__title">Лифты без машинного помещения UN-VICTOR MRL</h3>
                <div className="maker-disings-specifications-container">
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Скорость</span>
                        <span className="maker-disings-specifications__text">1,0 – 1,75 м/с</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Грузоподъёмность</span>
                        <span className="maker-disings-specifications__text">250 – 2500 кг</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод/лебёдка</span>
                        <span className="maker-disings-specifications__text">VITO/GETM</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод дверей</span>
                        <span className="maker-disings-specifications__text">Jarless-con/Super-II</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Контроллер</span>
                        <span className="maker-disings-specifications__text">U-CON</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Огнестойкость дверей</span>
                        <span className="maker-disings-specifications__text">E30/EI60</span>
                    </div>
                </div>
                <div className="maker-disings-footer-wrapper">
                    <span className="maker-disings-footer__span">Вы можете воспользоваться интерактивной версией каталога<br />и детально изучить возможные варианты воплощения Вашего проекта.</span>
                    <a href="" className="maker-disings-footer__btn" target="__blank">Скачать каталог XIZI</a>
                </div>
                <h2 className="main-title-nameCompani canny">CANNY ELEVATOR CO., LTD.</h2>
                <img src={makerImg3} alt="Фото Завода Производителя" className="maker-photo" />
                <div className="maker-block-text-wrapper">
                    <h4 className="maker-block__text">Компания CANNY Elevator  CO. LTD, основанная в 1997 г.,
                    на сегодняшний день является одним из крупнейших мировых производителей подъёмного оборудования
                     и самым крупным поставщиком лифтов, эскалаторов и траволаторов в Китае.</h4>
                    <h4 className="maker-block__text">Компания занимается всеми технологическими стадиями создания лифтов,
                     эскалаторов и траволаторов, а так же производством комплектующих лифтового оборудования.</h4>
                    <h4 className="maker-block__text">Производственная мощность компании составляет 25 000 единиц
                    подъёмной техники в год. Компании CANNY принадлежит мощная производственная база площадью более чем 250 000 м2.</h4>
                    <h4 className="maker-block__text">
                        Компания имеет в своём распоряжении башню самую высокую в мире испытательную башню
                        высотой 288 метров, в которой проходят испытания серийных лифтов и высокоскоростных пассажирских лифтов.</h4>
                    <h4 className="maker-block__text">
                        Представительства компании находятся более чем в 100 странах мира. Вся продукция
                         соответствует мировым сертификатам, а так же сертификатам ЕАС ГОСТ РФ.</h4>
                </div>
                <h2 className="maker-disings-block__title">Варианты дизайна</h2>
                <div className="maker-disings-block-photos-wrapper">
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImgCom1} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImgCom2} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImgCom3} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImgCom4} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImgCom5} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImgCom6} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImgCom7} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImgCom8} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                    <div className="maker-disings-block__imgWrap">
                        <img src={makerdisingsImgCom9} alt="Изображение Лифта" className="maker-disings-block__img" />
                    </div>
                </div>
                <h2 className="maker-disings-block__title">Основные характеристики</h2>
                <h3 className="maker-disings-specifications__title">Лифты модели KLK1</h3>
                <div className="maker-disings-specifications-container">
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Скорость</span>
                        <span className="maker-disings-specifications__text">1,0 – 2,5 м/с</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Грузоподъёмность</span>
                        <span className="maker-disings-specifications__text">400 – 1600 кг</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод/лебёдка</span>
                        <span className="maker-disings-specifications__text">Torin/XiZi</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод дверей</span>
                        <span className="maker-disings-specifications__text">WITTUR/Fermator</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Контроллер</span>
                        <span className="maker-disings-specifications__text">KL/VF</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Огнестойкость дверей</span>
                        <span className="maker-disings-specifications__text">E30/EI60</span>
                    </div>
                </div>
                <h3 className="maker-disings-specifications__title">Лифты модели KLW</h3>
                <div className="maker-disings-specifications-container">
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Скорость</span>
                        <span className="maker-disings-specifications__text">1,0 – 1,75 м/с</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Грузоподъёмность</span>
                        <span className="maker-disings-specifications__text">400 – 3000 кг</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод/лебёдка</span>
                        <span className="maker-disings-specifications__text">Torin/XiZi</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Привод дверей</span>
                        <span className="maker-disings-specifications__text">WITTUR/Fermator</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Контроллер</span>
                        <span className="maker-disings-specifications__text">KL/VF</span>
                    </div>
                    <div className="maker-disings-specifications-wrapper">
                        <span className="maker-disings-specifications__text">Огнестойкость дверей</span>
                        <span className="maker-disings-specifications__text">E30/EI60</span>
                    </div>
                </div>
                <div className="maker-disings-footer-wrapper">
                    <span className="maker-disings-footer__span">Вы можете воспользоваться интерактивной версией каталога<br />и детально изучить возможные варианты воплощения Вашего проекта.</span>
                    <a href="" className="maker-disings-footer__btn" target="__blank">Скачать каталог CANNY</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Germany

import Head from 'next/head'
import React, { Fragment, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { YMaps } from 'react-yandex-maps';
import { Router, useRouter } from 'next/router';

import workImgitem1 from '../public/image/work-block/workImgitem1.svg'
import workImgitem2 from '../public/image/work-block/workImgitem2.svg'
import workImgitem3 from '../public/image/work-block/workImgitem3.svg'
import workImgitem4 from '../public/image/work-block/workImgitem4.svg'
import workImgitem5 from '../public/image/work-block/workImgitem5.svg'
import workImgitem6 from '../public/image/work-block/workImgitem6.svg'
import workImgitem7 from '../public/image/work-block/workImgitem7.svg'
import workImgitem8 from '../public/image/work-block/workImgitem8.svg'


import partnersItem1 from '../public/image/partners-block/partnersItem1.svg'
import partnersItem2 from '../public/image/partners-block/partnersItem2.svg'
import partnersItem3 from '../public/image/partners-block/partnersItem3.svg'
import partnersItem4 from '../public/image/partners-block/partnersItem4.svg'
import partnersItem5 from '../public/image/partners-block/partnersItem5.svg'
import partnersItem6 from '../public/image/partners-block/partnersItem6.svg'
import partnersItem7 from '../public/image/partners-block/partnersItem7.svg'
import partnersItem8 from '../public/image/partners-block/partnersItem8.svg'
import partnersItem9 from '../public/image/partners-block/partnersItem9.svg'
import partnersItem10 from '../public/image/partners-block/partnersItem10.svg'
import partnersItem11 from '../public/image/partners-block/partnersItem11.svg'
import MainPageSlider from '../components/mainPageSlider'

import sliderImage1 from '../public/image/sliderMain/1.jpg'
import sliderImage2 from '../public/image/sliderMain/2.jpg'
import sliderImage3 from '../public/image/sliderMain/3.jpg'
import sliderImage4 from '../public/image/sliderMain/4.jpg'
import sliderImage5 from '../public/image/sliderMain/5.jpg'
import sliderImage6 from '../public/image/sliderMain/6.jpg'
import sliderImage7 from '../public/image/sliderMain/7.jpg'
import sliderImage8 from '../public/image/sliderMain/8.jpg'
import sliderImage9 from '../public/image/sliderMain/9.jpg'

import infoblockimg1 from '../public/image/info-block/info-block-img1.svg'
import infoblockimg2 from '../public/image/info-block/info-block-img2.svg'
import map from '../public/image/map-block/map.svg'





export default function Home() {
  const router = useRouter()
  let href = router.route

  useEffect(() => {
    scroll()
    router.push(href)

  }, [])




  const SliderTextArr = [
    "Самый распространенный тип оборудования. Применяются в любых типах зданий и имеют исполнение для любых условий окружающей среды. Самым распространенным в мире типом электрических лифтов сегодня являются лифты без машинного помещения с безредукторными лебедками на постоянных магнитах, но тем не менее в ассортименте любого производителя до сих пор есть и лифты с машинными помещениями. Такие лифты могут быть выполнены как с обычными кабинами из различных материалов, так и с панорамными кабинами со стеклянными стенками и дверьми. Основное применение: жилые комплексы, торгово- развлекательные центры, промышленные предприятия, склады.",
    "Специфический тип оборудования. Основное применение гидравлические лифты находят там, где существуют ограничения по наличию места для установки лифта. Гидравлические лифты заметно дешевле электрических, но имеют строгие ограничения по количеству использований в час, в связи с нагревом масла, которое является движетелем лифта, а также жестко ограничены высотой подъема: не более 12 метров. Такие лифты могут быть выполнены как с обычными кабинами из различных материалов, так и с панорамными кабинами со стеклянными стенками и дверьми. Основное применение: частное жилье, производственные предприятия, склады."
    , "Модификации электрических и гидравлических лифтов предназначенные для транспортировки транспортных средств. Основное отличие от стандартных моделей заключается в том, что данные лифты имеют значительно увеличенный размер кабины и незначительно большую грузоподъемность. Перевозка людей в таких лифтах запрещена.  Такие лифты могут быть выполнены как с обычными кабинами из различных материалов, так и с панорамными кабинами со стеклянными стенками и дверьми. Основное применение: автосалоны, выставочные центры,промышленные предприятия."
    , "Модификации электрических и гидравлических лифтов предназначенные для транспортировки больных на больничных каталках. Данные модификации применяются в больницах и госпиталях по всему миру. Имеют расширенную кабину достаточную для того, чтобы больной на каталке мог поместиться в кабину в сопровождении медперсонала, а так же 2 панели приказов по обеим сторонам кабины. Двери у таких лифтов выполняются чаще всего распашными с ручным открыванием для ускорения процесса транспортировки больного, но могут быть и автоматическими. Такие лифты выполняются с кабинами из нержавеющей или крашеной стали. Основное применение: больницы, госпитали, клиники, медицинские учреждения.",
    "Модификации электрических и гидравлических лифтов предназначенные для установки в частных домах и многоуровневых квартирах. Лифты с самым обширным списком модификаций и размеров. Исполнение лифта ограничивается исключительно фантазией заказчика, наличием места для установки лифта и средствами, которые заказчик готов потратить на данное оборудование. Такие лифты выполняются в соответствии с характеристиками заказчика. Основное применение: частное жилье."
    , "Особый тип электрических лифтов, предназначенный исключительно для перевозки грузов. Существуют модификации для загрузки с пола при помощи рохлей или тележек, либо с сервисной высоты (стандарт: 700мм от пола). Размеры кабины заказчик выбирает в зависимости от того какие грузы будет необходимо перемещать. Основное преимущество данных лифтов состоит в том, что в комплекте с лифтом поставляется и самонесущая шахта, то есть для установки такого лифта необходимы только отверстия в перекрытиях здания, а после установки заказчик сам решает: будет ли он обшивать эту шахту листовыми материалами либо обкладывать кирпичом. Основное применение: частное жилье, предприятия питания, здравоохранения, образования, торгово-развлекательные центры, банки, аэропорты, вокзалы, промышленные и производственные предприятия, склады."
    , "Пассажирские артерии любого торгово-развлекательного центра. ВСЕ современные эскалаторы, кроме эскалаторов для кораблей и яхт, производятся в Китайской Народной Республике, после чего доставляются заказчикам по всему миру. Основным преимуществом перед лифтами является, безусловно, непрерывная перевозка пассажиров между этажами, так же современные эскалаторы оснащаются датчиками движения, чтобы автоматически отключаться для экономии энергии и моторесурса во время отсутствия пассажиров. Основное применение: торгово-развлекательные центры, выставочные центры, бизнес центры, аэропорты, вокзалы, порты, метро."
    , "В отличии от эскалаторов, траволаторы не имеют ступеней и представляют собой наклонное движущееся полотно. ВСЕ современные траволаторы, как и эскалаторы, производятся в Китайской Народной Республике, после чего доставляются заказчикам по всему миру. Траволаторы устанавливаются там, где необходимо произвести распределение человекопотока, как правило на входах/выходах с парковки торгового центра. Также в отличие от эскалаторов, траволаторы позволяют перевозить тележки с покупками, что облегчает жизнь покупателям. Основное применение: торгово-развлекательные центры."
    , "Являясь поставщиком лифтового оборудования ООО 'Мастер Лифт Инт.' получает запчасти напрямую от производителей. Вы можете отправить запрос на интересующие Вас запасные части в наш адрес."
  ]


  const [SliderImage, setSliderImage] = useState(sliderImage1)
  const [Slidertext, setSlidertext] = useState(SliderTextArr[0])
  const container = useRef(null)


  const hadlerScroll = (img, text, e) => {
    for (let i = 0; i < document.querySelectorAll('.slider__title').length; i++) {
      document.querySelectorAll('.slider__title')[i].classList.remove('active');
    }
    let elementOnclick = e.target
    elementOnclick.classList.add("active")
    setSliderImage(img)
    setSlidertext(text)
    const el = container.current
    el.scrollIntoView({
      behavior: 'smooth',
    })
  }


  const scroll = (e) => {
    const toEl = router.query.to
    if (!toEl == "") {
      const el = document.querySelector(`.${toEl}`)
      el.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }


  return (
    <Fragment>
      <Head>
        <title>МастерЛифт - купить лифты и подъемники от производителя по выгодной цене! </title>
        <meta name="title" content="МастерЛифт - купить лифты и подъемники от производителя по выгодной цене! " />
        <meta name="description"
          content="Компания «Мастер Лифт» осуществляет поставку, монтаж и обслуживание пассажирских, грузовых, коттеджных лифтов, эскалаторов и траволаторов, подъемников для инвалидов, автомобильных подъемников и запчастей из Европы и Китая." />
        <meta name="Address" content="Екатеринбург, ул. Аппартная, д. 4, офис 84/1" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="true" />
      </Head>
      <div className="start-screen">
        <div className="main-frame">
          <div className="main-text-block">
            <h1 className="main-text-block__title">ЛИФТЫ И ПОДЪЁМНОЕ ОБОРУДОВАНИЕ С УСТАНОВКОЙ.</h1>
            <h2 className="main-text-block__subtitle">ПРЯМЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ</h2>
          </div>
        </div>
      </div>
      <div className="content-container" style={{ "margin-top": "0" }}>
        <h2 className="title-main equipment">ЭТАПЫ РАБОТЫ</h2>
        <div className="work-content-wrapper">
          <div className="work-content-item">
            <div className="work-item-img-wrapper">
              <img src={workImgitem1} alt="Изображение Этапа Работы" className="work-item__img" />
            </div>
            <h3 className="work-item__title">ВЫЕЗД<br />НА ОБЪЕКТ</h3>
          </div>
          <div className="work-content-item">
            <div className="work-item-img-wrapper">
              <img src={workImgitem2} alt="Изображение Этапа Работы" className="work-item__img" />
            </div>
            <h3 className="work-item__title">УТОЧНЕНИЕ<br />ДЕТАЛЕЙ ОБЪЕКТ</h3>
          </div>
          <div className="work-content-item">
            <div className="work-item-img-wrapper">
              <img src={workImgitem3} alt="Изображение Этапа Работы" className="work-item__img" />
            </div>
            <h3 className="work-item__title">СОГЛАСОВАНИЕ С<br />ПРОИЗВОДИТЕЛЕМ</h3>
          </div>
          <div className="work-content-item">
            <div className="work-item-img-wrapper">
              <img src={workImgitem4} alt="Изображение Этапа Работы" className="work-item__img" />
            </div>
            <h3 className="work-item__title">СОСТАВЛЕНИЕ<br />КОММЕРЧЕСКОГО<br />ПРЕДЛОЖЕНИЯ</h3>
          </div>
          <div className="work-content-item">
            <div className="work-item-img-wrapper">
              <img src={workImgitem5} alt="Изображение Этапа Работы" className="work-item__img" />
            </div>
            <h3 className="work-item__title">РАЗРАБОТКА УСТАНОВОЧНЫХ<br />ЧЕРТЕЖЕЙ ПО ИНДИВИДУАЛЬНЫМ<br />РАЗМЕРАМ</h3>
          </div>
          <div className="work-content-item">
            <div className="work-item-img-wrapper">
              <img src={workImgitem6} alt="Изображение Этапа Работы" className="work-item__img" />
            </div>
            <h3 className="work-item__title">ПРОХОЖДЕНИЕ ПОЛНОГО<br />ТЕХНИЧЕСКОГО<br />ОСВИДЕТЕЛЬСТВОВАНИЯ</h3>
          </div>
          <div className="work-content-item">
            <div className="work-item-img-wrapper">
              <img src={workImgitem7} alt="Изображение Этапа Работы" className="work-item__img" />
            </div>
            <h3 className="work-item__title">ПОДАЧА ДЕКЛАРАЦИИ</h3>
          </div>
          <div className="work-content-item">
            <div className="work-item-img-wrapper">
              <img src={workImgitem8} alt="Изображение Этапа Работы" className="work-item__img" />
            </div>
            <h3 className="work-item__title">ГАРАНТИЙНОЕ ОБСЛУЖИВАНИЕ<br />И ПОСТ-ГАРАНТИЙНОЕ<br />ОБСЛУЖИВАНИЕ</h3>
          </div>
        </div>
      </div>
      <div className="content-container">
        <h2 className="title-main about" >О КОМПАНИИ</h2>
        <p className="about-text-block">Компания ООО «Мастер Лифт Инт.» располагается в городе Екатеринбург и занимается
        импортом, монтажом<br />
        и обслуживанием лифтового, эскалаторного и прочего подъемного оборудования по Свердловской области, а так же по<br />
        России (Тюменская область, Пермский край, Челябинская область, Омская область, ХМАО, Чеченская республика,<br />
Краснодарский край, Санкт-Петербург, Нижегородская область).</p>
        <p className="about-text-block">ООО «Мастер Лифт Инт.» является официальным представителем зарубежных (китайских, немецких, итальянских и<br />
        греческих), а также и отечественных компаний. Наши специалисты способны смонтировать практически любое<br />
        оборудование от любого из вышеперечисленных производителей. В случае
        возникновения каких-либо затруднений мы<br />
        располагаем возможностью оперативно привлекать специалистов завода-производителя для проведения<br />
        шеф-монтажа.
Для специальных заказов формируются отдельные ЗИПы по заранее согласованному с заказчиком списком.</p>
      </div>
      <div className="content-container">
        <h3 className="title-main">НАШИ ПАРТНЕРЫ</h3>
        <div className="partners-line">
          <Link href="/equipment/china?to=xizi"><div className="partners-line-item" style={{ "background-image": `url(${partnersItem1})` }} /></Link>
          <Link href=""><div className="partners-line-item" style={{ "background-image": `url(${partnersItem2})` }} /></Link>
          <Link href="/equipment/china?to=sjec"><div className="partners-line-item" style={{ "background-image": `url(${partnersItem3})` }} /></Link>
          <Link href=""><div className="partners-line-item" style={{ "background-image": `url(${partnersItem4})` }} /></Link>
          <Link href=""><div className="partners-line-item" style={{ "background-image": `url(${partnersItem5})` }} /></Link>
        </div>
        <div className="partners-line">
          <Link href=""><div className="partners-line-item" style={{ "background-image": `url(${partnersItem6})` }} /></Link>
          <Link href=""><div className="partners-line-item" style={{ "background-image": `url(${partnersItem7})` }} /></Link>
          <Link href=""><div className="partners-line-item" style={{ "background-image": `url(${partnersItem8})` }} /></Link>
          <Link href=""><div className="partners-line-item" style={{ "background-image": `url(${partnersItem9})` }} /></Link>
        </div>
        <div className="partners-line">
          <Link href=""><div className="partners-line-item" style={{ "background-image": `url(${partnersItem10})` }} /></Link>
          <Link href="/equipment/china?to=canny"><div className="partners-line-item" style={{ "background-image": `url(${partnersItem11})` }} /></Link>
        </div>
      </div>
      <div className="bg-container">
        <div className="content-container">
          <div className="slider-content-wrapper" ref={container}>
            <div className="bg" />
            <div className="slider-container">
              <h2 className="title-main">ПОСТАВЛЯЕМОЕ ОБОРУДОВАНИЕ</h2>
              <MainPageSlider image={SliderImage} text={Slidertext} />
              <div className="slider-title-wrapper">
                <h3 className="slider__title" onClick={(e) => hadlerScroll(sliderImage1, SliderTextArr[0], e)}>ЭЛЕКТРИЧЕСКИЕ ЛИФТЫ</h3>
                <h3 className="slider__title" onClick={(e) => hadlerScroll(sliderImage2, SliderTextArr[1], e)}>ГИДРАВЛИЧЕСКИЕ ЛИФТЫ</h3>
                <h3 className="slider__title" onClick={(e) => hadlerScroll(sliderImage3, SliderTextArr[2], e)}>АВТОМОБИЛЬНЫЕ ЛИФТЫ</h3>
                <h3 className="slider__title" onClick={(e) => hadlerScroll(sliderImage4, SliderTextArr[3], e)}>БОЛЬНИЧНЫЕ ЛИФТЫ</h3>
                <h3 className="slider__title" onClick={(e) => hadlerScroll(sliderImage5, SliderTextArr[4], e)}>ЛИФТЫ ДЛЯ ЧАСТНЫХ ДОМОВ</h3>
                <h3 className="slider__title" onClick={(e) => hadlerScroll(sliderImage6, SliderTextArr[5], e)}>МАЛЫЕ ГРУЗОВЫЕ ЛИФТЫ</h3>
                <h3 className="slider__title" onClick={(e) => hadlerScroll(sliderImage7, SliderTextArr[6], e)}>ЭСКАЛАТОРЫ</h3>
                <h3 className="slider__title" onClick={(e) => hadlerScroll(sliderImage8, SliderTextArr[7], e)}>ТРАВОЛАТОРЫ</h3>
                <h3 className="slider__title" onClick={(e) => hadlerScroll(sliderImage9, SliderTextArr[8], e)}>ЗАПЧАСТИ И КОМПЛЕКТУЮЩИЕ</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="info-block">
            <div className="info-block-wrapper">
              <h2 className="title-main">ИНФОРМАЦИЯ ДЛЯ ЗАКАЗЧИКОВ</h2>
              <h3 className="info-block__subtitle">ОПРОСНЫЕ ЛИСТЫ</h3>
              <div className="info-block-content-wrapper">
                <div className="info-block-item">
                  <div className="info-block-item__image" style={{ "background-image": `url(${infoblockimg1})` }} />
                  <h4 className="info-block-item__title">ЛИФТЫ</h4>
                  <a href="../public/docs/list1.doc" target="__blank" className="info-block-item__btn" download >СКАЧАТЬ</a>
                </div>
                <div className="info-block-item">
                  <div className="info-block-item__image" style={{ "background-image": `url(${infoblockimg2})` }} />
                  <h4 className="info-block-item__title">ЭСКАЛАТОРЫ | ТРАВОЛАТОРЫ</h4>
                  <a href="../public/docs/list1.doc" target="__blank" className="info-block-item__btn" download >СКАЧАТЬ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-block-wrapper">
        <div className="content-container">
          <h4 className="map-block__title">СТРАНЫ-ПРОИЗВОДИТЕЛИ НАШЕГО ОБОРУДОВАНИЯ</h4>
          <h5 className="map-block__subtitle">(НАЖМИТЕ НА ОДНУ, ЧТОБЫ УЗНАТЬ БОЛЬШЕ)</h5>
          <object data={map} type="image/svg+xml" alt="интерактивная карта" className="map-block__map" alt="Изображение Интерактивной карты"/>
        </div>
      </div>
      <div className="yandex-map-wrapper">
        <YMaps>
          <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aacbdcc8ee1b87fb4f65fb0d9debf7ade27a0d7c63c0a712408408a6b0b161b38&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>
        </YMaps>
      </div>
    </Fragment>
  )
}



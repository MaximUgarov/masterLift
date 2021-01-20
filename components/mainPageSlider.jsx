import React, { Fragment, useState } from 'react'


const MainPageSlider = (props) => {


    return (
        <Fragment>
            <img src={props.image} alt="Изображение Постовляемого оборудования" className="slider__img" />
            <p className="slider-text">{props.text}</p>
        </Fragment>
    )
}

export default MainPageSlider

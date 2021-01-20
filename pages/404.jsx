import Link from 'next/link'
import React, { Fragment, useState } from 'react'

import logo from '../public/image/logo-nav.svg'

const Error = () => {



    return (
        <Fragment>
            <div className="error-wrapper">
                <img src={logo} alt="Логотип компании Мастер-лифт" />
                <div className="error-wrapper-btn-block">
                    <span className="error__span">Страница, которую вы ищете, не существует.</span>
                    <Link href="/"><span className="error__btn">ВЕРНУТЬСЯ НА ГЛАВНУЮ</span></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Error

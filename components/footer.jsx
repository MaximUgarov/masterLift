import React, { Fragment, useState } from 'react'


import logo from '../public/codovstvo_logo.svg'

import Link from 'next/link'


const Footer = () => {


    return (
        <footer>
            <h4 className="footer-text">© 2020 ООО “Мастер Лифт Инт.”</h4>
            <div className="footer-link-wrapper">
                <h4 className="footer-link">
                    <div>
                        <a href="mailto:master.lift@mail.ru">master.lift@mail.ru</a>
                        <a href="tel:+7 343 36 87 444">+7 343 36 87 444</a>
                    </div>
                    <h4 className="footer-text-adress">Екатеринбург, ул. Аппартная, д. 4, офис 84/1</h4>
                </h4>
            </div>
            <a href="https://codovstvo.ru" target="__blank">
                <img src={logo} alt="Логотип ВебСтудии Кодовство" className="codovstvo-logo" />
            </a>

        </footer>
    )
}

export default Footer

import React, { Fragment, useState } from 'react'
import logo from '../public/image/logo-nav.svg'
import Link from 'next/link'
import CallWindow from './callWindow'



const Navbar = () => {

    const [SubMenuOpen, setSubMenuOpen] = useState(false)
    const [CallWindowOpen, setCallWindowOpen] = useState(false)
    let el
 

    const CloseCallwindow = (e) => {
        setCallWindowOpen(false)
    }

    const HandlerScroll = (e) => {
        el = e.target.dataset.link
        if (!el == "") {
            console.log(el)
            setTimeout(
                scroller, 1000)
        }
    }

    const scroller = () => {
        let linkEl = document.querySelector(`.${el}`)
        linkEl.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <Fragment>
            <div className="navbar-wrapper">
                <div className="navbar">
                    <Link href="/">
                        <img src={logo} alt="Логотип Мастер-Лифт" className="navbar__logo" />
                    </Link>
                    <menu>
                        <Link href="/"><span className="navbar-link">ГЛАВНАЯ</span></Link>
                        <Link href="/?to=about"><span className="navbar-link" onClick={HandlerScroll} data-link="about">О КОМПАНИИ</span></Link>
                        <Link href="/?to=equipment"><span className="navbar-link" onClick={HandlerScroll} data-link="equipment">ОБОРУДОВАНИЕ</span></Link>
                        <Link href="/production"><span className="navbar-link">ПРОИЗВОДСТВО</span></Link>
                        <Link href="#">
                            <span className="navbar-link" onMouseOver={() => setSubMenuOpen(true)}>ПРОИЗВОДИТЕЛИ{SubMenuOpen ?
                                <Fragment>
                                    <div className="sub-nav-bg" onMouseOut={() => setSubMenuOpen(false)} />
                                    <div className="sun-nav-wrapper" >
                                        <div className="menu-list">
                                            <Link href="/equipment/china"><span className="menu-list-el">Китай</span></Link>
                                            <Link href="/equipment/greece"><span className="menu-list-el">Греция</span></Link>
                                            <Link href="/equipment/spainAndItaly"><span className="menu-list-el">Испания | Италия</span></Link>
                                            <Link href="/equipment/germany"><span className="menu-list-el">Германия</span></Link>
                                            <Link href="/equipment/russian"><span className="menu-list-el">Россия</span></Link>
                                        </div>
                                    </div>
                                </Fragment>
                                : null}
                            </span>
                        </Link>
                    </menu>
                    <div className="navbar-btns-wrapper">
                        <button className="navbar-btn">+7 343 36 87 444</button>
                        <button className="navbar-btn ordercall" onClick={() => setCallWindowOpen(true)}>ЗАКАЗАТЬ ЗВОНОК</button>
                    </div>
                </div>
            </div>
            {CallWindowOpen ? <CallWindow CloseCallwindow={CloseCallwindow} /> : null}
        </Fragment>
    )
}

export default Navbar

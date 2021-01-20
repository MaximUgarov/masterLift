import React, { Fragment, useState } from 'react'



import Link from 'next/link'


const SubMenuComponent = () => {

    return (
        <Fragment>
            <div className="sun-nav-wrapper" >
                <div className="menu-list">
                    <Link href="#"><span className="menu-list-el">Китай</span></Link>
                    <Link href="#"><span className="menu-list-el">Греция</span></Link>
                    <Link href="#"><span className="menu-list-el">Испания | Италия</span></Link>
                    <Link href="#"><span className="menu-list-el">Германия</span></Link>
                    <Link href="#"><span className="menu-list-el">Россия</span></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default SubMenuComponent

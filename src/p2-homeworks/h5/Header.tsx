import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.wrapper}>
            <input type="checkbox" id="htm" className={s.wrapperNavTicker}/>
            <label className={s.label} htmlFor="htm">
                <span className={s.first}/>
                <span className={s.second}/>
                <span className={s.third}/>
            </label>
            // add NavLinks
            <div className={s.wrapperNav}>
                <div>
                    <NavLink to="/pre-junior">Pre-Junior</NavLink>
                </div>
                <div>
                    <NavLink to="/junior">Junior</NavLink>
                </div>
                <div>
                    <NavLink to="/junior-plus">JuniorPlus</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header

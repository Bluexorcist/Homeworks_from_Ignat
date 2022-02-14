import React from 'react'
import s from './Error.module.css'


function Error404() {
    return (
        <div className={s.error}>
            <div className={s.ff}>404</div>
            <div className={s.page}>Page not found!</div>
            <div className={s.cat}>/ᐠↀᆺↀᐟ\ฅ</div>
        </div>
    )
}

export default Error404

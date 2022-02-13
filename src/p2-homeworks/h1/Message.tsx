import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar:string
    name: string
    message: string
    time: string
}


function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar}/>
            <div className={s.bodyMessages}>
                <div className={s.point}></div>
                <h3 className={s.name}>{props.name}</h3>
                <p className={s.text}>{props.message}</p>
                <p className={s.time}>{props.time}</p>
            </div>

        </div>
    )
}

export default Message

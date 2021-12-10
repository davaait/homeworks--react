import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

export function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.imageBlock}>
                <img src={props.avatar} alt="ava"/>
            </div>
            <div className={s.messageWrapper}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div>
                    {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}
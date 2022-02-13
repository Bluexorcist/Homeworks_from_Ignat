import React from 'react'
import Message from "./Message";

export const messageData = {
    avatar: 'https://media.tenor.com/images/6c8b63a15528327e975e54e5c0370cc9/raw',
    name: 'Oreki',
    message: 'I dont know JS and HTML/CSS perfect',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>*/}
        </div>
    )
}

export default HW1

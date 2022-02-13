import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

export type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback(e: ChangeEvent<HTMLInputElement>): void // need to fix any
    addUser(): void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.inputClassName; // need to fix with (?:)
    const message = error ? s.message : ''
    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser} className={s.addButton}>add</button>
            <span>{totalUsers}</span>
            <div className={message}>{error}</div>
        </div>
    )
}

export default Greeting

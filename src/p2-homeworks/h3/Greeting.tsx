import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={(e) => {
                if (e.key === "Enter") {
                    addUser();
                }
            }} className={inputClass}/>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <span className={s.span}>{totalUsers}</span>
            <div><span className={s.showError}>{error}</span></div>
        </div>
    )
}

export default Greeting
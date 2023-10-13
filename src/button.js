import './App.css'

// component for individual Box
export function Box({ style ,plnum, onboxClick }) {
    return <div className={style} onClick={onboxClick}><div>{plnum}</div></div>
}

// component to display winner 
export function Definewinner({ winner }) {
    return <p>Winner is Player {winner}</p>
}
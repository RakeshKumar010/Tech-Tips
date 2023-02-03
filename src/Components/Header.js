import React from 'react'
import './Header.css'
const Header = (props) => {
    return (
        <div className='header'>  

            <h1>Tech News</h1>
            <input type="text" onChange={props.cFun} />
        </div>
    )
}

export default Header
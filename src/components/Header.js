import React from 'react';
function Header() {
    return (
    <header>
        <nav>
        <a href='#' className='logo'>
            <img id='logo__img' src={require('../img/logo.png')}></img> 
        </a>
        <input type="text" placeholder="Search.."></input>
        <ul>
            <li>
                <a>
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25694.png'></img>
                </a>
            </li>
            <li>
                <a>
                    <img src='https://static.thenounproject.com/png/3861743-200.png'></img>
                </a>
            </li>
            <li>
                <a>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/explore-1781524-1513844.png"></img>
                </a>
            </li>
            <li>
                <a>
                    <img src='https://cdn-icons-png.flaticon.com/512/565/565422.png'></img>
                </a>
            </li>
            <li>
                <a>
                    <div></div>
                </a>
            </li>
        </ul>
        </nav>
    </header>
    )
}

export default Header;
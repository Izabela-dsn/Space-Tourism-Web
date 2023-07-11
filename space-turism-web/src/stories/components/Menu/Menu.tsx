import { useState } from 'react';
import menuHamburguerIcon from '../../assets/icon-hamburger.svg'
import menuCloseIcon from '../../assets/icon-close.svg'
import style from './style.module.css';

export default function Menu() {
    const[toggleMenu, setToggleMenu] = useState<boolean>();

    const handleClick = () =>{
        setToggleMenu(!toggleMenu);
    }

    return(
        <div className={style.container}>
            <div className={toggleMenu ? style.containerActive : style.containerDefault}>
                <span className={style.menu} onClick={handleClick}>
                    <img src={toggleMenu ? menuCloseIcon : menuHamburguerIcon} alt={toggleMenu? 'Close Menu' : "Menu"} />
                </span>
                {toggleMenu ? 
                <div className={style.menuItens}>
                    <nav>
                        <ul className={style.listOfLinks}>
                            <li>
                                <a href="#"><span>00</span> home</a>
                            </li>
                            <li>
                                <a href="#"><span>01</span> destination</a>
                            </li>
                            <li>
                                <a href="#"><span>02</span> crew</a>
                            </li>
                            <li>
                                <a href="#"><span>03</span> techology</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                :
                null}
            </div>
        </div>
    )
}
import Menu from "../../components/Menu/Menu";
import Logo from '../../../assets/logo.svg';
import style from './style.module.css';

const Home = () => {
    return(
        <div className={style.home}>
            <header className={style.header}>
                <img src={Logo} alt="Space Tourism" />
            </header>
            <div className={style.menu}>
                <Menu></Menu>
            </div>
            <main className={style.content}>
                <p className={style.title}>so, you want to travel to</p>
                <h1 className={style.headingOne}>space</h1>
                <p className={style.description}>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                <div className={style.actionButton}>
                    <button className={style.btn}>explore</button>
                </div>
            </main>
            <footer>
                <p>Made by <a href="https://github.com/Izabela-dsn" target="_blank">Izabela</a></p>
            </footer>
        </div>
    )
}

export default Home;
import style from './App.module.css';
import Menu from './stories/components/Menu/Menu';
import Logo from './assets/logo.svg';

function App() {
  return (
    <div className={style.home}>
      <div className={style.header}>
          <div className={style.logo}>
            <img src={Logo} alt="Space Tourism Logo" />
          </div>
          <div className={style.menu}>
            <Menu />
          </div>
      </div>
    </div>
  )
}

export default App

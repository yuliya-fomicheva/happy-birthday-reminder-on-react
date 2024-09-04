import style from './Header.module.css';
import icon from'../../img/party-popper.svg'

const Header = () => {
    return(
        <header>
		    <div className={style.header__cover}></div>
			    <div className={[style.container, style.header__wrapper].join(' ')}>
				    <h1 className={style.header__title}>Хеппи-Бёздер </h1>
				    <img className={style.header__icon} src={icon} alt="Иконка Хлопушки" width="70"/>
			    </div>
	    </header>
    )
}

export default Header;
import style from './Button.module.css'

const ButtonBDay = ({children, ...props}) => {
    return (
    <button {...props} className={style.button} >
        {children}
    </button>
    )
}

export default ButtonBDay;
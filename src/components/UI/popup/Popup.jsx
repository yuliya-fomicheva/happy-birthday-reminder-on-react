import { Children } from "react";
import style from './Popup.module.css'
const Popup =  ({children, visible, setVisible}) => {

    const rootClasses = [style.popup]
        if (visible) {
            rootClasses.push(style.popup_active)
        }
           
    return (
        <div className={rootClasses.join(' ')} onClick= {() => setVisible(false)}>
            <div className={style.popup__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Popup;
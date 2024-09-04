import style from './BirthdayItem.module.css'
import {formatDateDayMonth} from "../../utils/formateDate"

const BirthdayItem = (props) => {
    return (
        <li className={style.birthday__item}>
			<span className={style.birthday__name}>{props.bDayData.name} : </span> 
			<time className={style.birthday__date} dateTime="">{formatDateDayMonth (props.bDayData.dateBirth)}</time>
            <button 
            type='button' 
            className={style.btn_delete}
            onClick={() => props.remove(props.bDayData)}
                ></button>
    
		</li>
    )
}

export default BirthdayItem;
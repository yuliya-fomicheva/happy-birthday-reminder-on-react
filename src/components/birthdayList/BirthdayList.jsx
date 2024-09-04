import BirthdayItem from "../birthdayItem/BirthdayItem";
import style from './BirthdayList.module.css'

const BirthdayList = ({bDayData, remove}) => {

    
    if(!bDayData.length) {
        return (
            <div className={style.birthday__wrapper} >
                <h2 className={style.birthday__title}>Дни Рождения не найдены</h2>
            </div>
        )
    }

    return (
        <div className={style.birthday__wrapper}>
			<h2 className={style.birthday__title}>Дни Рождения</h2>
			<ul className={style.birthday__list}>
            {bDayData.map((bDayData) =>
                <BirthdayItem 
                remove ={remove} 
                bDayData={bDayData} key={bDayData.id}/>
                )
            }
            </ul>
        </div>
    )
}

export default BirthdayList;
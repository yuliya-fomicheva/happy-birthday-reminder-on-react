import style from './ReminderNextBDay.module.css'
import {createBDayManListAndTitle} from '../../utils/getNextBirthday'
import ButtonBDay from '../UI/button/ButtonBDay';

const ReminderNextBDay = ({bDayData, setVisible}) => {

	const popupText = createBDayManListAndTitle (bDayData);

    return (
        <section>
		<h1 className={style.title}>Скоро день рождения!</h1>
		<h2  className={style.nextBirtdayInfo}>{popupText.futureYearTitle}</h2>

		<ul className={style.nextBirthdayList}>

		{popupText.bDayManList.map((bDayMan, index) => 
			<li className={style.remindItem} 
			key={index}>{bDayMan}</li> )}
		</ul>
		<div style={{textAlign:'center'}}>
			<ButtonBDay  onClick = {() => setVisible(false)}> Ок </ButtonBDay>
		</div>
	</section>

    )
}

export default ReminderNextBDay
import { useState } from "react";
import ButtonBDay from "../UI/button/ButtonBDay";
import style from'./FormAdd.module.css'
import {getTodayformatDate} from '../../utils/formateDate.js'

const FormAdd = ({create, setVisible}) => {

    const [bDayData, setBDayData]= useState( { 
        name: '' , 
        dateBirth: ''});

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setBDayData((prevbDayData) => ({...prevbDayData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const newBirthday = {
            ...bDayData, id: Date.now(),
        }
        create(newBirthday)
        setBDayData({name: '', dateBirth: ''});
    };
 
    return(
        <div>
            <h1 className={style.title}>Добавить день рождение!</h1>
            <form className={style.addForm} onSubmit={handleSubmit} action="#"method="post" >
            
                <p>
                    <label className={style.label} htmlFor="user-name">Имя</label>
                    <input required={true} className={style.input} id="user-name" type="text" name="name" 
                    placeholder="Райан Гослинг" 
                    value={bDayData.name}
                    onChange={handleChange}/>
                </p>
                <p>
                    <label className={style.label} htmlFor="user-birthday">Дата рождения</label>
                    <input required={true} className={style.input} id="user-birthday" type="date" name="dateBirth" max={getTodayformatDate()} 
                     value={bDayData.dateBirth}
                     onChange={handleChange}/>
					
                </p>
                <ButtonBDay type="submit"  > Ок </ButtonBDay>
                <ButtonBDay onClick = {() => setVisible(false)}> Отмена </ButtonBDay>
            </form>
        </div>

    )
}

export default FormAdd;
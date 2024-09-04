import { useState } from 'react';
import BirthdayList from '../components/birthdayList/BirthdayList';

import '../style/App.css'
import Popup from '../components/UI/popup/Popup';
import FormAdd from '../components/FormAdd/FormAdd';
import ButtonBDay from '../components/UI/button/ButtonBDay';
import ReminderNextBDay from '../components/reminderNextBDay/ReminderNextBDay';

function Main() 
{
  const [bDayData, setBDayData]= useState([ 
    { 
          name: 'Джонни Депп' , 
          dateBirth: '1963-06-09',
          id: 1,
      },
      {
           name: 'Крис Эванс' ,
           dateBirth: '2002-06-13',
           id: 2,
  
    },
      { 
          name: 'Джон Траволта' , 
          dateBirth: '1954-02-18',
          id: 3,
      }, 
      { 
          name: 'Игорь Николаев' , 
          dateBirth: '1960-01-17',
          id: 4,
      }, 
      { 
          name: 'Джим Керри' , 
          dateBirth: '1962-01-17',
          id: 5,
      }, 
      {
          name: 'Натали Портман',
          dateBirth: '1981-06-09',
          id: 6,
      }
    ] );

    const [addModal, setAddModal] = useState(false);
    const [remindModal, setRemindModal] = useState(false);
  
    const createBDay = (newBDay) => {
        setBDayData([...bDayData, newBDay])
        setAddModal(false);
    }
    
    const removeBDay = (bDay) => {
        setBDayData(bDayData.filter(bD => bD.id !== bDay.id))
    }

  return (
    <>
        <main className='container'>
            <BirthdayList bDayData={bDayData}  remove={removeBDay}></BirthdayList>
            <ButtonBDay onClick = {() => setAddModal(true)}>Добавить</ButtonBDay>
            <ButtonBDay onClick = {() => setRemindModal(true)}>Напомнить</ButtonBDay>
        </main>

        
      <Popup visible={addModal} setVisible={setAddModal}>
        <FormAdd create={createBDay} setVisible={setAddModal}></FormAdd>
      </Popup>

      <Popup visible={remindModal} setVisible={setRemindModal}>
        <ReminderNextBDay  bDayData={bDayData}  setVisible={setRemindModal}/>
      </Popup>
    </>  
  );

  
}

export default Main;

import { formatDateDayMonth } from "./formateDate.js"

const today = new Date(); 
today.setHours(0,0);

//сортировка массива начиная от сегодняшнего дня и месяца. 
// Если в списке будет сегодняшяя дата, то она будет первой
function sortFromToday(bDayData) {
    return bDayData.slice().sort((bDayMan1, bDayMan2) =>  {
		const dateA = new Date (bDayMan1.dateBirth).setFullYear(today.getFullYear());
		const dateB = new Date (bDayMan2.dateBirth).setFullYear(today.getFullYear());
		
		const isADayBeforeToday = dateA < today;
		const isBDayBeforeToday = dateB < today;
	

		if (isADayBeforeToday && isBDayBeforeToday) {
		  return dateA - dateB; // Оба меньше сегодня, сортируем по возрастанию
		} else if (isADayBeforeToday) {
		  return 1; // A меньше сегодня 
		} else if (isBDayBeforeToday) {
		  return -1; // B меньше сегодня 
		} else {
		  return dateA - dateB; // Оба больше или равны сегодня, сортируем по возрастанию
		}
    });
  }
// создание заголовка и список ближайших именинников
function createBDayManListAndTitle (bDayData) {
	const bDayDataCopy = sortFromToday(bDayData);
    const bDayManList = []; 
	if (bDayDataCopy.length == 0) {
		return {
			bDayManList: [],
			futureYearTitle: 'Не найдено'}
	} 
	const futureYearTitle = `${reportHowManyDays(bDayDataCopy[0].dateBirth)}, ${formatDateDayMonth(bDayDataCopy[0].dateBirth)} `;
	for (let i = 0; i < bDayDataCopy.length; i++) {
		if (countRemainingDaysToBirthday(bDayDataCopy[0].dateBirth) !== 
		countRemainingDaysToBirthday(bDayDataCopy[i].dateBirth)) break;

		bDayManList.push(`${bDayDataCopy[i].name} — ${reportHowOld(bDayDataCopy[i].dateBirth)}`);
	}
    return {
		bDayManList: bDayManList,
		futureYearTitle: futureYearTitle};
};

function isThisYearBDay (bDayDate) {
    return (
            new Date(bDayDate).getMonth() > today.getMonth() || 
			( new Date(bDayDate).getMonth() === today.getMonth() &&
		    new Date(bDayDate).getDate() >= today.getDate() ) 
	);
}


function countFutureAge (bDayDate) {
	return Math.round(today.getFullYear() - new Date(bDayDate).getFullYear() + Number(!isThisYearBDay(bDayDate)));
}


function countRemainderToRemind(num) {
	if (num % 100 >= 11 && num % 100 <=14) return num % 100;
	return num % 10;
}
 
function reportHowOld (bDayDate) {
	let age = countFutureAge(bDayDate);
	switch (countRemainderToRemind(age)) {
		case 1:
			return countFutureAge(bDayDate)  +  ' год';
		case 2:
		case 3:
		case 4:
			return  countFutureAge(bDayDate)  + ' года';
		default:
			return countFutureAge(bDayDate)  + ' лет'; 
	}
}

function countRemainingDaysToBirthday (bDayDate) {
	bDayDate = new Date(bDayDate);
	bDayDate.setFullYear(today.getFullYear() + Number(!isThisYearBDay(bDayDate)));
	return Math.floor(Math.abs((bDayDate.getTime() - today.getTime()))/ (24 * 60 * 60 * 1000)); 
}


function reportHowManyDays (bDayDate) {
	 if (countRemainingDaysToBirthday  (bDayDate) === 0) {
		return 'Сегодня';
	} 
	let numberOfDays = countRemainingDaysToBirthday (bDayDate);
	switch (countRemainderToRemind(numberOfDays)) {
		case 1: 
		return `Через ${countRemainingDaysToBirthday  (bDayDate)} день`; 
	
		case 2:
		case 3:
		case 4: 
			return `Через ${countRemainingDaysToBirthday  (bDayDate)} дня`;
		default:  
			return `Через ${countRemainingDaysToBirthday  (bDayDate)} дней`;
	}
};


export {createBDayManListAndTitle}
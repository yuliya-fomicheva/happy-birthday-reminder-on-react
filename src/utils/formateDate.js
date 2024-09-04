
// преобразование даты в  день-месяц}

const formatDateDayMonth = (dateString) => {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];
    const [year, month, day] = dateString.split('-').map(Number);

    return `${day} ${months[month - 1]}`;
};

let today = new Date();
// преобразование сегодняшей даты (по умолчанию) или любой даты в формат "yyyy-mm-ddd"
const getTodayformatDate = (day = today) => {
    let d = new Date(day);
    return (`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`)};


export {formatDateDayMonth, getTodayformatDate };

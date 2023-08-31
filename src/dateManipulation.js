const getTodayDate = () =>{
    const date = new Date();

    const dayNum = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const currentDate = `${dayNum}.${month}.${year}`;

    return currentDate
}

export {getTodayDate}
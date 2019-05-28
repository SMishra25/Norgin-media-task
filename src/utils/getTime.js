export  const getTimeInMinutes = (start,end) => {
    const startDate = new Date(start)
    const endDate   = new Date(end)

    let diff = (endDate.getTime() - startDate.getTime()) / 1000
    diff /= (60)

    return Math.round(diff)
}

const addZero = (number) => number <10 ? '0'+ number : number ;

export const getShowTime=(start,end)=>{
    const startHH = addZero(new Date(start).getHours())
    const startMM = addZero(new Date(start).getMinutes())
    const endHH = addZero(new Date(end).getHours())
    const endMM = addZero(new Date(end).getMinutes())

    return startHH+ ':' + startMM + '-' + endHH + ':' +endMM;
}


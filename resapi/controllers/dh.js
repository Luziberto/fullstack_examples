const date = new Date()
const currentDate = ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + date.getFullYear()
const currentHours = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2)
const day = date.getDay()
const month = date.getMonth()
const year = date.getFullYear()
const week = new Array(6)
week[0]='domingo'
week[1]='segunda-feira'
week[2]='terca-feira'
week[3]='quarta-feira'
week[4]='quinta-feira'
week[5]='sexta-feira'
week[6]='sabado'

module.exports = {
    currentDate,
    currentHours,
    day,
    month,
    year,
    week
}
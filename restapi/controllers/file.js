const fs = require('fs')

const write = (currentDate, week, currentHours, err) => {
    fs.writeFile(`./log/log_${currentDate}_${week}.txt`, `${currentHours} ${err}\n\n`,{enconding:'utf-8',flag: 'a+'}, function (err) {
        if (err) throw err
        console.log('File save!')
    })
}


module.exports = { 
    write
}
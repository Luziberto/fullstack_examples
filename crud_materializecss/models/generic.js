const index = (connection, params) => {
    return new Promise((resolve, reject) => {
        const offset = params.currentPage * params.pageSize
        const pageSize = params.pageSize
        connection.query('select count(*) as total from contact', (err, result) => {
            const total = result[0].total
            const totalPages = parseInt(total/pageSize)
            if(err) {
                reject()
            }
            else {
                connection.query(`select * from contact limit ${offset}, ${pageSize}`, (err, results) => {
                    if(err) {
                        reject(err)
                    }
                    else {
                        resolve({
                            data: results,
                            pagination: {
                                pages: totalPages,
                                pageSize,
                                currentPage: parseInt(params.currentPage)
                            }
                        })
                    }
                })
            }
        })
    })
}
const detail = (connection, id) => {
    return new Promise((resolve, reject) => {       
        connection.query('select * from contact where idContact = ?', [id],  (err, results) => {
            if(err) {
                reject(err)
            }
            else {
                resolve({ data: results })
            }
        })
    })
}
const updatePerson = (connection, id, data) => {   
    return new Promise((resolve, reject) => {        
        connection.query('update contact set name = ?, phone = ? where idContact = ?', [data.name, data.phone, id], (err, results) => {
            if(err) {
                reject(err)
            }
            else {
                resolve({ data: results })
            }
        })
    })
}
const deletePerson = (connection, id) => {
    return new Promise((resolve, reject) => {       
        connection.query('delete from contact where idContact =  ?', [id],  (err, results) => {
            if(err) {
                reject(err)
            }
            else {
                resolve({ data: results })
            }
        })
    })
}
const insertPerson = (connection, data) => {
    return new Promise((resolve, reject) => {        
        connection.query('insert into contact (name, phone) values (?, ?)', [data.name, data.phone], (err, results) => {
            if(err) {
                reject(err)
            }
            else {
                resolve({ data: results })
            }
        })
    })
}

module.exports = {
    index,
    detail,
    deletePerson,
    updatePerson,
    insertPerson
}
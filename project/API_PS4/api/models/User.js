const db = require('./dbconnection')
const TABLE_NAME = 'users'

class User {
    constructor(obj) {
        this.username = obj.username
        this.fullname = obj.fullname
        this.nickname = obj.nickname
        this.passwd = obj.password
        this.phone = obj.phone
        this.address = obj.address
        this.created_by = 'SYSTEM'
		this.updated_by = 'SYSTEM'
    }
    static getAll(result) {
        let sql = `SELECT * FROM ${TABLE_NAME}`
        db.query(sql, (err, res) => {
            if(err) {
                result(null, err)
            }
            else{
             result(null, res)
            }
        });   
    }

    static getById(id, result) {
        let sql = `SELECT * FROM ${TABLE_NAME} WHERE id = ?`
        db.query(sql, [id], (err, res) => {
            if (err) {
                result(err, null)
            }
            else {
                result(null, res)
            }
        })
    }

    static getByUsername(uname, result) {
        let sql = `SELECT * FROM ${TABLE_NAME} WHERE username = ?`
        db.query(sql, [uname], (err, res) => {
            if (err) {
                result(err, null)
            }
            else {
                result(null, res)
            }
        })
    }

    static create(newObj, result) {
        let sql = `INSERT INTO ${TABLE_NAME} SET ?`
        db.query(sql, [newObj], (err, res) => {
            if(err) {
                result(err, null)
            }
            else{
                result(null, res.insertId)
            }
        })
    }

    static update(id, obj, result) {
        let sql = `UPDATE ${TABLE_NAME} SET ? WHERE id = ?`
        db.query(sql, [obj, id], (err, res) => {
            if(err) {
                result(err, null)
            }
            else{
                result(null, res)
            }
        })
    }

    static remove(id, result) {
        let sql = `DELETE FROM ${TABLE_NAME} WHERE id = ?`
        db.query(sql, [id], (err, res) => {
            if(err) {
                result(err, null)
            }
            else{
                result(null, res)
            }
        })
    }
}

export default User
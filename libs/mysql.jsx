import mysql from 'serverless-mysql'

export const conn = mysql({
    config:{
        host:'localhost',
        database:'luxore',
        port:3306,
        user:'root',
        password: 'MY$QL2023'
    }
})
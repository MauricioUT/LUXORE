import mysql from 'serverless-mysql'

export const conn = mysql({
    config:{
        host:'130.211.237.191',
        database:'luxore',
        port:3306,
        user:'root',
        password: 'lUx20230849'
    }
})



// // Función para ejecutar consultas
// export const query = (sql, params = []) => {
//     // return new Promise((resolve, reject) => {
//     //     conn.query(sql, params, (err, results) => {
//     //     if (err) reject(err);
//     //     else{
//     //     connection.end(); // Cerrar la conexión después de la consulta
//     //     resolve(results);
//     //     }
//     //   });
//     // });
//   };
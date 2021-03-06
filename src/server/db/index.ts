import * as mysql from 'mysql';
import Chirps from './chirps';
// export const Connection = mysql.createConnection({

// })

const pool = mysql.createPool({
    user: 'chirper',
    password: 'chirper',
    host: 'localhost',
    database: 'chirpr'
})


// pool.query('select * from chirps', (err, results) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(results)
//     }
// })

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};
export default {
    Chirps
}
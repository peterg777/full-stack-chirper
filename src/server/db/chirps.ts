import { Query } from './index';

const all = () => Query('SELECT chirps.*, users.name FROM chirps JOIN users ON users.id = chirps.userid ORDER BY chirps.id;');

const one = (id:number) => Query('SELECT chirps.*, users.name FROM chirps JOIN users ON users.id = chirps.userid WHERE chirps.id = ?', [id])

const insert = (userid: number, content: string) => Query('INSERT INTO chirps (userid, content) VALUE (?,?)', [userid, content])

const update = ( content: string , id :number) => Query('update chirps set content = ? where id=?;', [content, id])
const destroy = (id: number) => Query('delete from chirps where id=?',[id])

export default {
    all,
    one, 
    insert, 
    update,
    destroy
    
}
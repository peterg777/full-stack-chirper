import { Query } from './index';

const all = async() => Query('SELECT * FROM blogs');

export default {
    all
}
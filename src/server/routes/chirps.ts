import * as express from 'express';
import db from './db';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json('All Chirps');
});

router.get('/api/blogs'), async (req, res) => {
    try {
        res.json(await db.Blogs.all());

    } catch(e) {
        console.log(e)
        res.sendStatus(500);
    }
}
export default router;
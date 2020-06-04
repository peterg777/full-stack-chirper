import * as express from 'express';
import db from '../db';
const router = express.Router();

router.get('/:id', async (req, res, next) => {
    const id = Number(req.params.id)
    try {
        const [chirp] = await db.Chirps.one(id);
        res.json(chirp);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'server error', error });
    }
});

router.get('/', async (req, res, next) => {
    try {
        const chirps = await db.Chirps.all();
        res.json(chirps);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'server error', error });
    }
});
router.post('/', async (req, res) => {
    const chirp = req.body;
    try {
        const results = await db.Chirps.insert(chirp.userid, chirp.content);
        res.status(201).json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'server error', error });
    }
});

router.put('/:chirpid', async (req, res) => {
    const chirp = req.body;
    const chirpid = Number(req.params.chirpid);
    try {
        const results = await db.Chirps.update(chirp.content, chirpid);
        res.json(  results );
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'server error', error });
    }
});

router.delete('/:chirpid', async (req, res) => {
    const chirpid = Number(req.params.chirpid);
    try {
        const results = await db.Chirps.destroy(chirpid);
        res.json( results );
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'server error', error });
    }
});

export default router;
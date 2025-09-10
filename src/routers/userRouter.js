import express from "express";

const router = express.Router();

router.post('/', (req, res) => {res.json({message: 'Post do user'})});
router.get('/', (req, res) => {res.json({message: 'Lista do user'})});
router.get('/:id', (req, res) => {res.json({message: 'GetById do user'})});
router.put('/:id', (req, res) => {res.json({message: 'Put do user'})});
router.delete('/:id', (req, res) => {res.json({message: 'Delete do user'})});

export default router;

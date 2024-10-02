const express = require('express');
const Team = require('../models/Team');

const router = express.Router();

//Get all teams
router.get('/', async (req, res) => {
    try{
        const teams = await Team.find();
        res.json(teams);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//Geta team by ID
router.get('/:id', async (req, res) => {
    try{
        const team = await Team.finfById(req.params.id);
        if (!team) return res.status(404).json({message: 'Team not found' });
        res.json(team);

    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//send request (placeholder route)
router.post('/:id/request', (req, res) => {
    res.json({ message: `Request sent for team $ {req.params.id}`});
});

module.exports = router;
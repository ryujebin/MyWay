// pathContoller.js
const pathModel = require('../models/pathModel');

const savePath = (req, res) => {
    const path = req.body.path; // JSON 배열
    const distance = req.body.distance;
    const finishtime = req.body.finishtime;

    console.log('Received path data:', path);
    console.log('Received distance:', distance);
    console.log('Received finishtime:', finishtime);

    pathModel.savePath(path, distance, finishtime, (err, result) => {
        if (err) {
            console.error('Error saving path:', err);
            return res.status(500).json({ error: 'Failed to save path' });
        }
        console.log('Path saved successfully:', result);
        res.status(200).json({ success: 'Path saved successfully', result });
    });
};

const loadPaths = (req, res) => {
    pathModel.loadPaths((err, paths) => {
        if (err) {
            console.error('Error loading paths:', err);
            return res.status(500).json({ error: 'Failed to load paths' });
        }
        console.log('Loaded paths:', paths);
        res.status(200).json({ paths });
    });
};

module.exports = { savePath, loadPaths };

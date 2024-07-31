// 맵 경로 저장 및 불러오기 컨트롤러
const PathModel = require('../models/pathModel');

const pathController = {
    savePath: (req, res) => {
        const path = req.body.path;
        console.log('Received path:', path); // 경로 데이터 확인

        PathModel.savePath(path, (err, result) => {
            if (err) {
                return res.status(500).send('Error saving path');
            }
            res.send('Path saved successfully');
        });
    },
    loadPaths: (req, res) => {
        PathModel.loadPaths((err, paths) => {
            if (err) {
                return res.status(500).send('Error loading paths');
            }
            res.json(paths);
        });
    }
};

module.exports = pathController;
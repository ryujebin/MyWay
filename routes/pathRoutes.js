const express = require('express');
const router = express.Router();
const pathController = require('../controllers/pathContoller');  

router.post('/save_path', pathController.savePath);
router.get('/load_paths', pathController.loadPaths);

module.exports = router;
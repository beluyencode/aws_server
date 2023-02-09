const express = require('express');
const router = express.Router();
const FolderController = require('../controller/FolderController')

router.get('/path', FolderController.getDataFolder);
router.get('/create-dir', FolderController.createDir);
router.get('/delete-dir', FolderController.deleteDir);



module.exports = router;
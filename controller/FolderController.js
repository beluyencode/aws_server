const fs = require('fs');
const ResponseController = require('./ResponseController');

class FolderController {
    getDataFolder(req, res) {
        const path = req.query.path;
        if (path) {
            res.json(ResponseController.responseOK(fs.readdirSync('./folder-user-data' + path, { withFileTypes: true })
                .filter(item => item)
                .map(item => {
                    return {
                        ...item,
                        //type:  2 is dir , 1 is file
                        type: item.isDirectory() ? 2 : 1
                    }
                }), 'oke'));
        } else {
            res.json(ResponseController.responseERR(null, 'path is missing'))
        }
    }

    createDir(req, res) {
        const path = req.query.path;
        if (path && !fs.existsSync('./folder-user-data/' + path)) {
            fs.mkdirSync('./folder-user-data/' + path, { recursive: true })
            res.status(200).json(ResponseController.responseOK(null, ''));
        } else {
            res.json(ResponseController.responseERR(null, 'folder is exists'))
        }
    }

    deleteDir(req, res) {
        const path = req.query.path;
        if (path && fs.existsSync('./folder-user-data/' + path)) {
            fs.rmdirSync('./folder-user-data/' + path)
            res.status(200).json(ResponseController.responseOK(null, 'folder is deleted'));
        } else {
            res.json(ResponseController.responseOK(null, 'folder is not exists'))
        }
    }
}

module.exports = new FolderController;

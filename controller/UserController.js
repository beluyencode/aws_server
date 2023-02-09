class UserController {
    getUser(req, res) {
        return res.json('user');
    }

    getDataCv(req, res) {
        return res.json({
            name: 'long'
        })
    }
}

module.exports = new UserController;
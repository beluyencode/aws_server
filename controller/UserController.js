class User {
    getUser(req, res) {
        return res.send('user');
    }

    getDataCv(req, res) {
        return res.json({
            name: 'long'
        })
    }
}

module.exports = new User;
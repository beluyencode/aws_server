class User {
    getUser(req, res) {
        return res.send('user');
    }
}

module.exports = new User;
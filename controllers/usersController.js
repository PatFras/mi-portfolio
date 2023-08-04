const users = require('../data/users.json');

module.exports = {
    index : (req,res) => {
        return res.render('users', {
            users
        })
    }
}
const User = require('../models/userModel');

const userController = {
    list: (req, res)=>{
        User.getAll((users)=>{
            res.render('index',{users});
        })
    },

    formAdd:(req, res) => {
        res.render('add');
    },

    add:(req,res) => {
        const newUser = req.body;
        User.create(newUser, () => {
            res.redirect('/');
        });
    },

    formEdit:(req, res) => {
        const userId = req.params.id;
        User.getById(userId, (user)=>{
            res.render('edit',{user});
        })
    },

    edit:(req, res) => {
        const userId = req.params.id;
        const updatedUser = req.body;
        User.update(userId, updatedUser, () => {
            res.redirect('/');
        });
    },

    delet:(req, res) => {
        const userId = req.params.id;
        User.delete(userId, () => {
            res.redirect('/');
        });
    }
};

module.exports = userController;
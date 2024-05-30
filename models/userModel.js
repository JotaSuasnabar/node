const connection = require('../config');

const User = {
    getAll: (callback) => {
        connection.query('SELECT * FROM usuarios', (err, results) => {
            if(err) throw err;
            callback(results);
        });
    },
    getById: (id, callback) => {
        connection.query('SELECT * FROM usuarios WHERE id_usuario = ?',[id], (err, results) => {
            if(err) throw err
            callback(results[0]);
        });
    },
    create: (data, callback) => {
        connection.query('INSERT INTO usuarios SET ?', data, (err, results) =>{
            if(err) throw err;
            callback(results);
        });
    },
    update: (id, data, callback) => {
        connection.query('UPDATE usuarios SET ? WHERE id_usuario = ?', [data, id], (err, results) =>{
            if(err) throw err
            callback(results);
        });
    },
    delete: (id, callback) =>{
        connection.query('DELETE FROM usuarios WHERE id_usuario = ?', [id], (err, results) => {
            if(err) throw err;
            callback(results);
        });
    }
};

module.exports = User;
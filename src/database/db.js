/* Em primeiro momento para rodar o Banco, usa-se 'node src/database/db.js */

const Database = require('sqlite-async') /** importar o modulo */

function execute(db){
    //db eh um objeto, ou seja, possui funcionalidades

    //criar as tabelas do banco de dados
    //o ultimo dado cadastrado na tabela nao leva virgula
    //'AUTOINCREMENT' adiciona o id de maneira inteligente, sem repetir e sobre responsabilidade do banco
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

/* Exporta o dado para ser usado em outra file com 'require' */
module.exports = Database.open(__dirname + '/database.sqlite').then(execute) /* Precisa especificar o diretório onde se localiza o banco */
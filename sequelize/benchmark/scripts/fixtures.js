/**
 * @AUTHOR: Marques Kevin
 * @NODE: 4.6.*
 * @DESCRIPTION: Attention, ce fichier est utilisé pour générer les données dans la base de donnée, pour ne pas fausser les résultats, il est important d'utiliser au cours des tests les même données du test
 */

var fs = require('fs');

var users = Array.from(new Array(100000)).map(function (value, index) {
  return {
    name: ['John Doe', 'Marco Polo'][index % 2],
    age : Math.floor(Math.random() * 100),
    created_at: new Date(),
    updated_at: new Date()
  }
});

fs.writeFileSync('data/users.json', JSON.stringify(users));
function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
           admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('Maria', 'Admin');
usuarios.set('Luana', 'User');
usuarios.set('Pedro', 'User');

console.log(getAdmins(usuarios));
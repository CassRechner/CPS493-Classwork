const data = require("../data/users.json")

function getAll(){
    return data.items
}

function get(id) {
    return data.items.find((user))
}


const list = require('./list.json');
const entry_list = require('./entry_list.json');
const indent_list = require('./indent_list.json');
const menu = require('./menu.json');


module.exports = () => {
    return {
        // 相当于 提供了 localhost:3000/list -> list
        list: list,
        entry_list : entry_list,
        indent_list: indent_list,
        menu: menu
    }
}
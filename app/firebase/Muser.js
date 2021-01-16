/**
 * @author lepek13
 * make collection user
 * collection/table user
 */

const config = require('./config');
const firestore = config.firestore();
const table = 'users';

const create = async(req) => {
    return await firestore.collection(table).doc().set(req);
}

const getData = async() => {
    const users = await firestore.collection(table);
    const data = await users.get()
    let values = []
    data.forEach(element => {
        values.push(element.data())
    });
    
    return values
}

module.exports = {
    getData,
    create
}
const { ObjectId } = require('mongodb');
const jwt          = require('jsonwebtoken');

const { Todo } = require('./../../server/models/todo');
const { User } = require('./../../server/models/user');

const todos = [{
    _id : new ObjectId(),
    text: 'First test todo'
}, {
    _id        : new ObjectId(),
    text       : 'Second test todo',
    completed  : true,
    completedAt: 333
}];

const userOneId = new ObjectId();
const userTwoId = new ObjectId();

const users = [{
    _id: userOneId,
    email: 'tester@tester.tester',
    password: 'userPassword',
    tokens: [{
      access: 'auth',
      token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()  
    }]
}, {
    _id: userTwoId,
    email: 'test@tester.tester',
    password: 'secondUserPassword',
}];


const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};

module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
}
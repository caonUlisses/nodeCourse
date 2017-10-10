let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
  text: {
    type     : String,
    required : true,
    minlength: 1,
    trim     : true
  },
  completed: {
    type   : Boolean,
    default: false
  },
  completedAt: {
    type   : Number,
    default: null
  }
});

// let otherTodo = new Todo({
//   text       : 'Feed the cat',
//   completed  : true,
//   completedAt: 123
// });

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }), (e) => {
//   console.log('Unable to save todo', e);
// };

let User = mongoose.model('User', {
  email: {
    type     : String,
    required : true,
    trim     : true,
    minlength: 1
  }
});

let newUser = new User({
  email: 'test@test.com'
});

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}), (e) => {
  console.log('Unable to save user', e);
};
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
var toDo = new Schema({
  actitivityId: {
        type: String,
        unique: true,
        required: true
    },
  userId: {
        type: String,
        required: true
    },
  status: {
        type: String,
        required: true
    },
  endDate: {
        type: String,
        required: false
    },
  completionDate: {
        type: String,
        required: false
    },
  inviteBy: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Todo', toDo);

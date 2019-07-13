const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  msg: {
    type: String,
    required: true
  }
});

module.exports = Message = mongoose.model('message', MessageSchema);

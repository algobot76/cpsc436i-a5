const express = require('express');
const router = express.Router();
const isEmpty = require('lodash.isempty');

const Message = require('../models/Message');

const messages = [
  { msg: 'message 1' },
  { msg: 'message 2' },
  { msg: 'message 3' }
];

messages.forEach(message => {
  const newMessage = new Message({
    msg: message.msg
  });
  newMessage
    .save()
    .then(() => console.log(`${message.msg} has been added to MongoDB.`));
});

router.get('/all', function(req, res, next) {
  Message.find({})
    .then(messages => res.json(messages))
    .catch(() => res.status(404).json({ error: 'Messages not found!' }));
});

router.post('/new', function(req, res, next) {
  const msg = req.body.msg;
  if (!isEmpty(msg)) {
    const newMessage = new Message({
      msg
    });
    newMessage
      .save()
      .then(message => res.json(message))
      .catch(() =>
        res.status(400).json({ error: 'Failed to add the message!' })
      );
  }
});

router.delete('/remove/:id', function(req, res, next) {
  Message.findById(req.params.id)
    .then(message => {
      message.delete().then(() => {
        res.json(req.params.id);
      });
    })
    .catch(() => res.status(404).json({ error: 'No message found!' }));
});

router.delete('/destroy', function(req, res, next) {
  Message.deleteMany({})
    .then(() => res.sendStatus(200))
    .catch(() => res.status(400).send({ error: 'Failed to clear MongoDB!' }));
});

module.exports = router;

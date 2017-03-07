var inherits = require('util').inherits;
var EventEmitter = require('events').EventEmitter;



function Webhook(err,req,res,next) {  
  if (! (this instanceof Webhook)) return new Webhook();
  EventEmitter.call(this);
}

inherits(Webhook, EventEmitter);


module.exports = Webhook;

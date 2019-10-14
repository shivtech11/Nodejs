var events = require('events');
// //elements.on('click', function() {})
// //console.log(events);

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg) {
//     console.log(msg);
// });
// myEmitter.emit('someEvent', 'the event was emitted');

var util = require('util');

var Person = function(name) {
    this.name = name;
};
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var reu = new Person('reu');
var people = [james, mary, reu];

people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(person.name + ' said: ' + msg);
    });
});

james.emit('speak', 'hey love');
reu.emit('speak', 'I wan a tlk to u');
mary.emit('speak', 'I HATE U');
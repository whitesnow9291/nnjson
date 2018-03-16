# nnjson

Remove key which has null value from json object.

## Installation

npm i --save nnjson

## In Node.js

```
var nnjson = require('nnjson');
var user = {
  name: 'Nomura Nori',
  age: '36',
  school_id: null,
  posts: [{
    title: 'node package',
    content: 'you can remove null fields in json object using nnjson',
    photo_id: 123,
  },{
    title: 'node package',
    content: 'you can remove null fields in json object using nnjson',
    photo_id: null,
  },
  ]
}

var newUser = nnjson.removeNull(user);
console.log (newUser)
```

## result 
```
{
  name: 'Nomura Nori',
  age: '36',
  posts: [{
    title: 'node package',
    content: 'you can remove null fields in json object using nnjson',
    photo_id: 123,
  },{
    title: 'node package',
    content: 'you can remove null fields in json object using nnjson',
  },
  ]
}
```

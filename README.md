## after-time

Declarative setTimeout based on [english-time](http://github.com/azer/english-time)

```js
after = require('after-time')

after('5 minutes', function(){
  console.log('hello!')
})

after('3 Hours, 15 Minutes and 20 Milliseconds', function(){
  console.log('yo!')
})

after('3h 15m 20ms', 'foo', 'bar', function(foo, bar){
  foo
  // => 'foo'

  bar
  // => 'bar'
})
```

## Install

```bash
$ npm install after-time
```

![](https://dl.dropboxusercontent.com/s/6mee4u8n66zk701/npmel_21.jpg)

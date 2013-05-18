var time = require("english-time");

module.exports = after;

function after(delay){
  var params;

  params = [
    arguments[ arguments.length - 1 ],
    time(delay)
  ];

  params.push.apply(params, Array.prototype.slice.call( arguments, 1, arguments.length - 1 ));

  return setTimeout.apply(this, params);
}

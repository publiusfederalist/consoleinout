const readline = require('readline');
const writable = require('stream').Writable;
const mutable = new writable({
  write: (chunk, encoding, callback) => {
    if (!mutable.muted) process.stdout.write(chunk, encoding);
    callback();
  }
});
const rl = readline.createInterface({
  input: process.stdin,
  output: mutable,
  terminal: true
});
mutable.muted = false;

function output(msg) {
  if(!arguments || !arguments[0]) return;
  for(let x=0;x<arguments.length;x++) {
    let arg = arguments[x];
    process.stdout.write(Buffer.from(arg),'utf8');
    if(x+1<arguments.length)
      process.stdout.write(Buffer.from(' '),'utf8');
  }
}
async function input(muted=true) {
  mutable.muted = muted;

  const it = rl[Symbol.asyncIterator]();
  const return_value = (await it.next()).value

  mutable.muted = !muted;
  if(muted)
    output("\r\n");
  return return_value;
}
class ConsoleIO {
  constructor(console) {
    console.output = output.bind(output);
    console.input = input.bind(input);
  }
}
module.exports = ConsoleIO

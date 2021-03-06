# consoleinout
### IO for console on nodeJS

There is no easy way to read input.  Additionally, console.log() automatically adds a "\n" which you may not wish for.  This provides an alternative.

### Installation

```
git clone https://github.com/publiusfederalist/consoleinout
````

or

```
npm install consoleinout
```

## Usage

```
const ConsoleIO = new (require("consoleinout"))(console);
console.output("Some","text");
let input = await console.input()
console.output("You entered ",input);
```

Mute echo
```
console.input(true);
```

Unmute echo
```
console.input(false);
```

### Example

```
const ConsoleIO = new (require("consoleinout"))(console);

(async function() {
  console.output("Enter password: ");
  let pass = await console.input(true);
  console.output("You entered",pass,"\n");
  process.exit();
})();
```

### Discuss

[Discord](https://discord.gg/tXJ2UdGuda)

### License

Copyright (c) 2022 Publius Federalist

All Rights Reserved

MIT Licensed

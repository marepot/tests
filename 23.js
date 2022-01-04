const example =
  "'Hello World' - said John. 'Super. Aren't we supposed to go home?'. -said the cat. "

console.log(example.replace(/(^|[^a-zA-Z0-9_])'|'($|[^a-zA-Z0-9_])/g, '$1"$2'))
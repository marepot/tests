const example =
  "'Hello World' - said John. 'Super. Aren't we supposed to go home?'. -said the cat. 'Канальи' - сказал д'Артаньян "

console.log(example.replace(/(^|[^a-zа-яA-ZА-Я0-9_])'|'($|[^a-zа-яA-ZА-Я0-9_])/g, '$1"$2'))
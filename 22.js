verify(/ca(t|r)/, ["my car", "bad cats"], ["camper", "high art"])
verify(/pr?op/, ["pop culture", "mad props"], ["plop"])
verify(/ferr[^u]/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"])
verify(
  /[a-z]+ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
)
verify(/\s(\.|,|:|;)/, ["bad punctuation ."], ["escape the dot"])
verify(/([a-z]+){7,}/, ["hottentottententen"], ["no", "hotten totten tenten"])
verify(
  /\b[a-df-z]+\b/,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape"]
)
function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return
  yes.forEach(function (s) {
    if (!regexp.test(s)) console.log("Не нашлось '" + s + "'")
  })
  no.forEach(function (s) {
    if (regexp.test(s)) console.log("Неожиданное вхождение '" + s + "'")
  })
}
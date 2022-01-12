var box = {
  locked: false,
  unlock: function() {
    this.locked = false
  },
  lock: function() {
    this.locked = true
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Заперто!")
    return this._content
  },
}

function withBoxUnlocked(body) {
  if (box.locked) {
    try {
      box.unlock()
      body()
    } catch (e) {
      console.log(e.message)
    } finally {

      box.lock()
    }
  } else {
    try {
      box.unlock()
      body()
    } catch (e) {
      console.log(e.message)
    } finally {

    }
  }
}
withBoxUnlocked(function() {
  box.content.push("золотишко")
  console.log(box.content)
})
try {
  withBoxUnlocked(function() {
    throw new Error("Пираты на горизонте! Отмена!")
  })
} catch (e) {
  console.log("Произошла ошибка:", e)
}
console.log(box.locked)

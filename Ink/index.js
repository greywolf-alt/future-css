const canvas = document.getElementById('canvas')
const div = document.getElementById('div')
const ctx = canvas.getContext('2d')
let move_cnt = 0
const presenter = navigator.ink.requestPresenter({ presentatinArea: canvas })
let style = { color: 'rgb(0 255 0 / 100%)', diameter: 10 }

function getRandom(min = 0, max = 255) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

canvas.addEventListener('pointermove', async (evt) => {
  console.log(evt)
  const pointerSize = 10
  ctx.fillStyle = style.color
  ctx.fillRect(evt.pageX, evt.pageY, pointerSize, pointerSize)
  if (move_cnt === 20) {
    const r = getRandom()
    const g = getRandom()
    const b = getRandom()
    style.color = `rgb(${r} ${g} ${b} / 100%)`

    move_cnt = 0
    div.style.backgroundColor = `rgb(${r} ${g} ${b}  / 60%)`
  }
  move_cnt += 1
  console.log(style.color)
  ;(await presenter).updateInkTrailStartPoint(evt, style)
})
canvas.addEventListener('pointerdown', () => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
})
const random = getRandom(1, 100)
canvas.width = innerWidth - 2
canvas.height = innerHeight / 2

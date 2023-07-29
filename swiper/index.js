const swiperContiner = document.getElementById('swiperContiner')
const swiperList = document.getElementById('swiperList')

swiperList.addEventListener('mousedown', onMousedown)
swiperList.addEventListener('mousemove', onMousemove)
swiperList.addEventListener('mouseup', onMouseup)
swiperList.addEventListener('mouseout', onMouseup)

let isDown = false
let startTranform = 0
let startY = 0
let lastY = 0
const height = swiperContiner.offsetHeight

function onMousedown(event) {
  isDown = true
  const { clientY } = event
  startY = lastY = clientY
  const transform = swiperList.style.transform
  startTranform = parseInt(transform.substring(transform.indexOf('(') + 1, transform.lastIndexOf(')'))) || 0
  swiperList.style.transitionDuration = '0s'
}

function onMousemove(event) {
  if (!isDown) return
  const { clientY: currentY } = event
  const diff = lastY - currentY
  let value = getTransform() - diff
  setTranform(value)
  lastY = currentY
}

function onMouseup(event) {
  if (isDown) {
    const { clientY: endY } = event
    if (startY !== endY) {
      let value = startY - endY > 0 ? -height : height
      setTranform(startTranform + value)
    }
    isDown = false
    startY = lastY = startTranform = 0
    swiperList.style.transitionDuration = '0.4s'
  }
}

function getTransform() {
  const targetTransformY = getComputedStyle(swiperList).transform
  const arr = targetTransformY.replace(')', '').split(',')
  return +arr.at(-1)
}

function setTranform(num) {
  if (num > 0) num = 0
  const max = - (swiperList.children.length - 1) * height
  if (num < max) num = max
  swiperList.style.transform = `translateY(${num}px)`
}


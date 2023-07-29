// ==UserScript==
// @name         browser-mine
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://wvblfhktwemq.xyz/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  'use strict'
  function $(c) {
    let arr = []
    for (let item of c) {
      arr.push(...document.querySelectorAll(item))
    }
    return arr
  }
  let s = [
    '.mugjfkwia',
    '.menuda',
    '#header',
    '.stars_menu',
    '.rifupsyna',
    '.title',
    '.footer',
    '.amschusza',
    '.ivphgzyaa',
    '.zlwfhqcta',
    '.scroll-content',
    '.guide',
    '.mgyxiguwa',
    '.itclluhca', // true
    '.prynfoxia',// true
    '.section-banner',
    '.p1234a',
    '.stars_menu',
  ]
  let items = $(s)
  for (let i of items) {
    i.style.display = 'none'
  }

  let image = document.querySelectorAll('img')
  for (let i of image) {
    let c_v = i.classList.value
    if (!c_v.includes('lazyload')) {
      i.style.display = 'none'
    }
  }



  // let container = document.querySelector('.container')
  // container.firstElementChild.style.display = 'none'
  // const sources = document.getElementsByTagName('source')
  // let videoSrc = null
  // for (let item of sources) {
  //   if (item.src.includes('m3u8')) {
  //     console.log(item.src)
  //     videoSrc = item.src
  //   }
  // }
  // const title = document.getElementsByTagName('h1')[0]
  // title.style.padding = "0"
  // title.style.textAlign = 'start'
  // title.style.position = 'fixed'
  // const text = title.innerText
  // const input = document.createElement('input')
  // const span = document.createElement('span')
  // span.style.cssText = `
  // position: fixed;
  // top: 0px;
  // z-index: 999;
  // left: 0;
  // color: orange;
  // line-height: 59px;
  // font-size: 25px;
  // cursor:pointer;
  // user-select: none`
  // span.innerText = text
  // document.body.appendChild(span)
  // input.value = videoSrc
  // console.log('videoSrc', videoSrc)
  // document.body.appendChild(input)
  // console.log(input)
  // span.addEventListener('dblclick', () => {
  //   console.log('dblclick me')
  //   input.select()
  //   document.execCommand('copy')
  //   console.log(input)
  //   alert('Replication successful')
  // })
  // const v = document.getElementById('showvod_html5_api')
  // v.style.width = '100vw'
  // v.style.height = '100vh'
  // v.style.top = 0
  // v.style.bottom = 0
  // v.style.right = 0
  // v.style.left = 0
  // v.style.position = 'fixed'
  // v.style.zIndex = 100
  // v.style.backgroundColor = '#000'
  // v.style.padding = "0"
  // Your code here...
})()
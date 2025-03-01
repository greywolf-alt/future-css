/**
 * @description 将传递的字符串 转换成被tag标签包裹的html自负
 * @param {string} text 需要匹配的自字符串
 * @param {string} tag 需要被包裹的标签
 * @returns 处理后的html字符串
 */
function plainTextTransferHtml(text = '', tag = 'p') {
  let result = ''
  while (true) {
    // const startMatch = text.match(/\<\s*(.+?)\s*\>/)
    const startMatch = text.match(/\< *([a-zA-Z]+[1-9]?) *\>/)
    if (!startMatch) {
      const uniqueTag = text.match(/\<[a-zA-Z]+[1-9]??\>/)
      if(uniqueTag) {
        console.log(uniqueTag)
        // result += 
      }
      return result
    }
    const { 1: matchTag, index } = startMatch
    let _tag = matchTag.split(' ')[0]
    if (index !== 0) {
      result += `<${tag}>${text.slice(0, index)}</${tag}>`
      text = text.slice(index)
    }
    const regexp = new RegExp(`\<\/${_tag}\>`)
    const end = text.match(regexp)
    if (!end) continue
    const { 0: endMatch, index: endIndex } = end
    result += text.slice(0, endIndex + endMatch.length)
    text = text.slice(endIndex + endMatch.length)
  }

  return result
}

const text = `嘿嘿</br><h4 class="paragraph">今天是个好日子</h4><p>今天下雨了</p>下雨了`

const result = plainTextTransferHtml(text)

console.log(result)

const app = document.getElementById('app')
app.innerHTML = result

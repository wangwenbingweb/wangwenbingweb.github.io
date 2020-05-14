/**
 * 给商品价格加补0
 * @param {*} value
 */
const addZero = function (value1) {
  let value = Math.round(parseFloat(value1) * 100) / 100
  let xsd = value.toString().split('.')
  if (xsd.length === 1) {
    value = value.toString() + '.00'
    return value
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + '0'
    }
    return value
  }
}
/*
  手机号中间4位隐藏
  @param 手机号
 */
const formatPhone = str => {
  return str.substr(0, 3) + '****' + str.substr(7)
}
/*
  通过空格截取字符串并去除html标签
  @param 字符串
 */
const transformLineBreak = str => {
  let reg = /((<\w.*?>)|(<\/\w.*?>))/g
  return str.split(/\n/g)[0].replace(reg, '')
}
/*
  时间戳转时间 12-4 10:23
  @param 时间戳
 */
const transformationTime = time => {
  let date = new Date(time)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let minute = date.getMinutes()
  let second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return m + '-' + d + '       ' + h + ':' + minute
}
// 2019-12-12  14:29:09                     
const transformationTime1 = time => {
  let date = new Date(time)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let minute = date.getMinutes()
  let second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second
  return y + '-' + m + '-' + d + '        ' + h + ':' + minute + ':' + second
}
export default {
  addZero,
  formatPhone,
  transformLineBreak,
  transformationTime,
  transformationTime1
}

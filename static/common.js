var commonFun = (function () {
  // 设置rem
  function resRem() {
    var deviceWidth = document.documentElement.clientWidth
    if (deviceWidth > 500) {
      document.documentElement.style.fontSize = 64 + 'px'
    } else {
      document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px' // 750/7.5 = 100
    }

  }
  resRem()
  window.onresize = resRem

  // 判断环境
  var browser = {
    versions: (function () {
      var u = navigator.userAgent
      // VAR app = navigator.appVersion
      return { // 移动终端浏览器版本信息

        trident: u.indexOf('Trident') > -1, // IE内核

        presto: u.indexOf('Presto') > -1, // opera内核

        Alipay: u.indexOf('Alipay') > -1, //支付宝

        webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核

        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核

        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端

        ios: !!u.match(/\(i[^]+;( U;)? CPU.+Mac OS X/), // ios终端

        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器

        iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器

        iPad: u.indexOf('iPad') > -1, // 是否iPad

        webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部

        weixin: u.indexOf('MicroMessenger') > -1, //是否为微信浏览器

        qq: u.match(/\sQQ/i) !== null, //是否QQ

        Safari: u.indexOf('Safari') > -1,
        ///Safari浏览器,

      }
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }

  return {
    browser
  }
})()

var http = require('http')
var fs = require('fs')
var url = require('url')
var server = http.createServer()

// 2. 监听 request 请求事件，设置请求处理函数
server.on('request', function (req, res) {
  // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
  var parseObj = url.parse(req.url, true)
  // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
  var pathname = parseObj.pathname
  console.log(url)
  if (pathname === '/') {
    //读文件还是要相对路径 需要加点
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        return res.end('index.html读取失败，请稍后重试！')
      } else {
        // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
        // res.end() 支持两种数据类型，一种是二进制，一种是字符串
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        return res.end(data)
      }
    })
  } else if (pathname.indexOf('/public/') === 0) {
    fs.readFile('.' + pathname, function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        return res.end(pathname + '读取失败，请稍后重试！')
      } else {
        if (pathname.indexOf('/public/js/') === 0) {
          res.setHeader('Content-Type', 'application/x-javascript; charset=utf-8')
          return res.end(data)
        } else if (pathname.indexOf('/public/css/') === 0) {
          res.setHeader('Content-Type', 'text/css; charset=utf-8')
          return res.end(data)
        } else if (pathname.indexOf('/public/src') === 0) {
          res.setHeader('Content-Type', 'text/css; charset=utf-8')
          return res.end(data)
        }
        else {
          // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
          // res.end() 支持两种数据类型，一种是二进制，一种是字符串
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(data)
        }
      }
    })
  }
  else {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('文件读取失败，请稍后重试')
  }
})

server.listen(3000, function () {
  console.log('服务器启动成功，可以访问3000端口了')
})

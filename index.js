var fs = require('fs')

function queryPreperator (file, opts, cb) {
  fs.readFile(file, function (err, data) {
    if (err) cb(err)
    data = data.toString().split('\r\n').map(function (each){
      if (opts == 'brackets') return each = '[' + each + ']'
      if (opts == 'quotation_double') return each = '"' + each + '"'
      else return each
    }).join('\r\n')
    cb(null, data)
  })
}

function queryPreperator2 (file, opts, cb) {
  fs.readFile(file, function (err, data) {
    if (err) cb(err)
    data = data.toString().split('\r\n').map(function (each){
      if (opts == 'brackets') return each = '[' + each + ']'
      if (opts == 'quotation_double') return each = '"' + each + '"'
      else return each
    }).join('\r\n')
    //cb(null, data)
    fs.writeFile(file, data, function (err) {
      if (err) cb(err)
      cb(null, 'File has been saved.')
    })
  })
}

module.exports = {
  queryPreperator,
  queryPreperator2
}

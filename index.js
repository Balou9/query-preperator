var fs = require('fs')

function queryPreperator (file, type, save, cb) {
  fs.readFile(file, function (err, data) {
    if (err) cb(err)
    data = data.toString().split('\r\n').map( function (each) {
      if (type == 'brackets') return each = '[' + each + ']'
      if (type == 'double_quotes') return each = '"' + each + '"'
      else return each
    }).join('\r\n')

    if (save == true) {
      fs.writeFile(file, data, function (err) {
        if (err) cb(err)
        cb(null, 'Items have been preped with ' + type + '.')
      })
    }
    else {
      cb(null, data)
    }
  })
}

module.exports = queryPreperator

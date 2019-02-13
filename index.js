var fs = require('fs')

function prepper (file) {
  fs.readFile(file, function (err, data) {
    if (err) throw err
  })
}

function queryPreperator (file, type, save, cb) {
  if (typeof file != 'string') throw new TypeError('file should be string')
  if (!(type == 'brackets' || type == 'double quotes')) throw new TypeError('available types')
  fs.readFile(file, function (err, data) {
    if (err) cb(err)
    data = data.toString().split('\r\n')
    .filter( function (each) {
      if (each != '') return each
    }).map( function (each) {
      if (type == 'brackets') return each = '[' + each + ']'
      else if (type == 'double quotes') return each = '"' + each + '"'
      else return each
    }).map( function (each, i) {
      if (i == 0) return each
      else return ',' + each
    }).join('\r\n')

    if (save) {
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

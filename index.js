var fs = require('fs')
var isQueryValid = require('is-query-valid')

module.exports = queryPreperator = (file, type, save, cb) => {

  if (typeof file != 'string') throw new TypeError('file should be string')
  if (!(type == 'brackets' || type == 'double quotes')) throw new Error('Available types: `brackets` `double quotes`')
  fs.readFile(file, (err, data) => {
    if (err) cb(err)
    var query = data.toString().split('\r\n').filter( (each) => {
       if (each != '') return each
    })

    isQueryValid(query, (err, isTrue) => {
      if (err) cb(err)
      else if (isTrue === true) { cb(null, 'File has already been prepped') }
      else {
        var prepped = query.map( (each, i, arr) => {
          if (type == 'brackets') return each = '[' + each + ']'
          else if (type == 'double quotes') return each = '"' + each + '"'
        }).map( (each, i) => {
          if (i == 0) return each
          else return ',' + each
        }).join('\r\n')

        if (save) {
          fs.writeFile(file, prepped, (err) => {
            if (err) cb(err)
          })
          cb(null, 'Items have been preped with ' + type + '.')
        }
        else {
          cb(null, prepped)
        }
      }
    })
  })
}

var queryPreperator = require('./index.js')
var file = process.argv[2] || './some.txt'
var types = require('./type.js')

queryPreperator(file, 'brackets', false, function (err, data) {
  if (err) throw err
  console.log(data)
//  console.log(types.brackets)
})

var { queryPreperator, queryPreperator2 } = require('./index.js')
var file = process.argv[2] || './some.txt'

queryPreperator(file, 'brackets', function (err, data) {
  if (err) throw err
  console.log(data)
})

queryPreperator(file, 'quotation_double', function (err, data) {
  if (err) throw err
  console.log(data)
})

queryPreperator(file, '', function (err, data) {
  if (err) throw err
  console.log(data)
})

queryPreperator2(file, 'brackets', function (err, data) {
  if (err) throw err
  console.log(data)
})

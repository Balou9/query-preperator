var queryPreperator = require('./index.js')
var program = require('commander')

program
  .version('0.0.0')
  .option('-b, --brackets', 'brackets preperation')
  .option('-d, --doubleQuotes', 'double quote preperation')

program
  .command('queryprep <file>')
  .action(function (file) {

    if (program.brackets) {
      queryPreperator(file, 'brackets', true, function (err, data) {
        if (err) throw err
        console.log(data)
      })
    }

    else {
      queryPreperator(file, 'double quotes', true, function (err, data) {
        if (err) throw err
        console.log(data)
      })
    }
  })

program.parse(process.argv)

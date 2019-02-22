var queryPreperator = require('./index.js')
var program = require('commander')

program
  .version('0.0.0')
  .option('-b, --brackets', 'brackets preperation')
  .option('-d, --doubleQuotes', 'double quote preperation')
  .option('-s, --save', 'save results to file')

program
  .command('queryprep <file>')
  .action(function (file) {

    if ((program.brackets) & !(program.save)) {
      queryPreperator(file, 'brackets', false, function (err, data) {
        if (err) throw err
        console.log(data)
      })
    }

    else if ((program.brackets) & (program.save)) {
      queryPreperator(file, 'brackets', true, function (err, data) {
        if (err) throw err
        console.log(data)
      })
    }

    else if ((program.doubleQuotes) & !(program.save)) {
      queryPreperator(file, 'double quotes', false, function (err, data) {
        if (err) throw err
        console.log(data)
      })
    }

    else if ((program.doubleQuotes) & (program.save)) {
      queryPreperator(file, 'double quotes', true, function (err, data) {
        if (err) throw err
        console.log(data)
      })
    }
  })

program.parse(process.argv)

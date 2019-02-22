var queryPreperator = require('./index.js')
var program = require('commander')

program
  .version('0.0.0')
  .option('-b, --brackets', 'brackets preperation')
  .option('-d, --doubleQuotes', 'double quote preperation')
  .option('-s, --save', 'save results to file')

program
  .command('queryprep <file>')
  .action((file) => {

    if (program.brackets) {
      if (program.save) {
        queryPreperator(file, 'brackets', true, function (err, data) {
          if (err) throw err
          console.log(data)
        })
      }
        else {
          queryPreperator(file, 'brackets', false, function (err, data) {
            if (err) throw err
            console.log(data)
          })
        }
      }

    else if (program.doubleQuotes) {
      if (program.save) {
        queryPreperator(file, 'double quotes', true, function (err, data) {
          if (err) throw err
          console.log(data)
        })
      }
      else {
        queryPreperator(file, 'double quotes', false, function (err, data) {
          if (err) throw err
          console.log(data)
        })
      }
    }

  })

program.parse(process.argv)

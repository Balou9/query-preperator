# query-preperator

[![build status](http://img.shields.io/travis/Balou9/query-preperator.svg?style=flat)](http://travis-ci.org/Balou9/query-preperator) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/query-preperator?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/query-preperator) [![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](./security.md)

***

Select a wrapper for list of items in a file

***

## Get it!

Cli

```
npm install -g query-preperator
```

module

```
npm install --save query-preperator

```

***

## Usage CLI

```
queryprep -b -d -s <file>
```

options:   
-b preps query with brackets  
-d preps query with double qoutes  
-s saves prepped query to file

## Usage API

``` js
var queryPreperator = require('queryPreperator')
var file = process.argv[2] || './some.txt'

queryPreperator(file, 'brackets', false, function (err, data) {
  if (err) throw err
  console.log(data)
})
```

***

## API

### `queryPreperator(file, type, save, cb)`

file: path to file  
type: 'brackets', 'double quotes'  
save: logical save results to file, if false the result will be logged to the console  
cb: error first callback  

***

## License

[MIT](./license.md)

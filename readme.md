# query-preperator

[![build status](http://img.shields.io/travis/Balou9/query-preperator.svg?style=flat)](http://travis-ci.org/Balou9/query-preperator) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/query-preperator?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/query-preperator) [![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](./security.md)

***

query-preperator

***

## Get it!

```
npm install --save-dev query-preperator
```

***

## Usage

``` js
var queryPreperator = require('queryPreperator')
var file = process.argv[2] || './some.txt'

queryPreperator(file, 'brackets', function (err, data) {
  if (err) throw err
  console.log(data)
})
```

***

## API

### `query-preperator(file, opts, cb)`

file: path to file
opts: 'brackets', 'quotation_double'
cb: error first callbacks

***

## License

[MIT](./license.md)

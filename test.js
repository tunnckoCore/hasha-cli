/*!
 * hasha-cli <https://github.com/tunnckoCore/hasha-cli>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var cmd = require('async-exec-cmd')
var test = require('assertit')

test('hasha-cli', function (done) {
  cmd('node ./cli.js unicorn', function (err, res) {
    test.ifError(err)
    test.equal(res.length, 128)
    done()
  })
})


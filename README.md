# [hasha-cli][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Hashing made simple. CLI for [hasha](https://github.com/sindresorhus/hasha) module. You also can use it as `hasha`.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![cov status][cov-img]][cov-url] [![dependency status][david-img]][david-url]


## Install
```
npm i hasha-cli --save
npm test
```

## API
> For more use-cases see the [tests](./test.js). You also can use it as `hasha`.

```js
var hashaCli = require('hasha-cli')

hashaCli('unicorn')
//=> 'e233b19aabc7d5e53826fb734d1222f1f0444c3a3fc67ff4af370a66e7cadd2cb24009f1bc86f0bed12ca5fcb226145ad10fc5f650f6ef0959f8aadc5a594b27'
```


## CLI
> Just run `npm i -g hasha-cli` to install it globally.

```
$ hasha --help

  Usage
    $ hasha <text>
    $ cat <file> | hasha

  Example
    $ hasha unicorn --algorithm=md5
    1abcb33beeb811dca15f0ac3e47b88d9

  Options
    --algorithm  Cipher algorithm: md5,sha1,sha256,sha512   Default: sha512s
    --encoding   Output encoding: hex,base64,buffer,binary  Default: hex

```


## Related
- [Hasha: A Friendly Crypto API • DailyJS](http://dailyjs.com/2015/06/12/hasha-a-friendly-crypto-api/)
- [hasha](https://github.com/sindresorhus/hasha): Hashing made simple. Get the hash of a buffer/string/stream/file.
- [hash-obj](https://github.com/sindresorhus/hash-obj): Get the hash of an object


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/hasha-cli/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/hasha-cli
[npmjs-img]: https://img.shields.io/npm/v/hasha-cli.svg?label=hasha-cli

[license-url]: https://github.com/tunnckoCore/hasha-cli/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/hasha-cli
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/hasha-cli.svg

[travis-url]: https://travis-ci.org/tunnckoCore/hasha-cli
[travis-img]: https://img.shields.io/travis/tunnckoCore/hasha-cli.svg

[cov-url]: https://codeclimate.com/github/tunnckoCore/hasha-cli
[cov-img]: https://img.shields.io/codeclimate/coverage/github/tunnckoCore/hasha-cli.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/hasha-cli
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/hasha-cli.svg

[david-url]: https://david-dm.org/tunnckoCore/hasha-cli
[david-img]: https://img.shields.io/david/tunnckoCore/hasha-cli.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg

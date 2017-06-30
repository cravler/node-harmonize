# node-harmonize

This package depends on [harmonize](https://www.npmjs.com/package/harmonize).

## Install

```sh
$ npm install -g node-harmonize
```

## Usage

```sh
$ node-harmonize index.js
```

### Configuration

`node-harmonize` try to find `harmonize` config in `current work dir/package.json`, else in `~/.node-harmonize`

Default config:
```json
{
    "harmonize": {
        "flags": [
            "harmony"
        ]
    }
}
```

## Programmatic Usage

```sh
require('node-harmonize').bin('index.js', {
    "flags": [
        "harmony"
    ]
});
```

## License

This software is under the MIT license. See the complete license in:

```
LICENSE
```

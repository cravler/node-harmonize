'use strict';

var path = require('path');

module.exports = harmonize;

/**
 * @param flags
 */
function harmonize (flags) {
    require('harmonize')(flags || ['harmony']);
}

/**
 * @param dir
 * @returns Object
 */
harmonize.config = function config (dir) {
    dir = dir || process.cwd();

    var pkg = {};
    try {
        pkg = require(path.join(dir, 'package.json'));
    } catch(e) {}

    var base = {};
    try {
        base = require(path.join(process.env.HOME, '.node-harmonize', 'package.json'));
    } catch(e) {}

    return pkg['harmonize'] || base['harmonize'] || {};
};

/**
 * @param file
 * @param config
 */
harmonize.bin = function bin (file, config) {
    config = config || {};

    process.argv.splice(1, 1);
    if (file) {
        process.argv.splice(1, 0, file);
    }

    harmonize(config['flags']);
};

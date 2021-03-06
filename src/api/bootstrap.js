'use strict'

const promisify = require('promisify-es6')

module.exports = (send) => {
  return {
    add: promisify((args, opts, callback) => {
      if (typeof opts === 'function' &&
          !callback) {
        callback = opts
        opts = {}
      }

      // opts is the real callback --
      // 'callback' is being injected by promisify
      if (typeof opts === 'function' &&
          typeof callback === 'function') {
        callback = opts
        opts = {}
      }

      if (args && typeof args === 'object') {
        opts = args
        args = undefined
      }

      send({
        path: 'bootstrap/add',
        args: args,
        qs: opts
      }, callback)
    }),
    rm: promisify((args, opts, callback) => {
      if (typeof opts === 'function' &&
          !callback) {
        callback = opts
        opts = {}
      }

      // opts is the real callback --
      // 'callback' is being injected by promisify
      if (typeof opts === 'function' &&
          typeof callback === 'function') {
        callback = opts
        opts = {}
      }

      if (args && typeof args === 'object') {
        opts = args
        args = undefined
      }

      send({
        path: 'bootstrap/rm',
        args: args,
        qs: opts
      }, callback)
    }),
    list: promisify((opts, callback) => {
      if (typeof (opts) === 'function') {
        callback = opts
        opts = {}
      }
      send({
        path: 'bootstrap/list',
        qs: opts
      }, callback)
    })
  }
}

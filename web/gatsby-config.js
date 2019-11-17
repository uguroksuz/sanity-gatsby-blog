// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: 'skMpfadK1zVx3GvPSY6drIqQU30JnmxjpLSLLTpGp7YN2Aj9JlMmElqrDfQtL4cBqM870oaDbYZbN5AFghXD9q2vkcj2wdwVd2H1RAD4glG7Tqtn4cXrdoBV230jFFsjshieJ7NGIRGxs0laj2QTR2YQiJsrgG62DxTPuG2hoWm2KBPhjLZy',
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    }
  ]
}

const express = require('express')
const path = require('path')

/*
Serves raw script content
These should already have the appropriate metadata.
*/
// https://codeburst.io/using-mongoose-validation-with-async-await-c3a9255459e1
const Example = () => {
  const router = new express.Router()
  router.use('/test', (req, res) => res.json({ passed: true }))
  return router
}
// Example: http://localhost:3000/api/v1/scripts/official/get-inline-values.js

module.exports = Example

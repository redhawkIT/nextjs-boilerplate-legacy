const fs = require('fs')
const frontMatter = require('front-matter')

const getMarkdown = (filename) => {
  const markdown = fs.readFileSync('./content/test.md', 'utf8')
  console.log('getMarkdown', filename, markdown)
  return frontMatter(markdown)
}

module.exports = { getMarkdown }

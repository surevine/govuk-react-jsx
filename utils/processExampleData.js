import deepIterator from 'deep-iterator'
import ReactHtmlParser from 'react-html-parser'

function htmlToJsx(data) {
  for (let { parent, value, key } of deepIterator(data, { onlyLeaves: true })) {
    if (key === 'html') {
      parent[key] = ReactHtmlParser(value)
    }
  }
  return data
}

export default function processExampleData(data) {
  const children = []

  data = htmlToJsx(data)

  return [data, children]
}

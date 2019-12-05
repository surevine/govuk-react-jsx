import React from 'react'
import ReactDOM from 'react-dom/server'
import { BrowserRouter } from 'react-router-dom'
import nunjucks from 'nunjucks'
import ent from 'ent'
import prettyhtml from '@starptech/prettyhtml'
import { HtmlDiffer } from '@markedjs/html-differ'
import processExampleData from '../../utils/processExampleData'

const withRouter = function(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <WrappedComponent {...this.props} />
        </BrowserRouter>
      )
    }
  }
}

const htmlDiffer = new HtmlDiffer({
  ignoreAttributes: [
    'disabled', // Because React sets disabled as an empty attribute but the nunjucks does not
    'src' // Because paths to images aren't something that need to be the same between react and nunjucks
  ],
  ignoreSelfClosingSlash: true
})

function cleanHtml(dirtyHtml) {
  return prettyhtml(ent.decode(dirtyHtml), {
    sortAttributes: true
  }).contents
}

export function diffComponentAgainstReferenceNunjucks(
  name,
  component,
  examples
) {
  describe(name, () => {
    examples.examples.forEach(example => {
      describe(`${example.name}`, () => {
        it('React output matches Nunjucks output', done => {
          const expected = cleanHtml(
            nunjucks.render(
              require.resolve(
                `govuk-frontend/govuk/components/${name}/template.njk`
              ),
              {
                params: example.data
              }
            )
          )

          var actual = cleanHtml(
            ReactDOM.renderToStaticMarkup(
              React.createElement(
                withRouter(component),
                processExampleData(example.data)
              )
            )
          )

          // Make the actual comparison
          htmlDiffer.isEqual(actual, expected).then(comparison => {
            // If the comparison is false, then compare the strings so
            // that the person can eyeball the diff
            if (!comparison) {
              // console.log('------------------------------------------')
              // console.log(htmlDiffer.diffHtml(expected, actual))
              expect(actual).toBe(expected)
            }

            expect(comparison).toBe(true)

            done()
          })
        })
      })
    })
  })
}


import * as codemirror from './y-codemirror.test.js'

import { runTests } from 'rdlib0/testing'
import { isBrowser, isNode } from 'rdlib0/environment'
import * as log from 'rdlib0/logging'

if (isBrowser) {
  log.createVConsole(document.body)
}
runTests({
  codemirror
}).then(success => {
  /* istanbul ignore next */
  if (isNode) {
    process.exit(success ? 0 : 1)
  }
})

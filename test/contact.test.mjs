import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const contactPageUrl = new URL('../contact.html', import.meta.url)

test('contact page offers the designated email address without a submission form', async () => {
  const page = await readFile(contactPageUrl, 'utf8')

  assert.match(page, /href="mailto:franek@lubiczdop\.com"/)
  assert.doesNotMatch(page, /<form\b/i)
  assert.doesNotMatch(page, /formsubmit\.co/i)
})

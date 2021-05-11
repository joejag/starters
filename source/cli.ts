#!/usr/bin/env node

import fs from 'fs-extra'
import path from 'path'

import { createStarter, noLanguageSpecified, unknownLanguage } from './ui'
import KNOWN_LANGUAGES from './supported'

const language = process.argv.slice(2)[0]

if (language === undefined) {
  noLanguageSpecified()
} else if (KNOWN_LANGUAGES.indexOf(language) === -1) {
  unknownLanguage({ language })
} else {
  const source = path.resolve(__dirname, '..', 'available', language)
  const cwd = process.cwd()
  const destination =
    fs.readdirSync(cwd).length === 0 ? cwd : `${cwd}/${language}_project`

  createStarter({
    language,
    source,
    destination,
  })
}

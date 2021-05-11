#!/usr/bin/env node

import path from 'path'

import {
  createFailed,
  createComplete,
  noLanguageSpecified,
  unknownLanguage,
} from './ui'
import { copyFolderSync, isEmpty } from './fs'

import KNOWN_LANGUAGES from './supported'

const language = process.argv.slice(2)[0]

if (language === undefined) {
  noLanguageSpecified()
} else if (KNOWN_LANGUAGES.indexOf(language) === -1) {
  unknownLanguage({ language })
} else {
  const source = path.resolve(__dirname, '..', 'available', language)
  const cwd = process.cwd()
  const destination = isEmpty(cwd) ? cwd : `${cwd}/${language}_project`

  try {
    copyFolderSync(source, destination)
    createComplete({ language, destination })
  } catch (err) {
    createFailed({ destination, err })
  }
}

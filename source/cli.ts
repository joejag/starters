#!/usr/bin/env node

import path from 'path'

import {
  createFailed,
  createComplete,
  noLanguageSpecified,
  unknownLanguage,
} from './ui'
import { copyFolderSync, isEmpty } from './fs'

import KNOWN_LANGUAGES, { ALIAS } from './supported'

let language = process.argv.slice(2)[0]

if (language === undefined) {
  noLanguageSpecified()
  process.exit(1)
}

// check for alias
Object.keys(ALIAS).forEach((alias: string) => {
  const aka = ALIAS[alias]
  if (aka.indexOf(language) !== -1) {
    language = alias
  }
})

if (KNOWN_LANGUAGES.indexOf(language) === -1) {
  unknownLanguage({ language })
  process.exit(2)
}

const source = path.resolve(__dirname, '..', 'available', language)
const cwd = process.cwd()
const destination = isEmpty(cwd) ? cwd : `${cwd}/${language}_project`

try {
  copyFolderSync(source, destination)
  createComplete({ language, destination })
} catch (err) {
  createFailed({ destination, err })
}

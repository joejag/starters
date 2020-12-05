#!/usr/bin/env node

import React from "react"
import { render } from "ink"
import fs from "fs-extra"
import path from "path"

import { CreateStarter, NoLanguageSpecified, UnknownLanguage } from "./ui"
import KNOWN_LANGUAGES from "./supported"

const language = process.argv.slice(2)[0]

if (language === undefined) {
  render(<NoLanguageSpecified />)
} else if (KNOWN_LANGUAGES.indexOf(language) === -1) {
  render(<UnknownLanguage language={language} />)
} else {
  const source = path.resolve(__dirname, "..", "available", language)
  const cwd = process.cwd()
  const destination = fs.readdirSync(cwd).length === 0 ? cwd : `${cwd}/${language}_project`
  render(<CreateStarter language={language} source={source} destination={destination} />)
}

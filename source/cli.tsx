#!/usr/bin/env node
/* eslint-disable no-tabs */

import React from 'react'
import { render } from 'ink'
import meow from 'meow'
import App from './ui'

const cli = meow(
  `
	Usage
	  $ starters <language>

	Examples
	  $ starters java
	  Java project created
`,
  {
  }
)

render(<App language={cli.input[0]} />)

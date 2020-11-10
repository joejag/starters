import React from 'react'
import chalk from 'chalk'
import { render } from 'ink-testing-library'
import App from './ui'

test('print out languages when nothing specified', () => {
  const { lastFrame } = render(<App />)

  expect(lastFrame()).toContain(chalk`Please choose a language to create a starter for.`)
  expect(lastFrame()).toContain(chalk`java`)
})

test('print out error on unknown language', () => {
  const { lastFrame } = render(<App language='unknownthing' />)

  expect(lastFrame()).toContain(chalk`Sorry, {red unknownthing} is not supported.`)
  expect(lastFrame()).toContain(chalk`java`)
})

test.todo('can generate a node project')

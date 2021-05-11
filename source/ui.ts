import KNOWN_LANGUAGES from './supported'

// Font colour options: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

export const noLanguageSpecified = (): void => {
  console.log(
    '\x1b[37m\x1b[44m %s \x1b[0m %s',
    'STARTERS',
    'Please choose a language to create a starter for.'
  )
  console.log('')
  console.log('You can choose from:')
  KNOWN_LANGUAGES.forEach((l) => {
    console.log(` * ${l}`)
  })
}

export const unknownLanguage = ({ language }): void => {
  console.log(
    '\x1b[37m\x1b[41m %s \x1b[0m %s\x1b[31m %s\x1b[0m %s',
    'STARTERS',
    'Sorry,',
    language,
    'is not supported.'
  )
  console.log('')
  console.log('You can choose from:')
  KNOWN_LANGUAGES.forEach((l) => {
    console.log(` * ${l}`)
  })
}

export const createFailed = ({ destination, err }): void => {
  console.log(
    '\x1b[37m\x1b[41m %s \x1b[0m %s\x1b[31m %s\x1b[0m',
    'STARTERS',
    'Something went wrong copying to',
    destination
  )
  console.error(err)
}

export const createComplete = ({ destination, language }): void => {
  console.log(
    '\x1b[42m\x1b[30m %s \x1b[0m %s\x1b[33m %s\x1b[0m %s \x1b[33m%s\x1b[0m',
    'STARTERS',
    'Copied new',
    language,
    'project to',
    destination
  )
}

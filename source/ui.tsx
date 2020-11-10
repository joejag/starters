import React, { FC, useState, useEffect } from 'react'
import { Box, Text } from 'ink'
import fs from 'fs-extra'
import path from 'path'

const KNOWN_LANGUAGES = [
  'cplusplus',
  'csharp',
  'go',
  'haskell',
  'java',
  'java-mvn',
  'node',
  'python',
  'react',
  'ruby',
  'scala',
  'ts'
]

const Logo: FC<{}> = () => (
  <Text color='white' backgroundColor='blue'> STARTERS </Text>
)

const App: FC<{language?: string}> = ({ language }) => {
  const [status, setStatus] = useState({ done: false, error: null })

  if (language === undefined) {
    return (
      <>
        <Box>
          <Logo />
          <Text> Please choose a language to create a starter for.</Text>
        </Box>
        <Box flexDirection='column'>
          <Text>&nbsp;</Text>
          <Text>You can choose from:</Text>
          {KNOWN_LANGUAGES.map((l) =>
            <Text key={l}> * {l}</Text>
          )}
        </Box>
      </>
    )
  }

  if (KNOWN_LANGUAGES.indexOf(language) === -1) {
    return (
      <>
        <Box>
          <Logo />
          <Text> Sorry, <Text color='red'>{language}</Text> is not supported.</Text>
        </Box>
        <Box flexDirection='column'>
          <Text>&nbsp;</Text>
          <Text>You can choose from:</Text>
          {KNOWN_LANGUAGES.map((l) =>
            <Text key={l}> * {l}</Text>
          )}
        </Box>
      </>
    )
  }

  const source = path.resolve(__dirname, '..', 'available', language)
  const destination = `${process.cwd()}/${language}_project`

  useEffect(() => {
    fs.copy(source, destination, (err: Error) => {
      if (err) {
        setStatus({ done: false, error: err })
        console.error(err)
      } else {
        setStatus({ done: true, error: null })
      }
    })
  }, [source, language])

  return (
    <Box>
      <Logo /><Text>&nbsp;</Text>
      {!status.done && !status.error && <Text>Copying <Text color='yellow'>{language}</Text> project</Text>}
      {status.error && <Text>Something went wrong copying to <Text color='red'>{destination}</Text></Text>}
      {status.done &&
        <Text>Copied new <Text color='yellow'>{language}</Text> project to <Text color='green'>{destination}</Text></Text>}
    </Box>
  )
}

export default App

import React, { FC, useState, useEffect } from 'react'
import { Box, Text } from 'ink'
import fs from 'fs-extra'
import path from 'path'

const KNOWN_LANGUAGES = [
  'cplusplus',
  'csharp',
  'go',
  'java',
  'node',
  'python',
  'ruby',
  'scala',
  'ts'
]

const Logo: FC<{fgColor?: string, bgColor: string}> = ({ fgColor = 'white', bgColor }) => (
  <Text color={fgColor} backgroundColor={bgColor}> STARTERS </Text>
)

const App: FC<{language?: string}> = ({ language }) => {
  const [status, setStatus] = useState({ done: false, error: null })

  if (language === undefined) {
    return (
      <>
        <Box>
          <Logo bgColor='blue' />
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
          <Logo bgColor='red' />
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
    <>
      {!status.done && !status.error &&
        <Box>
          <Logo bgColor='blue' /><Text> Copying <Text color='yellow'>{language}</Text> project</Text>
        </Box>}
      {status.error &&
        <Box>
          <Logo bgColor='red' /><Text> Something went wrong copying to <Text color='red'>{destination}</Text></Text>
        </Box>}
      {status.done &&
        <Box>
          <Logo fgColor='black' bgColor='green' /><Text> Copied new <Text color='yellow'>{language}</Text> project to <Text color='green'>{destination}</Text></Text>
        </Box>}
    </>
  )
}

export default App

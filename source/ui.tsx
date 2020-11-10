import React, { FC, useState, useEffect } from 'react'
import { Box, Text } from 'ink'
import fs from 'fs-extra'

const Logo: FC<{}> = () => (
  <Text color='white' backgroundColor='blue'> STARTERS </Text>
)

const App: FC<{language?: string}> = ({ language = 'node' }) => {
  const [status, setStatus] = useState({ done: false, error: null })

  const source = `available/${language}`
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

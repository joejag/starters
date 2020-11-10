import React, { FC } from 'react'
import { Text } from 'ink'
import fs from 'fs-extra'

const App: FC<{language?: string}> = ({ language = 'node' }) => {
  const source = `available/${language}`
  const destination = `${process.cwd()}/${language}_project`

  fs.copy(source, destination, function (err) {
    if (err) {
      console.log('An error occured while copying the folder.')
      return console.error(err)
    }
    console.log('Copy completed!')
  })

  return (
    <Text>
      Hello, <Text color='green'>{destination}</Text>
    </Text>
  )
}

export default App

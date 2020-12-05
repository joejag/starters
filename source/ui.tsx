import React, { FC, useState, useEffect } from "react"
import { Box, Text } from "ink"
import fs from "fs-extra"
import KNOWN_LANGUAGES from "./supported"

const Logo: FC<{ fgColor?: string; bgColor: string }> = ({ fgColor = "white", bgColor }) => (
  <Text color={fgColor} backgroundColor={bgColor}>
    {" "}
    STARTERS{" "}
  </Text>
)

export const NoLanguageSpecified: FC<{}> = () => {
  return (
    <>
      <Box>
        <Logo bgColor="blue" />
        <Text> Please choose a language to create a starter for.</Text>
      </Box>
      <Box flexDirection="column">
        <Text>&nbsp;</Text>
        <Text>You can choose from:</Text>
        {KNOWN_LANGUAGES.map((l) => (
          <Text key={l}> * {l}</Text>
        ))}
      </Box>
    </>
  )
}

export const UnknownLanguage: FC<{ language: string }> = ({ language }) => {
  return (
    <>
      <Box>
        <Logo bgColor="red" />
        <Text>
          {" "}
          Sorry, <Text color="red">{language}</Text> is not supported.
        </Text>
      </Box>
      <Box flexDirection="column">
        <Text>&nbsp;</Text>
        <Text>You can choose from:</Text>
        {KNOWN_LANGUAGES.map((l) => (
          <Text key={l}> * {l}</Text>
        ))}
      </Box>
    </>
  )
}

export const CreateStarter: FC<{ language: string; destination: string; source: string }> = ({
  language,
  destination,
  source,
}) => {
  const [status, setStatus] = useState({ done: false, error: null })

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
      {!status.done && !status.error && (
        <Box>
          <Logo fgColor="black" bgColor="yellow" />
          <Text>
            {" "}
            Copying <Text color="yellow">{language}</Text> project
          </Text>
        </Box>
      )}
      {status.error && (
        <Box>
          <Logo bgColor="red" />
          <Text>
            {" "}
            Something went wrong copying to <Text color="red">{destination}</Text>
          </Text>
        </Box>
      )}
      {status.done && (
        <Box>
          <Logo fgColor="black" bgColor="green" />
          <Text>
            {" "}
            Copied new <Text color="yellow">{language}</Text> project to <Text color="green">{destination}</Text>
          </Text>
        </Box>
      )}
    </>
  )
}

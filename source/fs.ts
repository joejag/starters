import path from 'path'
import fs from 'fs'

export const copyFolderSync = (from: string, to: string): void => {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to)
  }

  fs.readdirSync(from).forEach((element) => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element))
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element))
    }
  })
}

export const isEmpty = (dir: string): boolean => {
  return fs.readdirSync(dir).length === 0
}

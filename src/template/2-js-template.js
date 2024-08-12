
/**
 * This is a sample file to show how to use the template.
 * It will increase the version in package.json
 */

import fs from 'fs'
import path from 'path';


const packageJonsPath = './package.json';

const packageJsonString = fs.readFileSync(packageJonsPath, 'utf8')
const packageJson = JSON.parse(packageJsonString  )

const oldVersion = packageJson.version
const oldVersionArr = oldVersion.split('.')
const lastVersionIndex = oldVersionArr.length - 1
oldVersionArr[lastVersionIndex] = `${parseInt(oldVersionArr[lastVersionIndex], 10) + 1}`
const newVersion = oldVersionArr.join('.')
packageJson.version = newVersion
fs.writeFileSync('./out/sample/package.json', JSON.stringify(packageJson, null, 2))


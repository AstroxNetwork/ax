import * as fs from 'fs'
import path from 'path'
import * as child_process from 'child_process'
import util from 'util'
const exec = util.promisify(child_process.exec)
const dirname = path.resolve()
const runBuildJs = async function () {
  try {
    await exec(`rm -rf dist && rollup -c`, { cwd: dirname })
  } catch (err) {
    console.log(err)
  }
}

const runBuildDart = async function () {
  console.log('buildJs start')
  runBuildJs()
  console.log('buildJs end')
  const file = fs.readFileSync(path.resolve(`${dirname}/dist/index.js`), 'utf-8')
  fs.writeFile(
    path.resolve(`${dirname}/jsString.dart`),
    `const jsString = '''\n ${file} \n ''';`,
    'utf-8',
    (err) => {
      if (err) throw err
      console.log('build dart successfully')
    }
  )
}

runBuildDart()

import shell from 'shelljs'
import chalk from 'chalk'

const COMMAND_CLR = "rm -rf ./dist"
const COMMAND_BUILD = "qmake & make"
const COMMAND_EXEC = "./dist/cppBoot"

const bar = (msg) => {
  console.log(chalk.red('---------------------- ' + msg + ' ----------------------------'))
}

const info = (msg) => {
  console.log(chalk.yellow(msg))
}


bar('clean')
shell.exec(COMMAND_CLR)
info('clean complete')
bar('build')
shell.exec(COMMAND_BUILD)
info('build complete')
bar('exec')
shell.exec(COMMAND_EXEC)


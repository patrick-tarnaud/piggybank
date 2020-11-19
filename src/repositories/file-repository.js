import { promises as fsp } from 'fs'

const fileRepositoryName = './pb-data-accounts.json'

/**
 * Save state to json file
 *
 * @param {object} state
 * @returns {Promise} Promise
 */
const save = state => {
  return fsp.writeFile(fileRepositoryName, JSON.stringify(state.accounts), 'utf8')
}

/**
 * Load data from json file
 *
 * @returns {Promise} Promise
 */
const load = async () => {
  let json = await fsp.readFile(fileRepositoryName, 'utf8')
  return JSON.parse(json, jsonDateParser)
}

/**
 * JSON date parser
 *
 * @param {string} key
 * @param {*} value
 */
const jsonDateParser = (key, value) => {
  const reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.{0,1}\d*))(?:Z|(\+|-)([\d|:]*))?$/
  let parsedValue = value
  if (typeof value === 'string' && value.match(reISO)) {
    parsedValue = new Date(value)
  }
  return parsedValue
}

export { save, load }

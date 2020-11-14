import banking from 'banking'

const importOfxFile = filename => {
    banking.parseFile(filename, data => {
      console.log(data)
    })
}

export { importOfxFile }

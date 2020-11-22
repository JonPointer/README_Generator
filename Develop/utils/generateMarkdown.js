// function to generate markdown for README
const fs = require('fs');

const writeData = (data) => {
  // Write the data
  fs.writeFile('test.txt', `Your name is ${data.name}`
    , err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })
    ;
}

module.exports = writeData;


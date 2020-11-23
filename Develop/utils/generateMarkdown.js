// function to generate markdown for README
const fs = require('fs');

const writeData = (data) => {

  // Set the license badge graphic path
  const badgePath = "![License Badge](https://img.shields.io/badge/License-" + data.license + "-blue)";

  // Set the license description link dependant on the license chosen
  switch (data.license) {
    case "GNU_AGPLv3":
      licensePath = "https://choosealicense.com/licenses/agpl-3.0/";
      break;
    case "GNU_GPLv3":
      licensePath = "https://choosealicense.com/licenses/gpl-3.0/";
      break;
    case "GNU_LGPLv3":
      licensePath = "https://choosealicense.com/licenses/lgpl-3.0/";
      break;
    case "Mozilla_Public_License_2.0":
      licensePath = "https://choosealicense.com/licenses/mpl-2.0/";
      break;
    case "Apache_License_2.0":
      licensePath = "https://choosealicense.com/licenses/apache-2.0/";
      break;
    case "MIT_License":
      licensePath = "https://choosealicense.com/licenses/mit/";
      break;
    case "Boost_Software_License_1.0":
      licensePath = "https://choosealicense.com/licenses/bsl-1.0/";
      break;
    case "The_Unlicense":
      licensePath = "https://choosealicense.com/licenses/unlicense/";
      break;
    default:
      licensePath = "https://choosealicense.com/licenses/";
      break;
  }

  // Set the path to the screenshot if provided

  let screenPath = "";
  if (data.screen != "") {
    screenPath = "![Screenshot](" + data.screen + ")";
  } else {
    screenPath = "No Screenshot"
  }

  // Write the data to the README file
  fs.writeFile('README.md',
    `${badgePath}\n# ${data.title}\n## Description\n${data.description}\n## Table of Contents\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Tests](#tests)\n- [License](#license)\n- [Questions](#questions)\n- [Screenshot](#screenshot)\n## Installation\n${data.installation}\n## Usage\n${data.usage}\n## Contributing\n${data.contribution}\n## Tests\n${data.test}\n## License\n${data.license}\n\nFor information on this license, please follow [this link](${licensePath})\n## Questions\nContact the author with questions via GitHub or email at\n\n[${data.username} at GitHub](https://github.com/${data.username})<br>${data.email}\n## Screenshot\n${screenPath}`
    , err => {
      if (err) {
        console.error(err)
        return
      }
      //file written successfully
    })
    ;
}

module.exports = { writeData };


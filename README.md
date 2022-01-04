# Employee Tracker
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/jl118/employee-tracker?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/jl118/employee-tracker?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  
  ## Description 
  
  This is a command-line application that allows the user to keep track of employees using a MySQL database comprised of three tables containing the departments, roles, and employees. This makes it simple to add, edit, and update the tables.
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Preview](#preview)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  
  *Steps required to install project:*
  
  Clone the repo to your machine and open a terminal, then use `npm i` to install the required dependencies.
  
  ## Usage 
  
  Once the dependencies are installed, you will need to use MySQL in the terminal with the command `mysql -u root -p` and then enter your mysql password. Then you will have to run the schema.sql file using the command `source schema.sql`. After you set up the tables using the schema file, you can either use the provided seed data to populate the table, or create your own data. If you are using the provided seed data, you will need to run `source seeds.sql` and update the password in the `config/connect` file to your mysql password. Finally, you can return to your terminal and run `node server.js` to start the program and run through the options.

  ## Preview

  Link to a preview of the application [here](https://drive.google.com/file/d/1BtheJe57lwV57yP7tzJ_uYpxte52RZkl/view).
    
  ## License
 
  This project is under the MIT license.
  
  ---
  
  ## Questions?
  
  If you have any questions or would like to contribute, please contact me here:
 
  GitHub: [@jl118](https://api.github.com/users/jl118)
  
  Email: jen.liebelt@gmail.com
  
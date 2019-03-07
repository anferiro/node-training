# Third party modules

When you install node you also install NPM (Node Package Manager)

With NPM you can instal third party modules that you can use in your program. 

The first thing that we need to do is to type the following command in order to generate the package.json file in the project who has the information related with the project and also the external dependencies used by the program 

```bash
# You are going to need to be located in the project folder in order to execute this command
npm init
```

In order to install a third party module we use the npm command as follows

```
npm install lodash
```

Once we install it, we can use it with require function 

```JavaScript
const _ = require('lodash');
_.isString('Hello World')
```

This is going to create a node_modules folder which is not necesary to change and distribute it in the project because the code that is in this folder is generated. 


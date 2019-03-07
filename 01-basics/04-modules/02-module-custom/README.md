# Custom module 

We can separate our logic in different files and export the content to other files. 

in order to do that we have to use module.exports in the file who contains the logic that we want to share and require in the file that needs to use it. 

## Example

1. Create a functionality who sum two values and call it add in a sum.js file. 
2. in the app.js file use this logic print its result. 
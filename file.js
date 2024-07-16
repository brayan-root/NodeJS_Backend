const fs = require('fs');
//writting files
fs.writeFile('./blog/blog.txt', 'Hello software engineers in progress we are moving slowly but sure',(err) =>{
    if (err) {
        console.log(err);
    }
     console.log('File has been sucessfully created');
}
);


// read files

fs.readFile('./blog/blog1.txt', (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
//delete files
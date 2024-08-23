const  http=require('http'); //import http
const fs=require('fs'); //import file system

const content = 'File Wrriten';

let obj={
  name:'Rida',
  email:'raorida.rr@gmail.com',
  city:'Rawalpindi',

}
let strData=JSON.stringify(obj)

fs.writeFile('example.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("File Wrriten Successfully")
  }
});
fs.appendFile("newFile.txt", strData, (err) => {
  if (err) {
      console.log(err);
  }
  else {
      // Get the file contents after the append operation 
      console.log("\nFile Contents of file after append:",
          fs.readFileSync("example.txt",'Utf8'));
  }
});
fs.readFile('newFile.txt','Utf8',(error,data)=>{
if(error){
    console.error("This is error in reading file: ",error)
    return;
}
else{
    console.log(data.toString());
}
})
 fs.rename('example.txt','newFile.txt',(err)=>{
  if(err){
    console.error(err);
  }

  else{
    console.log("File Renamed Successfully");
  }
 })
// fs.unlink('example.txt', (err) => {
//   if (err) {
//     console.error(`Error removing file: ${err}`);
//     return;
//   }

//   console.log(`File  has been successfully removed.`);
// });

const server=http.createServer((request,response)=>{
response.statusCode=200;
response.setHeader('Content-Type','text/plain');   //given content type to text
response.end('This is our first server');
})

server.listen(3000,'localhost',()=>{
    console.log('Server is running on port 3000');
})
// const express = require('express');
// const cors = require('cors');
// const bodyparser = require('body-parser');
// const mycon = require('mysql');
// const fileupload = require('express-fileupload');

// const app = express();
// app.use(cors());
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(fileupload());
// app.use(express.static('public'));

// const c = mycon.createConnection({
//     host : "localhost",
//     port : "3306",
//     user : "root",
//     password : "zxzx6786",
//     database : "crud_app"
// });

// c.connect(function(error){
//     if(error){console.log(error);}
//     else{console.log('Database Connected');}
// })


// app.post('/Entryform',(request,response)=>{
//     let {studentname}=request.body;

//  let sql='insert into cri(studentname) values (?)';
//     c.query(sql,[studentname],(error,result)=>{
//         // console.log(xx);
//         if(error){
//             console.log('error')
//             // let s = {"status":"error"};
//             response.send(error);
//         }
//         else{
//             console.log('success')
//             // let s = {"status":"Registered"};
//             response.send(result);
//         }
//     })
// })   
// app.get('/view',(request,response)=>{
  
//     let sql = 'select * from cri';
//     c.query(sql,[],(error,result)=>{
//         if(error){
//             response.send(error);
//         }
//         else{
//             response.send(result);
//         }
//     })
// })
// app.get('/update',(request,response)=>{
//     let sql='select * from cri';
//     c.query(sql,(error,result)=>{
//         if(error){
//             response.send(error)
//         }
//         else{
//             response.send(result)
//         }
//     })
// })
// app.put('/change',(request,response)=>{
//     let {name}=request.body
//     let f='jkjnl';
//     let sql='update cri set studentname=? where fathername=?';
//     c.query(sql,[name,f],(error,result)=>{
//         if(error){
//             console.log('error')
//             let s={'status':'error'}
//             response.send(s);

//         }
//         else{
//             let s={'status':'updated'}
//             console.log('updated')
//             response.send(s);
//         }
//     })
// })
// app.delete('/delete',(request,response)=>{
//     let name='jaihind'
//     let sql='delete from cri where studentname=?';
//     c.query(sql,[name],(error,result)=>{
//         if (error){
//             console.log('error')
//         }
//         else{
//             console.log('deleted')
//         }
//     })
// })
// app.listen(3006,()=>{
//     console.log('running in 3006')
// })



// const mysql=require('mysql');
// const express=require('express');
// const cors=require('cors');
// const bodyparser=require('body-parser');
// const fileupload=require('express-fileupload');
// const multer=require('multer');
// const path =require ('path');
// const { request } = require('http');

// const app=express();
// app.use(express());
// app.use(cors());
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(fileupload());

//     const db=mysql.createConnection({
//        local:'localhost',
//        port:'3306',
//        user:'root',
//        password:'zxzx6786',
//        database:'crud_app',
//     })

//     db.connect((error)=>{
//         if (error){
//             console.log('error')
//         }else{
//             console.log('databases connected')
//         }
//     })

//     const storage = multer.diskStorage({
//       destination: function (req, file, cb) {
//         cb(null, 'public/image');
//       },
//       filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//       }
//     });
    
//     const upload = multer({ storage: storage });
    
//     app.use(express.json());
    
//     app.post('/upload', upload.single('file'), (req, res) => {
//       if (!req.file) {
//         return res.status(400).send('No file uploaded.');
//       }
    
//       const filePath = req.file.path;
    
//       db.query('INSERT INTO img (file) VALUES (?)', [filePath], (error, result) => {
//         if (error) {
//           console.error('Error inserting into database:', error);
//           res.status(500).send('Internal Server Error');
//         } else {
//           console.log('File uploaded and database updated successfully.');
//           res.status(200).send('Success');
//         }
//       });
//     });
//     app.post('/create',(request,response)=>{
//         let {username,email,password}=request.body;
//         console.log(username,email,password)
//       db.query('select * from what where email=?',[email],(checkerr,checkres)=>{
//         if(checkerr){
//             console.log('err')
//         }else if(checkres.length>0){
//             console.log('email already in')
//         }
//         else{
//             let sql='insert into what(username,email,password) values(?,?,?)';
//             db.query(sql,[username,email,password],(error,result)=>{
//             if (error){
//                 console.log('error')
//                 let s={'status':'error'}
//                 response.send(s);
//             }else{
//                 console.log('posted')
//                   let s={'status':'success'}
//                   response.send(s);
//             }
//         })
//         }
//       })    
//     })

//     app.post('/login',(request,response)=>{
//       let {username,password}=request.body
//       db.query('select * from what where username=?',[username],(error,result)=>{
//              if(error){
//               console.log('error')
//              }
//              else if(result.length>0){
//               let username1=result[0].username
//               let password1=result[0].password

//               if(username1===username && password1===password){
//                 console.log('validated')
//               }else{
//                 console.log('invaild login')
//               }

//              }
//              else{
//               console.log('some error')
//              }
//       })
//     })
//    app.get('/view',(request,response)=>{
//     let sql='select * from what';
//     db.query(sql,[],(error,result)=>{
//         if (error){
//             response.send(error)
//         }else{
//             response.send(result)     
//         }
//     })
//    })
//    app.delete('/delete:id',(request,response)=>{
//     let {id}=request.params
//     let sql='delete from what where id=?';
//     db.query(sql,[id],(error,result)=>{
//         if (error){
//             response.send(error)
//         }else{
//             response.send(result)
//         }
//     })
//    })
//     app.get('/edit/:id',(request,response)=>{
//         let {id}=request.params;
//         console.log(id)
//         let sql='select * from what where id=?'
//         db.query(sql,[id],(error,result)=>{
//             if (error){
//                 response.send(error);
//             }
//             else{
//                 response.send(result)
//             }
//         })
//     })
//     app.put('/update/:id',(request,response)=>{
//         let {id}=request.params;
//         let {name}=request.body;
//         console.log(name)
//         db.query('update what set username=? where id=?',[name,id],(error,result)=>{
//                if (error){
//                 response.send(error)
//                }else{
//                 // response.send(s)
//                 console.log('updated')
//                }
//         })
//     })

//     app.post('/cri',(request,response)=>{
//       let {sex,domain}=request.body;
//       db.query('insert into domain(sex,course) values(?,?)',[sex,domain],(error,result)=>{
//         if (error){
//           console.log(error)
//         }else{
//           console.log('suceed')
//         }
//       })
//     })

//     app.post('/signup',(request,response)=>{
//       let {name,sname,lname,fname}=request.body;
//       db.query('insert into soda(name,fname,lname,sname) values(?,?,?,?)',[name,fname,lname,sname],(error,result)=>{

//         if (error){
//           console.log('error')
//         }else{
//           console.log('succc')
//         }
//       })

//     })
//     app.get('/sovi',(request,response)=>{
//       db.query('select * from soda',[],(error,result)=>{
//         if(error){
//           console.log('error')
//         }
//         else{
//           response.send(result);
//         }
//       })
//     })

//     app.listen(3006,()=>{
//             console.log('server in 3006')
    
//     })

const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const fileupload=require('express-fileupload')
const mysql=require('mysql')
const app=express();
app.use(bodyparser.urlencoded({extended:false}));
// app.use(fileupload());
app.use(express.static('public'));
app.use(cors)
app.use(bodyparser.json())
app.use(fileupload)

 const db=mysql.createConnection({
  host:'localhost',
  port:'3306',
  user:'root',
  password:'zxzx6786',
  database:'crud_app'
 })
 db.connect((error)=>{
  if (error){
    console.log('error')
  }else{
    console.log('db connected')
  }
 })




 app.listen(3006,()=>{
  console.log('server in 3006')
 })


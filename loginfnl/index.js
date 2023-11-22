import express from 'express';
import ejs from 'ejs';


const port = 3000;
const app = express();

var login = "admin"
var senha = "123"


app.post('/',(req,res)=>{
   if(req.body.password == senha && req.body.login == login){
       res.render('logado') 
   }

else{res.render('index');}
    
})

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log('servidor rodando!')
})
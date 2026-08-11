// import home from './pages/home.js';
// import login from './pages/login.js';
// import submit from './pages/submit.js';
// import express from 'express';

// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.get('/home', (req, res) => {
//     res.send(home());
// });

// app.get('/login', (req, res) => {
//     res.send(login());
// });

// app.post('/submit', (req, res) => {
//     console.log(req.body);
//     res.send(submit());
// });

// app.listen(3200, () => {
//     console.log('Server is running on http://localhost:3200');
// });

import express from 'express';
import path from 'path';
const app = express()
const abPath = path.resolve('view')
const publicPath = path.resolve('public')
//Css ko dikhane k liye
app.use(express.static(publicPath));

app.get("/", (req, resp) => {
    resp.sendFile(abPath+"/home.html")
})
app.get("/login", (req, resp) => {
  
    resp.sendFile(abPath+"/login.html")
})
app.get("/about", (req, resp) => {
    resp.sendFile(abPath+"/about.html")
})
app.use((req,resp)=>{
  resp.status(404).sendFile(abPath+"/404.html")
})
app.listen(3200)
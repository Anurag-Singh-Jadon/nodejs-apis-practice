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

app.get("/", (req, resp) => {
    const abPath = path.resolve('view/home.html')
    resp.sendFile(abPath)
})
app.get("/login", (req, resp) => {
    const abPath = path.resolve('view/login.html')
    resp.sendFile(abPath)
})
app.get("/about", (req, resp) => {
    const abPath = path.resolve('view/about.html')
    resp.sendFile(abPath)
})
app.listen(3200)
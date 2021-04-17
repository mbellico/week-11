const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log('Server Started')
})
var handleRegister = function (req, res) {
    console.log(req.body)
    const newUser = {
        name = req.body.name,
        email: req.body.email,
        password = req.body.password,
    };
    if(!newUser.name || !newUser.email || !newUser.password) {
        return res.status(400).json({message: 'Please provide name, email and password'});
    }else{
        return res.json({result:"Data successfully sent"});
    }
}
var handleLogin = function (req, res){
    console.log(req.body)
    const User = {
        email: req.body.email,
        password: req.body.password,
    };
    if (User.email && User.password){
        return res.json({result:'Data successfully sent!'});
    }else{
        return res.status(400).json({message;'User does not exist'});
    }
}
app.post('/register', handleRegister);
app.put('/login', handleLogin);
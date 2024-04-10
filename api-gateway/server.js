const express = require('express');
const gateway = require('fast-gateway');

const app = express();

const port = 9001;

app.use(express.json());

const checkAuth = (req, res,next) => {
  

    // console.log(req.headers)

    if(req.headers.token && req.headers.token !== ''){

        next()
    }else{

        // res.status(401).send({message:"Authentication failed"})

        res.send(`Authentication failed`)
    }

    // next();
}

const server = gateway({
    middlewares:[checkAuth],

    routes: [
        {

        prefix: 'order',
        target:'http://localhost:8081',
        hooks:{}
    },
    {

        prefix: 'payment',
        target:'http://localhost:8082',
        
        // middlewares:[checkAuth],
        methods: ['GET', 'POST', ],
        hooks:{}
    }
]

})

server.get('/mytesting',(req, res) => {


    res.status(200).send('yes you called api gateway')
})


server.start(port).then(() => {

    console.log('api gateway is running on 9001 port')
})

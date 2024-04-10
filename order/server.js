const express = require('express')

const app = express()

const port =8081;

app.use(express.json());


app.get('/order-list', (req, res) => {

    let response = {

        data: {

            items: [

                {

                    id:1 ,name:'order-1'
                },

                {

                    id:2 ,name:'order-2'
                },
                {

                    id:3 ,name:'order-3'
                },
                {

                    id:4 ,name:'order-4'
                },
                {

                    id:5 ,name:'order-5'
                },


                
            ]
        }
    }

    res.status(200).send(response)

})

app.listen(port,(req,res)=>{
    console.log('order service is listening on port' +port)
})
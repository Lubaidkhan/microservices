const express = require('express')

const app = express()

const port =8082;

app.use(express.json());


app.get('/payment-list', (req, res) => {

    let response = {

        data: {

            items: [

                {

                    id:1 ,name:'payment-1'
                },

                {

                    id:2 ,name:'payment-2'
                },
                {

                    id:3 ,name:'payment-3'
                },
                {

                    id:4 ,name:'payment-4'
                },
                {

                    id:5 ,name:'payment-5'
                },


                
            ]
        }
    }

    res.status(200).send(response)

})

app.listen(port,(req,res)=>{
    console.log('payment service is listening on port' +port)
})
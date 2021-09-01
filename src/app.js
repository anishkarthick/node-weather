const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,'../template/partials')

//setup handlebars engine and views path
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('',(req,res) =>{
   res.render('index',{
       title : 'Weather app',
       name  : 'Karthick'
   })

})

app.get('/about',(req,res) =>{
    res.render('about',{
        title :'About me',
        name  : 'Karthick'
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        helpText : 'This is some helpful text',
        title: 'Help',
        name :'Karthick'
    })
})


app.get('/weather',(req,res) =>{
    if(!req.query.address){
        return res.send({
            error : 'No address detected'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location }={}) => {
        if (error) {
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error) {
                return res.send({error})
            }
            //  console.log(location)
            //  console.log(forecastdata)
            res.send({
                forecast :forecastdata,
                location,
                address : req.query.address
            })
        })
    })






    
    // console.log(req.query.address)
    // res.send({
    //     forecast :'cloudy',
    //     place    :' kaniyakumari',
    //     address : req.query.address
    // })
})


app.get('/product',(req,res) =>{
    if(!req.query.search){
     return   res.send({
            error: 'please provide the search'
        })
    }
  console.log(req.query.search)
    res.send({
     product :[]
     
    })
      
})


app.get('/help/*',(re,res) =>{ 
    res.render('404',{
        title : '404',
        name : 'Karthick',
        errorMessage : 'help article not found'
    })
})

app.get('*',(req,res) =>{
    res.render('404',{
        title : '404',
        name : 'Karthick',
        errorMessage : 'Page not found'
    })
})


app.listen(3000,() =>{
    console.log('server is up on port 3000')
})




























// app.get('/help',(req,res) =>{
//     res.send([{
//         name : 'Anish',
//         age  : 23
//     },
// {
//     name : 'karthick',
//     age  : 24
// }])
// })

// app.get('/about',(req,res) =>{
//     res.send('<h2>About</h2>')
// })
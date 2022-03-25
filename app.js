const express = require("express");
let path = require('path')
const app = express();
const port = 80;


//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files

app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('/views', path.join(__dirname, './views')) // Set the views directory

// ENDPOINTS
app.get('/contact', (req, res)=>{
    const params = { }
  res.status(200).render('contact.pug', params);
})

app.get('/blog', (req, res)=>{
    const params = { }
  res.status(200).render('blog.pug', params);
})

app.get('/services', (req, res)=>{
    const params = { }
  res.status(200).render('services.pug', params);
})

app.get('/about', (req, res)=>{
    const params = { }
  res.status(200).render('about.pug', params);
})



app.get('/', (req, res)=>{
  const params = { }
 // res.status(200).render('demo.pug', params);

 res.status(200).render('home.pug', params);
})


//CONNECTION CREATED
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

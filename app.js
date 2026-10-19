require('dotenv').config();
const express = require('express');
const app = express();
const DB=require('./db/conn')
const Apply=require('./models/Apply')
const port = process.env.PORT || 8000;

DB()

const path = require('path');
const hbs = require('hbs');

const viewspath = path.join(__dirname, 'templates/views');
const partialspath = path.join(__dirname, 'templates/partials');

console.log(viewspath);
console.log(partialspath);

app.set('view engine', 'hbs');
app.set('views', viewspath);

hbs.registerPartials(partialspath);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const imagesPath = path.join(__dirname, 'images/logo.png');
console.log(imagesPath)

app.use('/images', express.static(imagesPath));

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.post('/contact', async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            city,
            state,
            experience,
            specialization,
            languages,
            consultationModes,
            availableHoursPerDay,
            aboutYourself,
            interviewAvailability
        } = req.body;

        const application = new Apply({
            fullName,
            email,
            phone,
            city,
            state,
            experience,
            specialization,
            languages,
            consultationModes,
            availableHoursPerDay,
            aboutYourself,
            interviewAvailability
        });

        await application.save();

        res.render('success');

    } catch (error) {
        console.error(error);

        res.render('failure');
    }
});

app.get('/consultation',(req,res)=>{
    res.render('consultation');
})


app.get('/about',(req,res)=>{
    res.render('about');
})



app.listen(port, () => {
    console.log(`Website is working on http://localhost:${port}`);
    console.log(`Website is working on http://localhost:${port}/images`);
    console.log(`Website is working on http://localhost:${port}/contact`);
    console.log(`Website is working on http://localhost:${port}/consultation`);
    console.log(`Website is working on http://localhost:${port}/about`);
})

// app.js fitxategia

let express = require('express');
let app = express();
const path = require('path');


//formularioak tratatzeko middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


let bezeroak = [
    {
    id: 1,
    izena: 'Ane',
    abizena: 'Uriarte',
    email: 'ane@ni.eus'
    },
    {
    id: 2,
    izena: 'Jon',
    abizena: 'Juanenea',
    email: 'jon@ni.eus'
    },
    {
    id: 3,
    izena: 'Oihane',
    abizena: 'Lete',
    email: 'oihane@ni.eus'
    },
]

app.get("/", function(req, res) {
    res.render('index', {
    'izenburua': 'EJS probatzen',
    'bezeroak': bezeroak
    })
});


app.post("/gehitu",function(req,res){
    let berria={
        id:bezeroak.length,
        izena:req.body.izena,
        abizena:req.body.abizena,
        email:req.body.email
    }
    bezeroak.push(berria)
    res.redirect("/")
});

app.post("/ezabatu", function(req,res){
    const id=parseInt(req.body.id)
    bezeroak=bezeroak.filter((bezero)=>bezero.id!==id);
    res.redirect("/")
});
  

app.listen( 3000, function() {
    console.log("Zerbitzaria 3000 portuan entzuten");
});


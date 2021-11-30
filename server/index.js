const port = process.env.PORT || 4000
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.use(express.static("client"));
app.get('/', (req, res) => {
  res.sendFile('/index.html')

})



 app.get("/api/honey", (req, res) => {
    const honey = ["Take out trash!",
             "Clean the storage building!",
             "Wash the windows outside.", "Clean the gutters.", "Trim the hedges", "Wash the dishes.", "Fix the cabinet door.", "Fill my car with gas."
    ];


    let randomIndex = Math.floor(Math.random() * honey.length);
    let randomHoney = honey[randomIndex];
  
    res.status(200).send(randomHoney);
    
  });

  app.post('/api/honey/', (req, res) => {
    let {meaning, message} = req.body;
    res.status(200).send(`Here's a message for you: ${message}, ${meaning}`);
  })

app.delete('/api/honey', (req, res) => {
    res.status(200).send(`Message deleted! You can refresh now.`);
 })

app.get('/api/honey/', (req, res) => {
	let {paramInput2} = req.body;
	res.status(200).send(`Great job honey! ${paramInput2}`);
  })




  app.listen(port, () => { console.log(`Listening on port ${port}`)
})
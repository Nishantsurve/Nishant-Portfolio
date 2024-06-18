const express = require("express");	
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port =5173;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://nishantsurve254:NSurve53@cluster0.jvczwfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;

// adding event listeners
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    	console.log("connected to mongodb db");
})

//schema
const messageSchema = new mongoose.Schema({
    name: String,
    email:String,
    message: String,
    created_at : {type: Date,default: Date.now}
});

//model creation 

const Message = mongoose.model('Message',messageSchema);	

app.post('/messages', (req,res)=>{
    const {name,email,message} = req.body;
    const newMessage = new Message({
        name,email,message
    });

    newMessage.save((err)=>{
       if(err){
          console.log(err);
          res.status(500).send('Server error');
       }
       else{
          res.status(200).send('Message sent');
       }
    });

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


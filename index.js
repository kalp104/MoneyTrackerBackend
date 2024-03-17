const express= require("express");
const app = express();
const cors = require( "cors" );

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const rout = require('./routes/routes');
app.use('/api', rout);

app.listen(PORT, () => {
    console.log(`app sabhi ka swagat hey on ${PORT}`);
});

const dbConnect = require('./database/database');
dbConnect();

app.get("/", (req,res) => {
    res.send(`<h1>hello ji</h1>`);
 })
 
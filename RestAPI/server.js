const KOA = require('koa');
const cors = require('@koa/cors');
const mongoose = require('mongoose');
const koaBodyparser = require('koa-bodyparser');
require('dotenv/config');

//Create KOA App
const app = new KOA();

//Middleware
app.use(cors());
app.use(koaBodyparser());

//set environmental variables
const PORT = 7000 || process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

//DB Connection
mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("Mongo DB Successfully connected...");
})
.catch((err)=>{
    console.log(err);
})

//routes configuration

const user = require('./routes/user.route');
app.use(user.routes()).use(user.allowedMethods());

//end

app.listen(PORT,()=>{
    console.log(`App is up and running on PORT ${PORT}`);
})
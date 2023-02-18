//DATABASE CONNECTION
require('dotenv').config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://abdullah:alvi@nftapp.f1csihq.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true //FALTU KI WARNING SE BACHNE K LIYE
}).then(() => {
    console.log("Connection Successful")
}).catch((e) => {
    console.log(e)
})
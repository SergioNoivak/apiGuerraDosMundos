import app from  './src/app.js'
import mongoose from 'mongoose'
import process from "process";

import 'dotenv/config.js'

mongoose.connect(process.env.STRING_CONEXAO_DB)
let db = mongoose.connection;

app.listen(3000,()=>{
    console.log("Servidor ligado")
})
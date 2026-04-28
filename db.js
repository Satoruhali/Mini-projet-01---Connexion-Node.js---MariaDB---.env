// TODO Étape 3 — importe dotenv et mysql2/promise, appelle dotenv.config(),
// exporte une fonction getPool() qui retourne mysql.createPool({ ... process.env ... })

import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

export function getPool(){
    return mysql.createPool({
    host: process.env.DB_HOST , 
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    user: process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME ,
    waitForConnections: true,
    connectionLimit: 5,
    });
}


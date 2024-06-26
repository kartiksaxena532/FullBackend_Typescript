import {config as conf } from 'dotenv'

conf();

const _config ={


    port : process.env.PORT,

    databaseUrl : process.env.MONGO_CONNECTION_STRING,
    env: process.env.N0DE_ENV,
    jwtSecret : process.env.JWT_SECRET,
    cloud_name: process.env.CLOUD_NAME, 
    api_key:  process.env.CLOUD_API_KEY, 
    api_secret:  process.env.CLOUD_API_SECRET
}

export const config = Object.freeze(_config);
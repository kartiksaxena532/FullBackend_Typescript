import {config as conf } from 'dotenv'

conf();

const _config ={


    port : process.env.PORT,

    apikey:""

}

export const config = Object.freeze(_config);
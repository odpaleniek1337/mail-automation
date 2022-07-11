'use strict';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import mailRoute from './routes/mailsRoute.js';

dotenv.config();

const isProd = process.env.PROJECTSTAGE === 'Production';
const port = process.env.PORT || 3000;

const app = express();

app.use(helmet({
    crossOriginEmbedderPolicy: isProd,
    contentSecurityPolicy: isProd,
}));
app.use(express.json());
app.use('/', mailRoute);

app.listen(port, () => {
    console.log('Hey, listening here');
});
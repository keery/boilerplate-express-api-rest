import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import logger from './logger';

dotenv.config();

const { PORT } = process.env;

const app = express();

app.set('port', PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.listen(PORT, () => {
    logger.info(`App listening on port ${PORT}!`);
});

import { config } from 'dotenv';
import logger from './helpers/logger.helper';
import app from './app';

config(); // This enables dotenv configulations


const port = process.env.PORT || 3000;
const server = app.listen(port, () => logger('info', `Server is running on http://localhost:${port}`));

export default app;

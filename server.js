const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const compression = require('compression');
const helmet = require('helmet');
const errorHandler = require('./middleware/errorhandler');
const userRoutes = require('./routes/userRoutes');
const limiter = require('./middleware/ratelimit');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(limiter);
app.use(compression());
app.use(helmet());

app.use('/api/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  logger.info(`Server is running on port ${PORT}`);
});

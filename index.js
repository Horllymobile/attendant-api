// All imported deps
require('dotenv').config();
const  express = require('express');
const debug = require('debug')('app:*');
const morgan = require('morgan');

// Database connection function
require('./configs/db')();

// add Routes
const userRoutes = require('./routes/user.routes');


const PORT = process.env.PORT || 3000;





const server = express();

if(process.env.NODE_ENV === 'development'){
    server.use(morgan('dev'));
}

// Using express json middleware
server.use(express.json());

// Using user routes middleware
server.use('/api',userRoutes);



server.listen(PORT, () => {
    debug(`Server started on localhost port ${PORT}`);
})
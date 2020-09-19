const  mongoose =  require('mongoose');
const debug = require('debug')('app:db.js');


module.exports = async () => {
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => debug('Connectedd to mongodb successfully'))
    .catch((error) => debug(error.message));
}
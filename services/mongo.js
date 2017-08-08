const mongoose = require('mongoose')
const config = {
    dbIp: '127.0.0.1',
    dbPort: 20217,
    dbUser: 'root',
    dbPass: 'root',
    db: 'order'
};
const bluebird = require('bluebird');

let uri;
if (config.dbUser == '') {
    uri = 'mongodb://' + config.dbIp + ':' + config.dbPort + '/' + config.db;
} else {
    uri = 'mongodb://' + config.dbUser + ':' + config.dbPass + '@' + config.dbIp + ':' + config.dbPort + '/' + config.db;
}

mongoose.connect(uri);

mongoose.Promise = bluebird;

const db = mongoose.connection;

db.on('error', function(err) {
    console.log(err);
    setTimeout(() => {
        mongoose.connect(uri);
    }, 1000 * 3)
}).once('open', function() {
    console.log('mongodb connected!!!!!!');
});

module.exports = mongoose;
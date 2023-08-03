const path = require('path');
const rootDir = require('../util/path');

exports.notFound = (req, res, next)=>{

    res.sendFile(path.join(rootDir, 'views', 'not_found.html'));
}
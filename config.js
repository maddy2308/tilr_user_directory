module.exports = {
    'secret': 't1YYLAax3r',
    //'database': 'mongodb://noder:noderauth&54;proximus.modulusmongo.net:27017/so9pojyN'
    'database': process.env.MONGODB_URI || 'mongodb://localhost/Tilr'
};
module.exports = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'secret',
    dbUrl: process.env.DB_URL || 'mongodb+srv://anuragsingh2445:yiGTroxdfeV4WnSF@cluster0.y58xddm.mongodb.net/'
  };
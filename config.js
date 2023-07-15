module.exports = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || '9688d6471242075a4cc3e9e68bb5bfa91409daef490178fa51d278b2595d481046efef687e889201fbc7437a25a2b214bf95548cc90a5f76841b1cdd7bf32c6e',
    dbUrl: process.env.DB_URL || 'mongodb+srv://anuragsingh2445:yiGTroxdfeV4WnSF@cluster0.y58xddm.mongodb.net/'
  };


//MONGODB_URI=mongodb+srv://anuragsingh2445:yiGTroxdfeV4WnSF@cluster0.y58xddm.mongodb.net/
//JWT_SECRET=9688d6471242075a4cc3e9e68bb5bfa91409daef490178fa51d278b2595d481046efef687e889201fbc7437a25a2b214bf95548cc90a5f76841b1cdd7bf32c6e
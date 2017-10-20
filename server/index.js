const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// clientID 658821072663-dsbsnefpckak7bv9n6868r3c9tbgovpi.apps.googleusercontent.com
// clientSecret v9dErH_z7dpzUqb-wtZOOs4r
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

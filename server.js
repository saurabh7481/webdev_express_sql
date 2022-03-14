const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactRoutes = require("./routes/contactus");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminRoutes);
app.use("/shop" ,shopRoutes)
app.use("/contactus", contactRoutes);

app.use(errorController.get404);

app.listen(3000);


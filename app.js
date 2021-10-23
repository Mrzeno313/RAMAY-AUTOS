// Requiring all the packages
var express           = require("express"),
    app               = express(),
    methodOverride    = require("method-override"),
    bodyParser        = require("body-parser"),
    mongoose          = require("mongoose"),
    passport          = require("passport")
    LocalStrategy     = require("passport-local")
    multer            = require("multer"),
    flash             = require("connect-flash")

// Requiring all the routes
var indexRoutes       = require("./routes/index");
    
// Connecting to mongo db database
mongoose.connect("mongodb://localhost/RamayAutos", { useNewUrlParser: true , useUnifiedTopology: true});
// mongoose.connect("mongodb+srv://asad:rtaah2004@traditionalbakers.ch2nr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true , useUnifiedTopology: true});

// Enable the app to use different packages
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Set the app view engine
app.set("view engine", "ejs");

// Enable the app to use the routes
app.use("/", indexRoutes);

// Enable the app to listen to the port to run on the localhost as well as on the server
app.listen(process.env.PORT || 3000, function(){
    console.log("The server has started");
})
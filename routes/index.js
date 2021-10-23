// Requiring all the packages
var express  = require("express"),
    router   = express()

router.get("/", function(req, res){
    res.render("user/index")
})

module.exports = router;
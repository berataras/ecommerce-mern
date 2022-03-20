const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("user test")
})

router.post("/userposttest", (req, res) => {
    const reqs = req.body.text;
    res.send(reqs)
})

module.exports = router;
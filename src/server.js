require('express')()
.get("/", (req, res) => {
    return res.send("hi from nlw")
})
.listen(5500)
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsaap: "40028922", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",  
        subject: "Química", 
        cost: "20", 
        weekday: [0],
        time_from: [720], 
        time_to: [1220]
    },
    {
        name: "Neto Jeck Gonzaguinha",
        avatar: "https://scontent.fjpa1-1.fna.fbcdn.net/v/t31.0-0/c0.0.395.395a/p526x296/861005_1388410458111593_2563081658070638479_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=aIsyAHOuXnYAX93GvJl&_nc_ht=scontent.fjpa1-1.fna&oh=ca68ddb9467cf9a0710d9c2e0cdb1ebc&oe=5F524BAC", 
        whatsaap: "40028922", 
        bio: "Um admirador das ciências humanas, alto, negro, ZENsual e pseudo-intelectual",  
        subject: "Filosofia", 
        cost: "20", 
        weekday: [1],
        time_from: [300], 
        time_to: [2000]
    }
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html")
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)
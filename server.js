const propiedadesWeb = require("./data.js")

const http = require("node:http")

const server = http.createServer((req, res)=>{
    console.log("request received")
    const doctype = propiedadesWeb.doctype
    const head = propiedadesWeb.head
    const body = `<body> ${propiedadesWeb.title} ${propiedadesWeb.subtitle} ${propiedadesWeb.description} </body>`
    const html= `<html lang="en"> ${head} ${body} </html>`
    
    res.end(`${doctype} ${html}`)
})

server.listen(0, () => {
    console.log(`Server listening is running on port http://localhost:${server.address().port}`)
})
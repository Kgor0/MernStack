import express from 'express'
import cors from 'cors'
import movies from './api/movies.route.js'

const app = express() //initializing the webserver
app.use(cors())
app.use(express.json()) //attaching the middleware the express will use

app.use("/api/v1/movies", movies) //initializing the route
app.use('*', (req,res)=>{               
 res.status(404).json({error: "not found"}) //if link is not the same and/or movie is not found, return error
})

export default app

//configuring your json format
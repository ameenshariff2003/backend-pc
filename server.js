const app = require('./server/app')


let notes = []

app.get("/notes",(req,res)=>{
    res.status(200).json(notes)
})

app.post("/notes",(req,res)=>{

    notes.push(req.body)

    res.status(201).json({
        msg:"successs ji"
    })
})

app.put("/notes/:id",(req,res)=>{
    console.log(req.params.id)
    notes[req.params.id] = req.body

    res.status(200).json({
        msg:"done"
    })
})
app.patch("/notes/:id",(req,res)=>{
    console.log(req.params.id)
    notes[req.params.id].title = req.body.title

    res.status(200).json({
        msg:"done"
    })
})

app.delete('/notes/:id',(req,res)=>{
    delete notes[req.params.id]

    res.status(203).json({
        msg:"deleted"
    })
})

app.listen(8000,()=>{
    console.log("server is running")
})
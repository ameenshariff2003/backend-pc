const app = require('./server/app')
const mongoose = require("mongoose")
const Users = require("./Model/notes")


let dbConnect = async()=>{
    mongoose.connect(process.env.URL)
    .then(console.log("db connected"))
    .catch((err)=>{
        console.log(err)
    })

}
dbConnect()





let notes = []

app.get("/notes",async(req,res)=>{
    const notes = await Users.find({})
    res.status(200).json(notes)
})

app.get("/notes/:id",async(req,res)=>{
    const notes = await Users.findById(req.params.id)
    res.status(200).json(notes)
})
app.post("/notes",async(req,res)=>{

    const notes = await Users.create(req.body)
    notes.save()

    res.status(201).json({
        msg:"successs ji"
    })
})

app.put("/notes/:id",async(req,res)=>{
    const notes = await Users.findByIdAndUpdate(req.params.id, req.body)

    if(!notes){
        res.json({msg:"not found"})
    }

    res.status(200).json({
        msg:"done"
    })
})
app.patch("/notes/:id",async(req,res)=>{
    console.log(req.params.id)
    const notes = await Users.findByIdAndUpdate(req.params.id,{title:req.body.title})
    if(!notes){
        res.json({
            msg:"not foufd"
        })
    }

    res.status(200).json({
        msg:"done"
    })
})

app.delete('/notes/:id',async(req,res)=>{

    const notes = await Users.findById()
    const deleteData = await Users.deleteOne({_id:req.params.id})

    if(!deleteData){

         res.json({
            msg:"not foufd"
        })

    }

    res.status(203).json({
        msg:"deleted"
    })
})

// app.listen(8000,()=>{
//     console.log("server is running")
// })
const mongoose=require('mongoose')
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.pxfed.mongodb.net/pizza?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Connected")
})
.catch(()=>{
    console.log("fail")
})
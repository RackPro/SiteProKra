const exp = require("express");
const items = require("./items.json");
const app = exp();
const cors = require("cors");
app.use(cors({
    origin: '*',
    methods: ['GET','POST']
}));
app.get("/api", (req,res)=>{
    res.json(items);
})

app.listen(3001,()=>{
    console.log("create server");
});
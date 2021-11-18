const express = require('express')
const app = express();
app.use(express.json());
app.use('/users', require('./routes/Users'));
app.use('/event', require('./routes/Events'))
app.use('/participant', require('./routes/Participants'))

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})

app.listen({ port: 8000 }, async () => {
    console.log('Server up on http://localhost:8000')
    console.log('Connected!')
});

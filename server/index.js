const express = require('express');
const { bookRoutes } = require('./routes/bookRoutes');
const { writerRoutes } = require('./routes/writerRoutes');
const { countryRoutes } = require('./routes/countryRoutes');
const { default: mongoose } = require("mongoose");

const cors = require('cors')


const app = express();

app.use(express.json())

app.use(cors());


app.use('/api/books', bookRoutes)

app.use('/api/writers', writerRoutes)

app.use('/api/countries', countryRoutes)


mongoose.connect('mongodb+srv://esmiraai:MDoJwTK5mpDZljZe@cluster0.3kppsbd.mongodb.net/books')
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

app.listen(3008,() =>console.log("Server connected"));




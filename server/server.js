const express = require('express');
const mongooose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { readdirSync } = require('fs');
const expressip = require('express-ip');

// const moment = require('moment');

// import routes
// const authRoutes = require('./routes/auth');
// const personRoutes = require('./routes/person');
// app
const app = express();

app.use(express.static(__dirname + '/public'));


app.use(expressip().getIpInfoMiddleware);
// connect DB
mongooose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
    .then(() => console.log('DB CONNECTED'))
    .catch((err) => console.log('DB CONNECT ERR', err))


// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());


// routes
// app.use('/api', authRoutes);
// app.use('/api', personRoutes);
readdirSync('./routes')
    .map((r) => app.use("/api", require('./routes/' + r)));



// test
// const date = new Date();
// const nameCollection = `track-${moment(date).format('h-m')}`
// console.log(moment(date).format('h-m'))
// console.log(moment(date).format('DD-MM-YYYY'))


const port = process.env.PORT || 5000;
app.listen(port,
    () => console.log('Server is running on port ', port));

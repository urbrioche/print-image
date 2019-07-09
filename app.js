const express = require('express');
const { app: { port } } = require('./config');
const { urlToImage } = require('./screenshot');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome!!');
});

app.all('/urlToImage', async (req, res) => {
    const url = req.body.Url || req.query.Url;
    console.log(url);
    const image = await urlToImage(url);
    res.contentType('image/png');
    res.send(image);
    console.log('send image to client...done');
});

app.listen(port, x => console.log(`Server started. Listening on port ${ port }!`));

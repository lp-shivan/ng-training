const express = require('express');

const app = express();
const PORT_NO = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// });

app.listen(PORT_NO, (err) => {
    if (err) {
        throw err;
    }
    console.log('Server listening on port no : ', PORT_NO);
})
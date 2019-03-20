const express = require('express');
const app = express();
let index=require('./index');
app.use('/',index);
app.use('/member', index);

app.listen(8001, () => {
    console.log('Example app listening on port 8001!')
});
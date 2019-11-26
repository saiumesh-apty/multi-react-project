const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'./bundle');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));


// here serve your angular/react html file
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});
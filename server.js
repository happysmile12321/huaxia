const express = require('express');
const app = express();
const compiler = webpack(config);

app.post('/api/form', (req, res) => {
  res.json({
    status: 0,
    msg: 'success'
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});

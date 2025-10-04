// to install express use (npm install express)
const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');
const { mergedPdfs } = require('./merge');

const upload = multer({ dest: 'uploads/' });

// serve /public folder at /static
app.use('/static', express.static('public'));
const port = 3000;

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/template/index.html"));
});

// merge uploaded PDFs
app.post('/merge', upload.array('pdfs', 12), async (req, res, next) => {
  console.log(req.files);

  // collect PDF paths
  const files = req.files.map(file => path.join(__dirname, file.path)); // get all uploaded file paths
  const outputPath = path.join(__dirname, 'public/merged.pdf'); // save merged file into /public

  await mergedPdfs(files, outputPath); // merge all uploaded PDFs
  res.redirect('/static/merged.pdf'); // redirect to merged PDF in static folder

  // res.send({data: req.files});
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// then run (node server.js)
// download (npx install -g nodemon)
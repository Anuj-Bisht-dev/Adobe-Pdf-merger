// to install express use (npm install express)
const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');
const { mergedPdfs } = require('./merge');

const upload = multer({ dest: 'uploads/' });

// serve /public folder at /static
app.use('/static', express.static('public'));
// const port = 3000;
// uncomment if using in local host

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/template/index.html"));
});

// ================= ORIGINAL MERGE ROUTE (LOCAL) =================

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


// ================= FIXED / FINAL MERGE ROUTE =================

// // Single route handling both local + deployment
// app.post('/merge', upload.array('pdfs', 12), async (req, res) => {
//   try {
//     console.log("FILES:", req.files);

//     // collect uploaded file paths
//     const files = req.files.map(file => file.path);

//     // detect environment (Vercel or production)
//     const isProduction =
//       process.env.VERCEL || process.env.NODE_ENV === 'production';

//     if (isProduction) {
//       // ===== DEPLOYMENT (Vercel) =====
//       const outputPath = '/tmp/merged.pdf'; // Vercel requires /tmp
//       await mergedPdfs(files, outputPath);
//       return res.sendFile(outputPath);
//     } else {
//       // ===== LOCAL DEVELOPMENT =====
//       const outputPath = path.join(__dirname, 'public/merged.pdf');
//       await mergedPdfs(files, outputPath);
//       return res.redirect('/static/merged.pdf');
//     }

//   } catch (error) {
//     console.error("ERROR:", error);
//     res.status(500).send('Error merging PDFs');
//   }
// });

// ================= LOCAL SERVER =================

// for run in local host
if (!process.env.VERCEL) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });
}

// export for deployment
module.exports = app;


// then run (node server.js)
// download (npx install -g nodemon)

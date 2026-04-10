import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import PDFMerger from 'pdf-merger-js';
import fs from 'fs';

const app = express();

// fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// detect environment (Vercel or Local)
const isVercel = !!process.env.VERCEL;


// Multer Setup (Dynamic)


const uploadDir = isVercel
  ? '/tmp/uploads'
  : path.join(__dirname, 'uploads');

// create uploads folder ONLY in local
if (!isVercel && !fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({ dest: uploadDir });

// Static Files

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/static', express.static(path.join(__dirname, 'public')));

// Home Route

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Merge PDFs Route

app.post('/merge', upload.array('pdfs', 12), async (req, res) => {
  try {
    const merger = new PDFMerger();

    // add all uploaded PDFs
    for (let file of req.files) {
      await merger.add(file.path);
    }

    let outputPath;

    if (isVercel) {
      // Vercel → use /tmp
      outputPath = '/tmp/merged.pdf';
      await merger.save(outputPath);

      // send file directly
      return res.download(outputPath, 'merged.pdf');
    } else {
      // Local → save in public folder
      const outputDir = path.join(__dirname, 'public');

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      outputPath = path.join(outputDir, 'merged.pdf');
      await merger.save(outputPath);

      // redirect to static file
      return res.redirect('/static/merged.pdf');
    }

  } catch (err) {
    console.error(err);
    res.status(500).send('Error merging PDFs');
  }
});

// Start Server (Local Only)

if (!isVercel) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

// export for Vercel
export default app;
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import PDFMerger from 'pdf-merger-js';

const app = express();
const upload = multer({ dest: 'uploads/' });

// fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static files
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/static', express.static(path.join(__dirname, 'public')));

// homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// ✅ SINGLE MERGE ROUTE (correct)
app.post('/merge', upload.array('pdfs', 12), async (req, res) => {
  try {
    const merger = new PDFMerger();

    // add all uploaded files
    for (let file of req.files) {
      await merger.add(file.path);
    }

    const isProduction =
      process.env.VERCEL || process.env.NODE_ENV === 'production';

    if (isProduction) {
      // Vercel: use /tmp
      const outputPath = '/tmp/merged.pdf';
      await merger.save(outputPath);
      return res.sendFile(outputPath);
    } else {
      // Local
      const outputPath = path.join(__dirname, 'public/merged.pdf');
      await merger.save(outputPath);
      return res.redirect('/static/merged.pdf');
    }

  } catch (err) {
    console.error(err);
    res.status(500).send('Error merging PDFs');
  }
});

// start server (only local)
if (!process.env.VERCEL) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// export for Vercel
export default app;
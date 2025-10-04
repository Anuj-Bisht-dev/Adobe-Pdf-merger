import PDFMerger from 'pdf-merger-js';
import path from 'path';

export const mergedPdfs = async (files, outputPath) => {
  const merger = new PDFMerger();

  for (const file of files) {
    await merger.add(file); // add each uploaded file
  }

  await merger.save(outputPath);

    // Export the merged PDF as a nodejs Buffer
    // const mergedPdfBuffer = await merger.saveAsBuffer();
    // fs.writeSync('merged.pdf', mergedPdfBuffer);
};

# Adobe PDF Merger - Complete Project Details

## Project Overview

Adobe PDF Merger is a **Node.js-based web application** that allows users to merge multiple PDF files into a single PDF. It provides a simple browser-based UI for uploading PDFs, merges them on the server, and allows users to download the merged file. Tailwind CSS is used for styling the UI.

## Tech Stack

- **Backend:** Node.js + Express — Handles routing, file uploads, and PDF merging  
- **File Upload:** Multer — Handles PDF uploads to the server  
- **PDF Merging:** pdf-merger-js — Library used to merge multiple PDFs  
- **CSS/UI:** Tailwind CSS — CLI-based setup with `src/input.css` compiled to `public/output.css`  
- **Frontend:** HTML + CSS — Simple UI for uploading and merging PDFs  


## Project Structure

```bash
Adobe-Pdf-merger/
├── server.js          # Main server entry point
├── package.json       # Dependencies and scripts
├── package-lock.json  # Auto-generated lock file
├── src/               # Source files for Tailwind
│   └── input.css      # Tailwind directives
├── public/            # Static files
│   └── output.css     # Compiled Tailwind CSS
├── uploads/           # Folder for user-uploaded PDFs
├── merged/            # Folder where merged PDFs are saved
└── views/             # HTML pages (if using templating)

````


## Dependencies

- `express`: Web server  
- `multer`: Handles file uploads  
- `pdf-merger-js`: Merges PDFs  
- `@tailwindcss/cli`: Compiles Tailwind CSS from `src/input.css` to `public/output.css`



## Tailwind CSS Setup

- `src/input.css` contains:

```css
@import 'tailwindcss';
@tailwind utilities;
````

* Compiled to `public/output.css` using CLI with **watch mode**:

```bash
npx tailwindcss -i ./src/input.css -o ./public/output.css --watch
```

* HTML pages link to `/public/output.css`. Tailwind classes like `bg-blue-500`, `text-xl`, `p-4` can be used.

✅ Tailwind is fully functional and recompiles automatically when `input.css` is modified.


## How It Works (Flow)

1. User opens the site (`http://localhost:3000`).
2. User uploads multiple PDF files using the form.
3. Server uses **Multer** to save PDFs in `/uploads`.
4. Server uses **pdf-merger-js** to merge PDFs into one file.
5. Merged PDF is saved in `/merged` folder and sent to user for download.


## Commands to Run Locally

```bash
# Clone the repo
git clone https://github.com/Anuj-Bisht-dev/Adobe-Pdf-merger.git

# Move to project folder
cd Adobe-Pdf-merger

# Install dependencies
npm install

# Start server
npm start
```

Open `http://localhost:3000` in your browser to use the application.


## Summary

1. Complete PDF merging solution built with Node.js and Express for the backend.

2. Uses Multer for file handling and pdf-merger-js for merging PDFs.

3. Frontend styled with Tailwind CSS, providing a simple and responsive interface.

4. Workflow: upload PDFs, merge on the server, and download the final merged file.

5. Tailwind CSS is set up via CLI in watch mode for easy style customization during development.

6. Project is structured to separate backend, frontend, uploads, and merged files clearly.


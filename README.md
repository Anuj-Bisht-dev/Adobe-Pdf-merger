#  Adobe PDF Merger

A simple and efficient **Node.js web application** that allows users to merge multiple PDF files into a single document directly from the browser.



## Features

*  Upload multiple PDF files
*  Merge PDFs into a single file
*  Download merged PDF instantly
*  Clean and responsive UI using Tailwind CSS
*  Fast server-side processing with Node.js



 ##  Tech Stack 🛠️

| Technology        | Description                 |
| ----------------- | --------------------------- |
| **Node.js**       | Backend runtime             |
| **Express.js**    | Web framework               |
| **Multer**        | File upload handling        |
| **pdf-merger-js** | PDF merging library         |
| **Tailwind CSS**  | Utility-first CSS framework |
| **HTML/CSS**      | Frontend UI                 |



## Project Structure

```bash
Adobe-Pdf-merger/
├── server.js          # Main server entry point
├── package.json       # Dependencies and scripts
├── src/
│   └── input.css      # Tailwind source file
├── public/
│   └── output.css     # Compiled Tailwind CSS
├── uploads/           # Uploaded PDFs
├── merged/            # Merged PDF output
└── views/             # HTML files (if applicable)
```



##  Installation & Setup

### step1:&nbsp; Clone the Repository

```bash
git clone https://github.com/Anuj-Bisht-dev/Adobe-Pdf-merger.git
cd Adobe-Pdf-merger
```

### Step2:&nbsp; Install Dependencies

```bash
npm install
```

### Step3:&nbsp; Run Tailwind CSS (Watch Mode)

```bash
npx tailwindcss -i ./src/input.css -o ./public/output.css --watch
```

### Step4:&nbsp; Start the Server

```bash
npm start
```



## Usage

1. Open your browser and go to:

```
http://localhost:3000
```

2. Upload multiple PDF files
3. Click **Merge**
4. Download your merged PDF 



## How It Works

1. User uploads PDFs via the browser
2. **Multer** stores files in `/uploads`
3. **pdf-merger-js** merges the files
4. Final PDF is saved in `/merged`
5. File is sent back to the user for download



## Tailwind CSS Setup

* Source file: `src/input.css`

```css
@import 'tailwindcss';
@tailwind utilities;
```

* Compile command:

```bash
npx tailwindcss -i ./src/input.css -o ./public/output.css --watch
```

* Output CSS is linked in HTML via:

```html
<link href="/public/output.css" rel="stylesheet">
```



##  Future Improvements

* Drag & drop file upload
* File preview before merging
* Progress/loading indicator
* Cloud storage support
* Deploy on Vercel / Render



## 🚀 Deployment

You can deploy this project on:

* Vercel (for frontend + serverless adaptation)
* Render / Railway (recommended for Express backend)



## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a Pull Request



## Author

**Anuj Singh Bisht**

* GitHub: [https://github.com/Anuj-Bisht-dev](https://github.com/Anuj-Bisht-dev)



## Support

If you like this project, consider giving it a ⭐ on GitHub!


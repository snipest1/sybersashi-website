import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the ZIP file
app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'sybersashi-website.zip');
  res.download(filePath, 'sybersashi-website.zip', (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Error downloading file');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`View the website at http://localhost:${port}`);
  console.log(`Download the ZIP file at http://localhost:${port}/download`);
});
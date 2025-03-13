import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

// Create a write stream for the zip file
const output = fs.createWriteStream('sybersashi-website.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function() {
  console.log('Archive created successfully');
  console.log(archive.pointer() + ' total bytes');
});

// Handle warnings and errors
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn('Warning:', err);
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add the dist directory to the archive
archive.directory('dist/', false);

// Finalize the archive
archive.finalize();
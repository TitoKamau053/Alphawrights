const fs = require('fs');
const path = require('path');
const https = require('https');
const PDFDocument = require('pdfkit');

const outPath = path.join(__dirname, '..', 'public', 'portfolio.pdf');
const nestedGalleryPath = path.join(__dirname, '..', 'public', 'nested-gallery.json');

// Color palette
const colors = {
  primary: '#2563eb',
  text: '#1f2937',
  subtext: '#6b7280',
  accent: '#f59e0b',
  lightBg: '#f9fafb'
};

// Download helper
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error('HTTP ' + res.statusCode));
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
      })
      .on('error', reject);
  });
}

async function generatePortfolio() {
  const doc = new PDFDocument({ size: 'A4', margin: 50 });
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // Background
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(colors.lightBg);

  // Title
  doc.fillColor(colors.text)
    .fontSize(28)
    .text('ALPHA WRIGHTS', { align: 'center', underline: false });
  doc.moveDown(0.5)
    .fontSize(14)
    .fillColor(colors.subtext)
    .text('Custom Steel & Wood Fabrications', { align: 'center' });

  // Accent line
  doc.fillColor(colors.accent).rect(50, 140, doc.page.width - 100, 3).fill();

  // Short intro text
  doc.moveDown(2);
  doc.fillColor(colors.text)
    .fontSize(12)
    .text(
      'We specialize in bespoke steel and wood works — from custom gates and furniture to structural designs and artistic installations. Each project is crafted with precision, durability, and aesthetics in mind.',
      60,
      160,
      { width: doc.page.width - 120, align: 'justify' }
    );

  // Add one sample image (small, compressed)
  try {
    const raw = fs.readFileSync(nestedGalleryPath, 'utf8');
    const galleryData = JSON.parse(raw);
    const firstImage =
      galleryData[0]?.images?.[0]?.src ||
      galleryData[0]?.images?.[0]?.url ||
      null;

    if (firstImage) {
      const imgData = await downloadImage(firstImage);
      const imgWidth = 300;
      const x = (doc.page.width - imgWidth) / 2;
      doc.image(imgData, x, 300, { fit: [imgWidth, 180], align: 'center' });
    }
  } catch (err) {
    console.warn('Could not load preview image:', err.message);
  }

  // Contact info
  doc.moveDown(6);
  doc.fillColor(colors.text).fontSize(14).text('Contact Us', { align: 'center' });
  doc.moveDown(0.5).fontSize(10).fillColor(colors.subtext);
  doc.text('Email: alphawrightsltd@outlook.com', { align: 'center' });
  doc.text('WhatsApp: +254 718 145 608', { align: 'center' });
  doc.text('TikTok: @alpha.wrights', { align: 'center' });
  doc.text('Location: Roysambu, Nairobi, Kenya', { align: 'center' });

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

// Run
generatePortfolio()
  .then(() => console.log('✅ Compact 1-page portfolio generated at', outPath))
  .catch((err) => {
    console.error('❌ Error generating portfolio:', err);
    process.exit(1);
  });

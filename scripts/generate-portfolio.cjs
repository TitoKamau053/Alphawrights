const fs = require('fs');
const path = require('path');
const https = require('https');
const PDFDocument = require('pdfkit');

const outPath = path.join(__dirname, '..', 'public', 'portfolio.pdf');
const nestedGalleryPath = path.join(__dirname, '..', 'public', 'nested-gallery.json');

// Layout configuration
const MARGIN = 72; // 1 inch
const PAGE_PADDING = 36; // internal padding
const IMAGE_HEIGHT = 180;

const colors = {
  primary: '#2563eb',
  text: '#1f2937',
  subtext: '#6b7280',
  accent: '#f59e0b',
  lightBg: '#f9fafb'
};

function selectBestImages(galleryData) {
  // Choose a small set of "best" images distributed across main categories.
  // Adjust counts per main category as needed.
  const majorCategories = {
    'Custom Steel Works': 4,
    'Furnitures': 4,
    'Home Pictures': 2
  };

  const selected = [];

  for (const cat of galleryData) {
    const main = (cat.category || '').split('/')[0];
    const limit = majorCategories[main] || 0;
    if (limit > 0 && Array.isArray(cat.images) && cat.images.length > 0) {
      selected.push({
        category: cat.category,
        images: cat.images.slice(0, limit)
      });
    }
  }

  return selected;
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    try {
      https.get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error('HTTP ' + res.statusCode));
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
        res.on('error', reject);
      }).on('error', reject);
    } catch (err) {
      reject(err);
    }
  });
}

async function generatePortfolio() {
  const raw = fs.readFileSync(nestedGalleryPath, 'utf8');
  const galleryData = JSON.parse(raw);

  const selected = selectBestImages(galleryData);

  const doc = new PDFDocument({ size: 'A4', margin: MARGIN });
  const stream = fs.createWriteStream(outPath);
  doc.pipe(stream);

  // Cover
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(colors.lightBg);
  doc.fillColor(colors.text).fontSize(36).text('ALPHA WRIGHTS', { align: 'center', valign: 'center' });
  doc.moveDown(0.5).fontSize(14).fillColor(colors.subtext).text('Portfolio', { align: 'center' });
  doc.moveDown(2).fontSize(12).fillColor(colors.text).text('Custom Steel & Wood Fabrications', { align: 'center' });

  // Accent bar and contact
  doc.fillColor(colors.accent).rect(MARGIN, doc.page.height - 120, doc.page.width - 2 * MARGIN, 4).fill();
  doc.fontSize(10).fillColor(colors.subtext).text('alphawrightsltd@outlook.com | +254 718 145 608', MARGIN, doc.page.height - 70, { width: doc.page.width - 2 * MARGIN, align: 'center' });

  // Intro page
  doc.addPage();
  doc.fillColor(colors.accent).rect(MARGIN, MARGIN, 4, doc.page.height - 2 * MARGIN).fill();
  doc.fillColor(colors.text).fontSize(24).text('Welcome', MARGIN + PAGE_PADDING, MARGIN + PAGE_PADDING);
  doc.moveDown(0.5).fontSize(12).fillColor(colors.subtext).text(
    'Alpha Wrights is a Nairobi-based custom fabrication workshop specializing in steel and wood works. We design and build high-quality gates, furniture, structural elements and bespoke installations.',
    MARGIN + PAGE_PADDING,
    undefined,
    { width: doc.page.width - 2 * MARGIN - PAGE_PADDING }
  );

  doc.moveDown(0.5).text('Our focus is on precision, durability and beautiful finishes. This portfolio showcases some of our recent works across various categories.');

  // Portfolio sections
  for (const section of selected) {
    const title = section.category || 'Untitled';
    if (!Array.isArray(section.images) || section.images.length === 0) continue;

    // Start a new page per section
    doc.addPage();

    // Header
    doc.fillColor(colors.accent).rect(MARGIN, MARGIN, doc.page.width - 2 * MARGIN, 40).fill();
    doc.fillColor('#ffffff').fontSize(18).text(title.toUpperCase(), MARGIN + 20, MARGIN + 12);
    doc.fontSize(10).text(`${section.images.length} projects`, doc.page.width - MARGIN - 80, MARGIN + 18);

    // Grid, max 4 per page (2x2)
    const imagesPerPage = 4;
    const imageWidth = (doc.page.width - 2 * MARGIN - PAGE_PADDING) / 2;

    for (let i = 0; i < Math.min(section.images.length, imagesPerPage); i++) {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = MARGIN + (col * (imageWidth + PAGE_PADDING / 2));
      const y = MARGIN + 60 + row * (IMAGE_HEIGHT + PAGE_PADDING / 2);

      const imgObj = section.images[i] || {};
      const imgUrl = imgObj.src || imgObj.url || imgObj.path || imgObj.publicUrl || imgObj.secure_url;

      if (!imgUrl) {
        // placeholder box
        doc.rect(x, y, imageWidth, IMAGE_HEIGHT).fill('#f3f4f6');
        doc.fontSize(10).fillColor(colors.subtext).text('Image not available', x + 10, y + IMAGE_HEIGHT / 2 - 5);
        continue;
      }

      try {
        const data = await downloadImage(imgUrl);
        doc.image(data, x, y, { fit: [imageWidth, IMAGE_HEIGHT], align: 'center' });
      } catch (err) {
        console.warn('Failed to fetch image', imgUrl, err && err.message);
        doc.rect(x, y, imageWidth, IMAGE_HEIGHT).fill('#f3f4f6');
        doc.fontSize(10).fillColor(colors.subtext).text('Image not available', x + 10, y + IMAGE_HEIGHT / 2 - 5);
      }
    }

    // Footer page indicator
    doc.fontSize(8).fillColor(colors.subtext).text(`Section: ${title}`, MARGIN, doc.page.height - MARGIN - 20, { width: doc.page.width - 2 * MARGIN, align: 'center' });
  }

  // Back cover
  doc.addPage();
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(colors.lightBg);
  doc.fillColor(colors.text).fontSize(24).text('Get in Touch', { align: 'center', y: doc.page.height / 2 - 100 });
  doc.moveDown(1).fontSize(12).fillColor(colors.subtext);

  const contacts = [
    ['Email', 'alphawrightsltd@outlook.com'],
    ['WhatsApp', '+254 718 145 608'],
    ['TikTok', '@alpha.wrights'],
    ['Twitter', '@AlphawrightsKe'],
    ['Location', 'Roysambu, Nairobi, Kenya']
  ];

  contacts.forEach(([label, value], i) => {
    const y = doc.page.height / 2 + i * 22;
    doc.fontSize(10).fillColor(colors.text).text(label, MARGIN + PAGE_PADDING, y);
    doc.fontSize(10).fillColor(colors.subtext).text(value, MARGIN + PAGE_PADDING + 120, y);
  });

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => resolve());
    stream.on('error', reject);
  });
}

// Run
generatePortfolio().then(() => console.log('Generated portfolio.pdf at', outPath)).catch((err) => {
  console.error('Error generating portfolio:', err);
  process.exit(1);
});

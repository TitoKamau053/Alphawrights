const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outPath = path.join(__dirname, '..', 'public', 'portfolio.pdf');
const assetsPath = path.join(__dirname, '..', 'src', 'assets');

const doc = new PDFDocument({ size: 'A4', margin: 50 });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

// Colors and styles
const brandColor = '#111827';
const accent = '#16a34a';

// Cover
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#f9fafb');

doc.fillColor(brandColor).fontSize(28).text('Alpha Wrights', { align: 'center', valign: 'center' });
doc.moveDown(0.5);
doc.fontSize(14).fillColor('#374151').text('Custom Steel & Wood Fabrications', { align: 'center' });

// Add hero image if exists
const hero = path.join(assetsPath, 'hero-fabrication.jpg');
if (fs.existsSync(hero)) {
  try {
    doc.image(hero, doc.page.width / 2 - 200, 140, { width: 400, height: 200, align: 'center', valign: 'center' });
  } catch (e) {
    // ignore image errors
  }
}

// About
doc.addPage();
doc.fillColor(brandColor).fontSize(20).text('About Alpha Wrights', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).fillColor('#374151').text(`Alpha Wrights is a Nairobi-based custom fabrication workshop specializing in steel and wood works. We design and build high-quality gates, furniture, structural elements and bespoke installations. Our focus is on precision, durability and beautiful finishes.`, { align: 'left' });

// Gallery grid
const gallery = ['service-welding.jpg', 'service-woodwork.jpg', 'service-custom.jpg'];
let x = 50;
let y = 220;
const imgW = 160;
const imgH = 120;

doc.addPage();
doc.fillColor(brandColor).fontSize(18).text('Selected Works', { underline: true });

gallery.forEach((file, i) => {
  const imgPath = path.join(assetsPath, file);
  if (fs.existsSync(imgPath)) {
    try {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const px = 50 + col * (imgW + 20);
      const py = 100 + row * (imgH + 40);
      doc.image(imgPath, px, py, { width: imgW, height: imgH });
    } catch (e) {
      // ignore
    }
  }
});

// Contact page
doc.addPage();
doc.fillColor(brandColor).fontSize(20).text('Contact', { underline: true });
doc.moveDown(0.5);
doc.fontSize(12).fillColor('#374151');
doc.text('Email: alphawrightsltd@outlook.com');
doc.text('WhatsApp: +254 718 145 608');
doc.text('TikTok: @alpha.wrights');
doc.text('Twitter: @AlphawrightsKe');
doc.moveDown(0.5);
doc.text('Address: Roysambu, Nairobi, Kenya');

doc.end();

stream.on('finish', () => {
  console.log('Generated portfolio.pdf at', outPath);
});

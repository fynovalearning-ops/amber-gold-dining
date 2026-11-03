import jsPDF from "jspdf";

const starters = [
  { name: "Garlic & parmesan bread", desc: "Fluffy brioche, glazed with garlic & herb butter and finished with parmesan cheese and rosemary", tag: "VG" },
  { name: "Wild mushroom & truffle arancini", desc: "Buffalo mozzarella, black truffle aioli, parmesan cheese", tag: "VG" },
  { name: "Signature wings", desc: "Smoked black garlic buffalo sauce, dashi buttermilk, soft herbs and furikake", tag: "GFO" },
  { name: "Times bruschetta", desc: "Avocado, Roma tomato, Spanish onion, basil with balsamic glaze, extra virgin olive oil, Grana Padano cheese on grilled sourdough", tag: "VG, GFO" },
  { name: "Fried calamari", desc: "Coated with Asian spiced flour mix, served with Vietnamese dipping sauce and herbs", tag: "GFO" },
];

const mains = [
  { name: "House made chicken parmigiana", desc: "Tender crumbed chicken breast topped with ham, Napoli sauce, and melted mozzarella & tasty cheese" },
  { name: "Wild caught barramundi", desc: "Pan fried barramundi gently set over fregola with mussels and clams, lobster bisque, cherry tomatoes and summer herbs", tag: "GFO" },
  { name: "Flame grilled chicken", desc: "Half chicken marinated in chilli yogurt, grilled and glazed with our house-fermented chilli sauce, served with grilled zaatar flatbread", tag: "GFO" },
  { name: "Porterhouse 300gm MB:3+", desc: "Riverine Premium Black Angus, 150 days grain fed. Recommended medium-rare/medium" },
  { name: "Ricotta and spinach ravioli", desc: "Sage, lemon butter emulsion, parmesan cheese", tag: "VG" },
  { name: "Half rack of beef or pork ribs", desc: "Slow cooked for 12 hours, glazed with homemade ribs basting", tag: "GFO" },
  { name: "Nasi goreng", desc: "Indonesian-style egg fried rice with pork, chicken, prawn, green vegetables, chilli, coriander, bean sprout and fried shallots", tag: "GFO" },
];

const sides = ["Chips", "Simple salad (VG, GF)", "Mash (VG, GF)"];

const desserts = [
  { name: "Biscoff tiramisu", desc: "A rich fusion of espresso-soaked sponge, creamy mascarpone, biscoff, and a hint of chocolate" },
  { name: "Sticky date pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
  { name: "Crème brûlée", desc: "Vanilla bean crème brûlée served with vanilla biscotti, mocha cream & fresh berries" },
  { name: "Brownie s'mores", desc: "Layers of melted chocolate and burnt coffee marshmallow, served with vanilla bean ice cream and caramel mousse" },
  { name: "Duo of ice-cream or sorbet", desc: "Choice of two: salted caramel ice-cream, vanilla bean ice cream, mango sorbet & berries" },
];

export const generateDateNightPdf = () => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const checkPage = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const drawItem = (item: { name: string; desc?: string; tag?: string }) => {
    checkPage(16);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    const nameText = item.tag ? `${item.name}  (${item.tag})` : item.name;
    doc.text(nameText, margin, y);
    y += 4;
    if (item.desc) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      const lines = doc.splitTextToSize(item.desc, contentWidth - 10);
      doc.text(lines, margin, y);
      y += lines.length * 3.5;
      doc.setTextColor(0, 0, 0);
    }
    y += 3;
  };

  const drawSectionHeader = (label: string, title: string, subtitle?: string) => {
    checkPage(25);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(150, 120, 60);
    doc.text(label.toUpperCase(), margin, y);
    y += 5;
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(title, margin, y);
    y += 5;
    if (subtitle) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(subtitle, margin, y);
      y += 4;
      doc.setTextColor(0, 0, 0);
    }
    doc.setDrawColor(150, 120, 60);
    doc.setLineWidth(0.3);
    doc.line(margin, y, margin + 15, y);
    y += 6;
  };

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("TIMES BERWICK", pageWidth / 2, y, { align: "center" });
  y += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150, 120, 60);
  doc.text("Date Night Menu", pageWidth / 2, y, { align: "center" });
  y += 6;

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("$79 per person", pageWidth / 2, y, { align: "center" });
  y += 5;

  doc.setDrawColor(150, 120, 60);
  doc.setLineWidth(0.5);
  doc.line(pageWidth / 2 - 20, y, pageWidth / 2 + 20, y);
  y += 6;

  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  const subtitleLines = doc.splitTextToSize(
    "Includes two mains plus two sides, or the Times Carnivore Feast, and a starter and dessert to share.",
    contentWidth
  );
  doc.text(subtitleLines, pageWidth / 2, y, { align: "center" });
  y += subtitleLines.length * 4 + 6;
  doc.setTextColor(0, 0, 0);

  // Starters
  drawSectionHeader("To Start", "A shared starter", "Choose one to share");
  starters.forEach(drawItem);
  y += 4;

  // Mains
  drawSectionHeader("Mains", "Two mains & two sides, or the Times Carnivore Feast", "Each choose a main + side, or share the Times Carnivore Feast");
  mains.forEach(drawItem);
  y += 2;

  // Sides
  checkPage(20);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(150, 120, 60);
  doc.text("SIDES", margin, y);
  y += 5;
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  sides.forEach((s) => {
    doc.text(s, margin, y);
    y += 5;
  });
  y += 4;

  // Carnivore Feast
  checkPage(25);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(150, 120, 60);
  doc.text("OR SHARE INSTEAD", margin, y);
  y += 5;
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Times Carnivore Feast", margin, y);
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  const carnLines = doc.splitTextToSize(
    "Eye of rump (200g), choice of half pork or beef ribs, crispy skin pork belly, flame grilled chicken. Served with choice of two sides (chips/salad/mash) & choice of a sauce.",
    contentWidth - 10
  );
  doc.text(carnLines, margin, y);
  y += carnLines.length * 3.5 + 6;
  doc.setTextColor(0, 0, 0);

  // Desserts
  drawSectionHeader("To Finish", "A shared dessert", "Choose one to share");
  desserts.forEach(drawItem);

  // Footer
  checkPage(20);
  y += 5;
  doc.setDrawColor(150, 120, 60);
  doc.setLineWidth(0.3);
  doc.line(pageWidth / 2 - 30, y, pageWidth / 2 + 30, y);
  y += 8;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("Times Berwick - Date Night Experience", pageWidth / 2, y, { align: "center" });
  y += 4;
  doc.text("timesberwick.com.au", pageWidth / 2, y, { align: "center" });

  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.download = "Times-Berwick-Date-Night-Menu.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
};

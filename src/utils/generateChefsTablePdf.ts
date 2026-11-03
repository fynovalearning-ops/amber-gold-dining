import jsPDF from "jspdf";

type PdfSection = {
  title: string;
  subtitle?: string;
  lines: string[];
};

const sections: PdfSection[] = [
  {
    title: "To begin",
    subtitle: "Choice of entrée",
    lines: [
      "Fried calamari, lemon aioli, rocket, parmesan.",
      "Wild mushroom and truffle arancini, truffle aioli, parmesan.",
    ],
  },
  {
    title: "To share",
    subtitle: "Times Carnivore Feast",
    lines: [
      "A generous sharing board featuring Eye of Rump 200g alongside premium cuts, slow-cooked ribs, and seasonal accompaniments.",
    ],
  },
  {
    title: "To finish",
    subtitle: "Dessert",
    lines: [
      "A seasonal dessert to end your evening. Ask your server for tonight's selection.",
    ],
  },
];

export const generateChefsTablePdf = () => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;

  let y = margin;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("TIMES BERWICK", pageWidth / 2, y, { align: "center" });

  y += 10;
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150, 120, 60);
  doc.text("Chef's Table Menu", pageWidth / 2, y, { align: "center" });

  y += 6;
  doc.setDrawColor(150, 120, 60);
  doc.setLineWidth(0.5);
  doc.line(pageWidth / 2 - 22, y, pageWidth / 2 + 22, y);

  y += 12;
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Our take on a 'feed me' menu", margin, y);

  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("Seasonal menu by Chef Ramesh and team top picks.", margin, y);

  y += 6;
  doc.setFont("helvetica", "bold");
  doc.setTextColor(150, 120, 60);
  doc.text("Two options, starting from $84pp", margin, y);

  y += 12;
  doc.setTextColor(0, 0, 0);

  for (const section of sections) {
    if (y > pageHeight - 35) {
      doc.addPage();
      y = margin;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(150, 120, 60);
    doc.text(section.title.toUpperCase(), margin, y);

    y += 5;
    if (section.subtitle) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(section.subtitle, margin, y);
      y += 6;
    }

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(80, 80, 80);

    for (const line of section.lines) {
      const wrapped = doc.splitTextToSize(line, pageWidth - margin * 2);
      doc.text(wrapped, margin, y);
      y += wrapped.length * 5;
    }

    y += 5;
    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 9;
  }

  const footerY = pageHeight - margin;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("Times Berwick - Premium Dining", pageWidth / 2, footerY - 4, { align: "center" });
  doc.text("timesberwick.com.au", pageWidth / 2, footerY, { align: "center" });

  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.download = "Times-Berwick-Chefs-Table-Menu.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
};

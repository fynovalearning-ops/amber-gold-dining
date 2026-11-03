import jsPDF from "jspdf";
import { aLaCarteSections } from "@/data/menuData";

export const generateALaCartePdf = () => {
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

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("TIMES BERWICK", pageWidth / 2, y, { align: "center" });
  y += 10;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150, 120, 60);
  doc.text("À La Carte Menu", pageWidth / 2, y, { align: "center" });
  y += 6;

  // Divider
  doc.setDrawColor(150, 120, 60);
  doc.setLineWidth(0.5);
  doc.line(pageWidth / 2 - 20, y, pageWidth / 2 + 20, y);
  y += 12;
  doc.setTextColor(0, 0, 0);

  for (const section of aLaCarteSections) {
    checkPage(30);

    // Section title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(section.title, margin, y);
    y += 5;

    if (section.subtitle) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(section.subtitle, margin, y);
      y += 4;
    }

    // Divider
    doc.setDrawColor(150, 120, 60);
    doc.setLineWidth(0.3);
    doc.line(margin, y, margin + 15, y);
    y += 5;
    doc.setTextColor(0, 0, 0);

    for (const item of section.items) {
      checkPage(16);

      // Item name + price
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      const nameText = item.tag ? `${item.name}  (${item.tag})` : item.name;
      doc.text(nameText, margin, y);

      if (item.price) {
        doc.setFont("helvetica", "normal");
        doc.setTextColor(150, 120, 60);
        doc.text(`$${item.price}`, pageWidth - margin, y, { align: "right" });
        doc.setTextColor(0, 0, 0);
      }
      y += 4;

      // Description
      if (item.desc) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        const lines = doc.splitTextToSize(item.desc, contentWidth - 15);
        doc.text(lines, margin, y);
        y += lines.length * 3.5;
        doc.setTextColor(0, 0, 0);
      }

      y += 3;
    }

    y += 6;
  }

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
  doc.text("Times Berwick - Premium Dining", pageWidth / 2, y, { align: "center" });
  y += 4;
  doc.text("timesberwick.com.au", pageWidth / 2, y, { align: "center" });

  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.download = "Times-Berwick-A-La-Carte-Menu.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
};

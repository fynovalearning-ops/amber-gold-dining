import jsPDF from "jspdf";

type CourseItem = { name: string; desc: string; tag?: string };
type Course = { course: string; subtitle?: string; items: CourseItem[] };

const menu1: Course[] = [
  { course: "Pre-Starter", items: [{ name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, glazed with garlic & herb butter, parmesan cheese, rosemary crisp", tag: "VG" }] },
  { course: "Starters", subtitle: "Your choice of", items: [
    { name: "Mushroom & Truffle Arancini", desc: "Black truffle aioli, parmesan cheese, Davidson plum", tag: "VG" },
    { name: "Signature Fried Calamari", desc: "Coated with Asian spiced flour mix, served with Vietnamese dipping sauce and herbs", tag: "GFO" },
    { name: "Hot Chicken Wings", desc: "Smoked black garlic and adobo sauce, furikake", tag: "GFO" },
  ]},
  { course: "Mains", subtitle: "Your choice of", items: [
    { name: "O'Connor Striploin 350gm MB:3+", desc: "150 days grain fed. Recommended: Medium-rare/Medium. Basted in Times' Signature glaze, served with the choice of chips or salad and one choice of sauce", tag: "GFO" },
    { name: "Flame Grilled Chicken", desc: "Katsu curry sauce, glazed with house fermented chilli, crispy leaves, grilled dukkah bread", tag: "GFO" },
    { name: "Times Signature Gnocchi", desc: "Butter fried gnocchi with roasted pumpkin, sage cream sauce with a touch of Napoli, garlic and parmesan cheese", tag: "VG" },
    { name: "Crispy Skinned Salmon", desc: "Saffron fregola with prawn meat, scallops, capers, lobster bisque, garlic, chilli, dill, cherry tomatoes, fresh verde", tag: "GFO" },
    { name: "Harissa Lamb Skewer", desc: "Marinated lamb fillet, onion & red capsicum, lemon & rosemary glaze, finished with pickled onion, saffron yoghurt and fermented tomato seasoning", tag: "GFO" },
    { name: "Wagyu Rump Cap Skewer", desc: "Rosemary and garlic, onion & capsicum, cooked over the flame grill, finished with peach & apricot glaze, Zhoug", tag: "GFO" },
  ]},
  { course: "Desserts", subtitle: "Your choice of", items: [
    { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
    { name: "Duo of Ice-Cream or Sorbet", desc: "Choice of two: salted caramel ice cream, vanilla bean ice cream, mango sorbet & berries" },
  ]},
];

const menu2: Course[] = [
  { course: "Pre-Starter", items: [{ name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, glazed with garlic & herb butter, parmesan cheese, rosemary crisp", tag: "VG" }] },
  { course: "Starters", subtitle: "Your choice of", items: [
    { name: "Mushroom & Truffle Arancini", desc: "Black truffle aioli, parmesan cheese, Davidson plum", tag: "VG" },
    { name: "Signature Fried Calamari", desc: "Coated with Asian spiced flour mix, served with Vietnamese dipping sauce and herbs", tag: "GFO" },
    { name: "Times Bruschetta", desc: "Avocado, Roma tomato, Spanish onion, basil with balsamic glaze, extra virgin olive oil, Grana Padano cheese on grilled sourdough", tag: "VG, GFO" },
    { name: "Hot Chicken Wings", desc: "Smoked black garlic and adobo sauce, furikake", tag: "GFO" },
  ]},
  { course: "Mains", subtitle: "Your choice of", items: [
    { name: "O'Connor Rib-Eye 400gm MB:4+", desc: "150 days grain fed. Recommended: Medium. Basted in Times' Signature glaze, served with the choice of chips or salad and one choice of sauce", tag: "GFO" },
    { name: "Wagyu Striploin 300g MB:5+", desc: "Grain fed 450 days. Recommended: Medium Rare/Medium. Basted in Times' Signature glaze, served with the choice of chips or salad and one choice of sauce", tag: "GFO" },
    { name: "Times Signature Gnocchi", desc: "Butter fried gnocchi with roasted pumpkin, sage cream sauce with a touch of Napoli, garlic and parmesan cheese", tag: "VG" },
    { name: "Crispy Skinned Salmon", desc: "Saffron fregola with prawn meat, scallops, capers, lobster bisque, garlic, chilli, dill, cherry tomatoes, fresh verde", tag: "GFO" },
    { name: "Pork Belly Skewer", desc: "Slow cooked with Thai basil and chilli, onion, finished over the flame grill with Szechuan honey, almond and shallot crumb", tag: "GFO" },
    { name: "Flame Grilled Chicken", desc: "Katsu curry sauce, glazed with house fermented chilli, crispy leaves, grilled dukkah bread", tag: "GFO" },
  ]},
  { course: "Desserts", subtitle: "Your choice of", items: [
    { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
    { name: "Crème Brûlée", desc: "Vanilla bean crème brûlée served with vanilla biscotti, mocha cream & fresh berries" },
  ]},
];

const renderCourses = (doc: jsPDF, courses: Course[], margin: number, pageWidth: number, pageHeight: number, startY: number) => {
  let y = startY;

  const checkPage = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  for (const course of courses) {
    checkPage(20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(150, 120, 60);
    doc.text(course.course.toUpperCase(), margin, y);
    y += 4;
    if (course.subtitle) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(course.subtitle, margin, y);
      y += 4;
    }
    doc.setTextColor(0, 0, 0);
    y += 2;

    for (const item of course.items) {
      checkPage(14);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      const nameText = item.tag ? `${item.name}  (${item.tag})` : item.name;
      doc.text(nameText, margin, y);
      y += 4;
      if (item.desc) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        const lines = doc.splitTextToSize(item.desc, pageWidth - margin * 2 - 10);
        doc.text(lines, margin, y);
        y += lines.length * 3.5;
        doc.setTextColor(0, 0, 0);
      }
      y += 3;
    }
    y += 4;
  }
  return y;
};

export const generateSetMenuPdf = () => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;

  // Header
  let y = margin;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("TIMES BERWICK", pageWidth / 2, y, { align: "center" });
  y += 10;
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150, 120, 60);
  doc.text("Set Menus", pageWidth / 2, y, { align: "center" });
  y += 6;
  doc.setDrawColor(150, 120, 60);
  doc.setLineWidth(0.5);
  doc.line(pageWidth / 2 - 20, y, pageWidth / 2 + 20, y);
  y += 15;
  doc.setTextColor(0, 0, 0);

  // Menu 1
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Set Menu 1", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150, 120, 60);
  doc.setFontSize(14);
  doc.text("$95 per person", pageWidth - margin, y, { align: "right" });
  doc.setTextColor(0, 0, 0);
  y += 8;


  y = renderCourses(doc, menu1, margin, pageWidth, pageHeight, y);

  // Menu 2
  doc.addPage();
  y = margin;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Set Menu 2", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(150, 120, 60);
  doc.setFontSize(14);
  doc.text("$110 per person", pageWidth - margin, y, { align: "right" });
  doc.setTextColor(0, 0, 0);
  y += 8;

  y = renderCourses(doc, menu2, margin, pageWidth, pageHeight, y);

  // Beverage Packages
  doc.addPage();
  y = margin;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 0);
  doc.text("Beverage Packages", pageWidth / 2, y, { align: "center" });
  y += 6;
  doc.setDrawColor(150, 120, 60);
  doc.setLineWidth(0.5);
  doc.line(pageWidth / 2 - 20, y, pageWidth / 2 + 20, y);
  y += 12;

  const beveragePackages = [
    { title: "2 Hour Package", price: "$55/person", includes: ["House White – Rochford Sauvignon Blanc", "House Red – Underground Pinot Noir", "House Sparkling – Growers Gate Brut Cuvee", "House Tap Beer – Furphy Crisp Lager", "Cocktail on Arrival (1 per person): Times Spritz or Espresso Martini"] },
    { title: "3 Hour Package", price: "$62/person", includes: ["House White – Rochford Sauvignon Blanc", "House Red – Underground Pinot Noir", "House Sparkling – Growers Gate Brut Cuvee", "House Tap Beer – Furphy Crisp Lager", "Cocktail on Arrival (1 per person): Times Spritz or Espresso Martini"] },
    { title: "4 Hour Package", price: "$90/person", includes: ["House White – Rochford Sauvignon Blanc", "House Red – Underground Pinot Noir", "House Sparkling – Growers Gate Brut Cuvee", "House Tap Beer – Furphy Crisp Lager", "Cocktail on Arrival (1 per person): Times Spritz or Espresso Martini"] },
  ];

  for (const pkg of beveragePackages) {
    const checkPage = (needed: number) => {
      if (y + needed > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
    };
    checkPage(40);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(pkg.title, margin, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(150, 120, 60);
    doc.setFontSize(12);
    doc.text(pkg.price, pageWidth - margin, y, { align: "right" });
    doc.setTextColor(0, 0, 0);
    y += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    for (const item of pkg.includes) {
      checkPage(6);
      doc.text(`•  ${item}`, margin + 4, y);
      y += 5;
    }
    doc.setTextColor(0, 0, 0);
    y += 8;
  }

  // Footer
  const lastY = doc.internal.pageSize.getHeight() - margin;
  doc.setDrawColor(150, 120, 60);
  doc.setLineWidth(0.3);
  doc.line(pageWidth / 2 - 30, lastY - 12, pageWidth / 2 + 30, lastY - 12);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text("Times Berwick - Premium Dining", pageWidth / 2, lastY - 6, { align: "center" });
  doc.text("timesberwick.com.au", pageWidth / 2, lastY - 2, { align: "center" });

  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.download = "Times-Berwick-Set-Menus.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
};

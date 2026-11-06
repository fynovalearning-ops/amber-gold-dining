// ===== TYPES =====
export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  tag?: string; // e.g. "GF", "VG", "GFO", "NEW"
};

export type MenuSection = {
  title: string;
  subtitle?: string;
  intro?: string;
  items: MenuItem[];
};

// ===== À LA CARTE =====
export const oysterItems: MenuItem[] = [
  { name: "Sydney Rock Oysters", desc: "Champagne mignonette. From the east coast of Australia", price: "39 / 73", tag: "GF" },
];

export const rawAndColdItems: MenuItem[] = [
  { name: "Wagyu Tartare", desc: "Mayura wagyu MB7+, tartare dressing, free range yolk, crispy potato, garlic crisp", price: "28", tag: "GF" },
  { name: "Yellowtail Kingfish", desc: "Kombu cured yellowtail kingfish, citrus dressing, garlic crème fraîche, chilli, pickle shallots", price: "26", tag: "GF" },
];

export const toBeginItems: MenuItem[] = [
  { name: "Grilled Honey Fig & Bresaola", desc: "Stracciatella, thyme, vincotto, extra virgin olive oil on garlic sourdough", price: "28", tag: "VGO, GFO" },
  { name: "Charred Octopus", desc: "Nduja, red pepper salsa, crispy shallots, kefir lime aioli", price: "29", tag: "GF" },
  { name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, garlic & herb butter, parmesan, rosemary", price: "17", tag: "VG" },
  { name: "Times' Bruschetta", desc: "Avocado, Roma tomato, Spanish onion, basil with vincotto, extra virgin olive oil, Grana Padano cheese on grilled sourdough", price: "19", tag: "VG, VO, GFO" },
  { name: "Signature Fried Calamari", desc: "Spiced flour mix, Vietnamese dipping sauce & herbs", price: "19" },
  { name: "Mushroom & Truffle Arancini", desc: "Black truffle aioli, parmesan cheese, Davidson plum", price: "19", tag: "VG" },
  { name: "Hot Chicken Wings", desc: "Smoked black garlic and adobo sauce, furikake", price: "22", tag: "GFO" },
  { name: "Grilled Hokkaido Scallops", desc: "Café de Paris butter, parsley", price: "29", tag: "GF" },
  { name: "Fermented Chilli Prawns", desc: "Marinated Emerald tiger prawns & garlic, grilled dukkah bread", price: "28", tag: "GFO" },
  { name: "Signature Entrée Sharing Board", desc: "Chef's selection of Mushroom & Truffle Arancini, Hot Chicken Wings, Signature Fried Calamari & Times Bruschetta", price: "68" },
];

export const aLaCarteSections: MenuSection[] = [
  {
    title: "O’Connor",
    subtitle: "Premium Australian Beef from East Gippsland, Victoria. Grain Fed 150 Days.",
    intro: "",
    items: [
      { name: "Eye Fillet 200g MB2+", desc: "Recommended: Medium Rare", price: "64" },
      { name: "Striploin 350g MB2+", desc: "Recommended: Medium Rare / Medium", price: "72" },
      { name: "T-Bone 800g MB3+", desc: "Recommended: Medium Rare / Medium", price: "96" },
      { name: "Rib-Eye 400g MB2+", desc: "Recommended: Medium", price: "89" },
    ],
  },
  {
    title: "Westholme Wagyu",
    subtitle: "Premium Australian Wagyu from Queensland's Gulf Country. Grain Fed 450 Days.",
    items: [
      { name: "Striploin 300g MB5+", desc: "Recommended: Medium Rare / Medium", price: "89" },
      { name: "Rump 500g MB5+", desc: "Recommended: Medium Rare / Medium", price: "94" },
      { name: "Scotch Fillet 300g MB7+", desc: "Recommended: Medium Rare", price: "94" },
    ],
  },
  {
    title: "O'Connor Dry Aged",
    subtitle: "Aged with butter & thyme. From Gippsland, Victoria.",
    items: [
      { name: "Prime Rib-Eye 600g MB4+", desc: "Recommended: Medium (Grassfed)", price: "156" },
      { name: "Striploin on the Bone 400g MB4+", desc: "Recommended: Medium Rare (Grainfed)", price: "82" },
    ],
  },
  {
    title: "Sauces",
    items: [
      { name: "Creamy Mushroom", desc: "", price: "5" },
      { name: "Chimichurri", desc: "", price: "5", tag: "GF" },
      { name: "Peppercorn", desc: "", price: "5" },
      { name: "Garlic & Herb Butter", desc: "", price: "5", tag: "GF" },
      { name: "Béarnaise", desc: "", price: "5", tag: "GF" },
      { name: "Aioli", desc: "", price: "3" },
      { name: "Fermented Chilli", desc: "", price: "6", tag: "GF" },
      { name: "Red Wine Jus", desc: "", price: "7" },
    ],
  },
  {
    title: "Sharing Steak",
    subtitle: "Serves Two",
    items: [
      { name: "O'Connor Tomahawk 1.3kg MB3+", desc: "Served with wagyu potato, simple salad & broccolini, with choice of any two sauces. Recommended: Medium Rare / Medium", price: "219" },
    ],
  },
  {
    title: "Times Carnivore Sharing Board",
    subtitle: "Serves Two. Served with choice of two sides (chips / simple salad / mash) & one sauce.",
    items: [
      { name: "Carnivore Board", desc: "Wagyu rump (200g), choice of half pork or beef ribs, slow roasted pork belly, flame grilled half chicken", price: "169" },
    ],
  },
  {
    title: "Flamed Grilled Skewers (GF)",
    subtitle: "Served with a choice of one side, chips or salad, and a sauce.",
    items: [
      { name: "Peri Peri Chicken Thigh", desc: "Marinated w/ peri peri yoghurt, onion, capsicum, finished with peri peri glaze", price: "44", tag: "GF" },
      { name: "Pork Belly", desc: "Glazed with Szechuan honey, almond, shallot crumb", price: "44", tag: "GF" },
      { name: "Harissa Lamb", desc: "Marinated lamb fillet, pickled onion, red capsicum, lemon & rosemary glaze", price: "54", tag: "GF" },
      { name: "Skewer Combo - Choice of Any Two", desc: "", price: "98" },
      { name: "Skewer Combo - Choice of Any Three", desc: "", price: "142" },
    ],
  },
  {
    title: "Legendary Ribs",
    subtitle: "Slow cooked for 12 hours, glazed with homemade ribs basting for a flavourful finish. Served with your choice of one side, chips OR salad.",
    items: [
      { name: "Pork Ribs - Half Rack", desc: "", price: "57", tag: "GFO" },
      { name: "Pork Ribs - Full Rack", desc: "", price: "79", tag: "GFO" },
      { name: "Beef Ribs - Half Rack", desc: "", price: "57", tag: "GFO" },
      { name: "Beef Ribs - Full Rack", desc: "", price: "79", tag: "GFO" },
      { name: "Pork & Beef - Half of Each", desc: "", price: "98", tag: "GFO" },
    ],
  },
  {
    title: "Seasonal Favourites",
    items: [
      { name: "Slow Cooked Beef Cheek", desc: "Creamy mash, honey glazed carrot, kale, pickled onion, pancetta, red wine jus", price: "44", tag: "GF" },
      { name: "Crispy Skin Barramundi", desc: "Baby potato, spinach, shallots, heirloom tomato, laksa sauce, fried curry leaves", price: "46", tag: "GFO" },
      { name: "Flame Grilled Chicken", desc: "Fermented chilli glaze, romesco sauce, crispy kale, pickled chilli & shallot, served with chips", price: "39", tag: "GFO" },
      { name: "Wagyu Burger", desc: "Lettuce, pickled cucumber, braised onions, tomato, burger sauce & melted cheese, served with chips", price: "36", tag: "GFO" },
      { name: "Classic Caesar Salad", desc: "Cos lettuce, bacon, anchovies, garlic croutons, parmesan, creamy caesar dressing and soft boiled egg. +Chicken $6", price: "32", tag: "GFO" },
      { name: "Nasi Goreng", desc: "Indonesian style fried rice with pork, chicken, prawn, green vegetables, chilli, coriander, bean sprout, fried egg, crispy shallots", price: "39", tag: "GFO" },
      { name: "Duo of Duck", desc: "Pot-roasted duck leg & breast, cauliflower purée, brussels sprout, cherry jus", price: "59" },
    ],
  },
  {
    title: "Pastas & Risottos",
    items: [
      { name: "Blue Spanner Crab Risotto", desc: "Crab meat, scallops, crayfish bisque, prawn meat, chilli, confit garlic, chives, extra virgin olive oil", price: "46", tag: "GF" },
      { name: "Lobster Linguine", desc: "Half lobster, prawns, calamari, scallops, confit cherry tomato, dill, hint of chilli, lobster bisque", price: "54", tag: "GFO" },
      { name: "Times' Signature Gnocchi", desc: "Butter fried gnocchi with roasted pumpkin, sage cream, touch of Napoli, garlic, parmesan", price: "42", tag: "VG" },
      { name: "Ricotta and Spinach Agnolotti", desc: "Chives, saffron butter emulsion", price: "42", tag: "VG" },
      { name: "Carbonara", desc: "Pancetta, free range yolk, spring onion, Grana Padano cheese, with house made linguine", price: "42", tag: "GFO" },
      { name: "Lamb Ragu Pappardelle", desc: "Slow cooked lamb shoulder in rich San Marzano tomato for 8 hours, chilli, olives, chimichurri, Grana Padano", price: "44", tag: "GFO" },
      { name: "Mushroom & Truffle Risotto", desc: "Black truffle tapenade, basil, stracciatella, pistachio. +Chicken $4", price: "42", tag: "GF" },
    ],
  },
  {
    title: "Favourite Seasonal Sides",
    items: [
      { name: "Wagyu Roast Potatoes", desc: "Roasted potatoes with rosemary, wagyu tallow, parmesan cheese & black truffle aioli", price: "16", tag: "GF" },
      { name: "Broccolini", desc: "Fermented chilli butter, almonds", price: "17", tag: "VG, GFO" },
      { name: "Honey Roasted Pumpkin", desc: "Chilli dressing, coriander yoghurt, salsa verde, fresh herbs, toasted pumpkin seeds, pomegranate", price: "16", tag: "GF" },
      { name: "Beetroot Salad", desc: "Roasted beetroots, goat cheese, onion, honey balsamic dressing, candied walnut, herbs & pomegranate", price: "18", tag: "VG, VO, GF" },
      { name: "Brussels Sprouts", desc: "Burnt butter, hot honey glaze, pomegranate, herbs & crispy pancetta", price: "18", tag: "VGO, VO" },
      { name: "Simple Salad", desc: "Mixed leaves, heirloom tomato, cucumber, radish, onion, verjuice dressing, pecorino", price: "12", tag: "VO, GF" },
      { name: "Mash", desc: "", price: "12", tag: "GF" },
      { name: "Chips", desc: "", price: "10" },
    ],
  },
  {
    title: "For Our Little Guests",
    subtitle: "Served with chips",
    items: [
      { name: "Wagyu Burger", desc: "", price: "19" },
      { name: "Grilled Chicken Tenders", desc: "", price: "16" },
      { name: "Pork Ribs", desc: "", price: "22" },
      { name: "Linguine", desc: "Butter & Napoli sauce", price: "15" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Strawberry & Passion Fruit Pavlova", desc: "Passionfruit, strawberry sorbet, lime & elderflower cream, sumac macerated berries", price: "22" },
      { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise", price: "22" },
      { name: "Times' Signature S'mores", desc: "Layers of melted chocolate, burnt coffee marshmallow, vanilla ice cream, caramel mousse", price: "23" },
      { name: "Crème Brûlée", desc: "Vanilla bean crème brûlée served with vanilla biscotti, mocha cream & fresh berries", price: "22", tag: "GFO" },
      { name: "Duo of Sorbet", desc: "Strawberry / green apple, fresh berries", price: "14", tag: "V, GF" },
      { name: "Desserts Board to Share", desc: "Choice of any three desserts from above", price: "59" },
    ],
  },
];

// ===== LUNCH MENU =====
export const lunchPackages = {
  subtitle: "Monday to Friday 11:30am – 3:00pm",
  intro: "Not available on weekends and public holidays",
  items: [
    { name: "Mains & House Drink Only", desc: "", price: "39" },
    { name: "Two Courses with House Drink", desc: "", price: "49" },
    { name: "Three Courses with House Drink", desc: "", price: "56" },
  ] as MenuItem[],
};

export const lunchSections: MenuSection[] = [
  {
    title: "Entrée",
    subtitle: "Choose one",
    items: [
      { name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, garlic & herb butter, parmesan, rosemary", price: "", tag: "VG" },
      { name: "Mushroom & Truffle Arancini", desc: "Black truffle aioli, parmesan cheese, Davidson plum", price: "", tag: "VG" },
      { name: "Times Bruschetta", desc: "Avocado, Roma tomato, Spanish onion, basil with vincotto, extra virgin olive oil, Grana Padano cheese on grilled sourdough", price: "", tag: "VG, GFO" },
      { name: "Signature Fried Calamari", desc: "Spiced flour mix, Vietnamese dipping sauce & herbs", price: "", tag: "GFO" },
    ],
  },
  {
    title: "Mains",
    subtitle: "Choose one",
    items: [
      { name: "House-Made Chicken Parmigiana", desc: "Tender crumbed chicken breast, topped with ham, Napoli sauce, and melted mozzarella & tasty cheese, served with a side of chips & salad", price: "" },
      { name: "Wagyu Rump 200gm", desc: "Basted in Times' signature basting. Served with the choice of chips or salad, and a sauce", price: "", tag: "GFO" },
      { name: "Wagyu Steak Roll", desc: "Grilled & sliced wagyu rump, lettuce, rocket, onion, melted cheese, dijon mustard, horseradish mayo, chimichurri on a toasted panini bread, served with chips", price: "" },
      { name: "Herb Crumbed Barramundi", desc: "Lime aioli, lemon, served with crispy chips or salad", price: "" },
      { name: "Seafood Linguine", desc: "Sautéed tiger prawn meat, scallops, calamari, lobster bisque, cherry tomatoes, capers, garlic, touch of chilli", price: "" },
      { name: "Nasi Goreng", desc: "Indonesian-style fried rice with pork, chicken, prawn, green vegetables, chilli, coriander, bean sprout, fried egg & crispy shallots", price: "", tag: "VGO, GFO" },
      { name: "Carbonara", desc: "Pancetta, free range egg yolk, spring onion, Grana Padano cheese, black cracked pepper and pecorino with house made linguine", price: "", tag: "GFO" },
      { name: "Wagyu Burger", desc: "Mayura wagyu beef patty, lettuce, pickled cucumber, braised onions, tomato, burger sauce & melted cheese on toasted brioche bun, served with chips", price: "", tag: "GFO" },
      { name: "Flame Grilled Chicken", desc: "Fermented chilli glaze, romesco sauce, crispy kale, pickled chilli & shallot, served with chips", price: "", tag: "GFO" },
      { name: "Classic Caesar Salad", desc: "Cos lettuce, bacon, anchovies, garlic croutons, parmesan, creamy caesar dressing & soft boiled egg", price: "", tag: "GFO" },
    ],
  },
  {
    title: "Desserts",
    subtitle: "Choose one",
    items: [
      { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise", price: "" },
      { name: "Duo of Sorbet", desc: "Strawberry / green apple, fresh berries", price: "", tag: "V, GF" },
    ],
  },
];

// ===== COCKTAILS =====
export const cocktailSections: MenuSection[] = [
  {
    title: "Times Signature Cocktails",
    items: [
      { name: "Bumble-Berry", desc: "Vodka, strawberry liqueur, wonderfoam, simple syrup, citrus", price: "24" },
      { name: "Fig & Lime Daiquiri", desc: "Rum, fig liqueur, citrus, simple syrup", price: "20" },
      { name: "Strawberry Matcha", desc: "Licor 43, muscat, port, matcha, lactic acid", price: "24" },
      { name: "Ultimate Long Island", desc: "Tequila, vodka, rum, gin, triple sec, citrus, coke", price: "29" },
      { name: "Bees Knees", desc: "Gin, Cointreau, lemon, honey", price: "20" },
      { name: "Nova Verse", desc: "Sloe gin, verjuice, muscat, citrus, simple syrup, wonderfoam", price: "24" },
      { name: "Clarified New York Sour", desc: "Whiskey, citrus, simple syrup, lactic acid", price: "22" },
      { name: "Sea Blast", desc: "Rum, Blue Curacao, orange cordial, citrus", price: "22" },
      { name: "Atomic Melon", desc: "Gin, Midori, citrus, simple syrup", price: "20" },
      { name: "Summer Days", desc: "Vanilla vodka, Chambord, lychee liqueur, pineapple juice, soda water", price: "25" },
      { name: "Italian Passion", desc: "Gin, Aperol, passion fruit & agave syrup, citrus, wonderfoam", price: "22" },
      { name: "Off Dry Martini", desc: "With floating basil oil — vodka, Limoncello, Sauternes, basil oil", price: "25" },
    ],
  },
  {
    title: "Classic Cocktails",
    items: [
      { name: "Espresso Martini", desc: "House vodka, Kahlúa, simple syrup and fresh espresso shot", price: "20" },
      { name: "Mojito", desc: "Bacardi rum, syrup, lime juice, fresh mint and soda water (strawberry / passion fruit / classic)", price: "20" },
      { name: "Margarita", desc: "El Jimador tequila, triple sec, (Tabasco sauce), simple syrup and lime juice (classic / frozen / spicy)", price: "20" },
      { name: "Daiquiri", desc: "Bacardi rum, (strawberry/lychee liqueur), syrup and lime juice (strawberry / lychee / classic)", price: "21" },
      { name: "Pornstar Martini", desc: "House vanilla vodka, Passoã, passion fruit pulp, lime juice, simple syrup and prosecco", price: "21" },
      { name: "Sours", desc: "Spirit of choice, lemon juice, simple syrup and wonder foam (whiskey / amaretto / bourbon / Pisco / gin)", price: "21" },
      { name: "Cosmopolitan", desc: "House vodka, triple sec, cranberry juice and lime juice", price: "20" },
      { name: "Long Island Iced Tea", desc: "Vodka, rum, gin, tequila, triple sec, simple syrup, lemon juice and coke", price: "21" },
      { name: "Spritz", desc: "Spirit of choice, prosecco, soda water and orange wedge (Aperol / Campari)", price: "18" },
    ],
  },
  {
    title: "Mocktails",
    items: [
      { name: "Tropical Lemonade", desc: "Blueberry, passion fruit and lemonade", price: "12" },
      { name: "Lemon Cheesecake", desc: "House made orange cordial, pineapple juice, lychee syrup, ver juice and wonder foam", price: "16" },
      { name: "Fruit Splash", desc: "Passion fruit and orgeat syrup, pineapple juice, raspberry cordial and soda water", price: "15" },
      { name: "Amaretti Sour", desc: "Lyre's Amaretti, citrus, simple syrup and wonder foam", price: "15" },
      { name: "Passionfruit and Lychee Mojito", desc: "Passion fruit pulp, lychee syrup, citrus, fresh mint and soda water", price: "15" },
    ],
  },
];

// ===== DRINKS =====
export const drinksSections: MenuSection[] = [
  {
    title: "Gin",
    subtitle: "30ml",
    items: [
      { name: "Begin", desc: "", price: "10" },
      { name: "Gordon", desc: "", price: "10" },
      { name: "Bombay Sapphire", desc: "", price: "11" },
      { name: "Hendrick's", desc: "", price: "13" },
      { name: "Four Pillars Rare Dry", desc: "", price: "12" },
      { name: "Four Pillars Bloody Shiraz", desc: "", price: "14" },
    ],
  },
  {
    title: "Vodka",
    subtitle: "30ml",
    items: [
      { name: "Arktika Vodka", desc: "", price: "10" },
      { name: "Arktika Vanilla", desc: "", price: "10" },
      { name: "Grey Goose", desc: "", price: "14" },
    ],
  },
  {
    title: "Tequila",
    subtitle: "30ml",
    items: [
      { name: "El Jimador Blanco", desc: "", price: "10" },
      { name: "El Jimador Reposado", desc: "", price: "11" },
      { name: "Monte Alban Mezcal", desc: "", price: "11" },
      { name: "1800 Coconut", desc: "", price: "14" },
      { name: "Don Julio Blanco", desc: "", price: "20" },
      { name: "Don Julio Reposado", desc: "", price: "22" },
    ],
  },
  {
    title: "Rum",
    subtitle: "30ml",
    items: [
      { name: "Bacardi", desc: "", price: "10" },
      { name: "Bundaberg", desc: "", price: "10" },
      { name: "Captain Morgan Gold", desc: "", price: "10" },
      { name: "Kraken Spiced Rum", desc: "", price: "12" },
      { name: "Appleton Estate Extra", desc: "", price: "14" },
    ],
  },
  {
    title: "Bourbon",
    subtitle: "30ml",
    items: [
      { name: "Southern Comfort", desc: "", price: "10" },
      { name: "Jim Beam", desc: "", price: "10" },
      { name: "Jack Daniels", desc: "", price: "10" },
      { name: "Wild Turkey", desc: "", price: "10" },
      { name: "Maker's Mark", desc: "", price: "11" },
      { name: "Woodford Reserve", desc: "", price: "12" },
    ],
  },
  {
    title: "Johnnie Walker",
    subtitle: "30ml",
    items: [
      { name: "Red Label", desc: "", price: "10" },
      { name: "Black Label", desc: "", price: "11" },
      { name: "Double Black", desc: "", price: "13" },
      { name: "Green Label", desc: "", price: "14" },
      { name: "Gold Label", desc: "", price: "15" },
      { name: "Blue Label", desc: "", price: "30" },
    ],
  },
  {
    title: "Whiskey",
    subtitle: "30ml",
    items: [
      { name: "Bond 7 Australian Blended", desc: "", price: "8" },
      { name: "Canadian Club", desc: "", price: "10" },
      { name: "Jameson Irish", desc: "", price: "10" },
      { name: "Monkey Shoulder", desc: "", price: "10" },
      { name: "Suntory", desc: "", price: "12" },
      { name: "Glenfiddich 12YO", desc: "", price: "12" },
      { name: "Glenlivet 12YO", desc: "", price: "13" },
      { name: "Bowmore 12YO", desc: "", price: "14" },
      { name: "Talisker 10YO", desc: "", price: "14" },
      { name: "Lagavulin 8YO", desc: "", price: "16" },
      { name: "Chivas Regal 18YO", desc: "", price: "17" },
      { name: "The Dalmore 12YO", desc: "", price: "20" },
      { name: "Bladnoch", desc: "", price: "22" },
      { name: "Symphony No.1", desc: "", price: "28" },
      { name: "Chivas Royal Salute", desc: "", price: "32" },
    ],
  },
  {
    title: "Aperitif / Digestif",
    subtitle: "30ml",
    items: [
      { name: "Aperol", desc: "", price: "9" },
      { name: "Campari", desc: "", price: "9" },
      { name: "Amaro Montenegro", desc: "", price: "10" },
      { name: "Disaronno Amaretto", desc: "", price: "10" },
      { name: "Drambuie", desc: "", price: "10" },
      { name: "Nonino Moscato Grappa", desc: "", price: "10" },
    ],
  },
  {
    title: "Brandy & Cognacs",
    items: [
      { name: "St Agnes Brandy", desc: "", price: "10" },
      { name: "St Remy VSOP", desc: "", price: "11" },
      { name: "Hennessy VS", desc: "", price: "12" },
      { name: "Hennessy VSOP", desc: "", price: "14" },
    ],
  },
  {
    title: "Liqueur",
    items: [
      { name: "Baileys", desc: "", price: "8" },
      { name: "Chambord", desc: "", price: "10" },
      { name: "Cointreau", desc: "", price: "11" },
      { name: "Fireball", desc: "", price: "10" },
      { name: "Frangelico", desc: "", price: "10" },
      { name: "Galliano Black Sambuca", desc: "", price: "10" },
      { name: "Galliano Vanilla", desc: "", price: "10" },
      { name: "Galliano White Sambuca", desc: "", price: "10" },
      { name: "Kahlua", desc: "", price: "9" },
      { name: "Limoncello Contessa", desc: "", price: "9" },
      { name: "Malibu", desc: "", price: "9" },
      { name: "Midori", desc: "", price: "10" },
      { name: "Passoa Passion Fruit", desc: "", price: "9" },
      { name: "Pimms", desc: "", price: "10" },
      { name: "Pisco", desc: "", price: "11" },
      { name: "Soho Lychee Liqueur", desc: "", price: "9" },
    ],
  },
  {
    title: "Ciders",
    items: [
      { name: "Somersby Apple Cider", desc: "", price: "11" },
      { name: "Somersby Pear Cider", desc: "", price: "10" },
    ],
  },
  {
    title: "Beer on Tap",
    items: [
      { name: "House Draught", desc: "Unique house recipe. Schooner $11 · Pint $14 · Jug $28", price: "11+" },
      { name: "House Selection", desc: "Seasonal rotation. Schooner $11 · Pint $14 · Jug $28", price: "11+" },
      { name: "Stone & Wood Pacific Ale", desc: "Schooner $12 · Pint $16 · Jug $30", price: "12+" },
      { name: "Kirin Ichiban Lager", desc: "Schooner $13 · Pint $18 · Jug $32", price: "13+" },
    ],
  },
  {
    title: "Beers by the Bottle",
    items: [
      { name: "Carlton Draught", desc: "", price: "9.5" },
      { name: "Carlton Dry", desc: "", price: "9" },
      { name: "Corona", desc: "", price: "10" },
      { name: "Great Northern Super Crisp", desc: "", price: "9" },
      { name: "Victoria Bitter", desc: "", price: "9" },
      { name: "Asahi Super Dry", desc: "", price: "9.5" },
      { name: "Cascade Light", desc: "", price: "8.5" },
      { name: "Heineken 0", desc: "Non-alcoholic", price: "8" },
    ],
  },
  {
    title: "Cold Drinks",
    items: [
      { name: "Coca Cola / Coke No Sugar / Sprite / Fanta", desc: "Kids $4 · Regular $5 · Large $7 · Jug $13", price: "5" },
      { name: "Dry Ginger Ale / Tonic Water / Soda Water", desc: "Kids $4 · Regular $5.50 · Large $8 · Jug $14", price: "5.50" },
      { name: "Soda Lime Bitters / Lemon Lime Bitters / Raspberry Lemonade", desc: "Kids $4 · Regular $6 · Large $8 · Jug $14", price: "6" },
      { name: "Juice", desc: "Apple / Cranberry / Orange / Pineapple. Kids $4 · Regular $7", price: "7" },
      { name: "Milkshake", desc: "Banana / Blue Heaven / Caramel / Chocolate / Strawberry / Vanilla. Kids $4.50 · Regular $7", price: "7" },
      { name: "Iced Chocolate", desc: "", price: "8" },
      { name: "Iced Coffee", desc: "", price: "8" },
      { name: "Iced Mocha", desc: "", price: "8" },
    ],
  },
  {
    title: "Hot Drinks",
    items: [
      { name: "Short Macchiato", desc: "", price: "4" },
      { name: "Long Macchiato", desc: "", price: "5" },
      { name: "Espresso", desc: "", price: "4" },
      { name: "Long Black", desc: "", price: "5" },
      { name: "Piccolo", desc: "", price: "4" },
      { name: "Latte / Cappuccino / Flat White", desc: "Upgrade Mug Size +$1 · Extra Shot / Decaf / Mocha +$0.50", price: "5" },
      { name: "Hot Chocolate", desc: "Milk Chocolate / White Chocolate", price: "5" },
      { name: "Matcha Latte", desc: "", price: "5" },
      { name: "Spiced Chai (Powder)", desc: "", price: "6" },
      { name: "Prana Chai (Leaves)", desc: "", price: "7" },
      { name: "Affogato", desc: "+Add favourite liqueur (Baileys / Kahlua / Frangelico) $8", price: "7" },
      { name: "Tea Varieties by the Pot", desc: "English Breakfast / Earl Grey / Green / Peppermint / Lemongrass / Chamomile Blossom", price: "5" },
    ],
  },
];

// ===== WINE =====
export const wineSections: MenuSection[] = [
  {
    title: "Sparkling",
    intro: "Every exceptional dining experience tells a story. From delicate bubbles to rich complexity, each bottle elevates your dining journey.",
    items: [
      { name: "Taittinger Champagne", desc: "Reims, France", price: "BTL 130" },
      { name: "Balgownie Brut", desc: "Yarra Valley, VIC", price: "BTL 60" },
      { name: "D'Sas Prosecco", desc: "King Valley. Fresh pear and apple aromas, followed by citrus and sherbet", price: "10 / 50" },
    ],
  },
  {
    title: "Rosé",
    items: [
      { name: "Hahndorf Hill", desc: "Adelaide Hills, SA", price: "BTL 65" },
      { name: "La Galope", desc: "Gascony, France. Classic dry rosé with hints of summer berries, grapefruit and watermelon, light bodied", price: "12 / 55" },
    ],
  },
  {
    title: "Sauvignon Blanc",
    intro: "Intense aromatic profile with green apple, lime, passion fruit and gooseberry, with signature herbaceous notes.",
    items: [
      { name: "Single File", desc: "Great Southern, WA", price: "BTL 75" },
      { name: "Babich Black Label", desc: "Marlborough, NZ. Full and juicy, gooseberry, passion fruit and blackcurrant notes with sweet herbs", price: "12 / 56" },
      { name: "Juniper Original White Semillon", desc: "Margaret River, WA", price: "BTL 50" },
    ],
  },
  {
    title: "Pinot Grigio / Gris",
    intro: "From Italy's crisp, light style to France's richer, more aromatic expressions with notes of stone fruit and spice.",
    items: [
      { name: "Maude Pinot Gris", desc: "Mansfield, VIC", price: "BTL 60" },
      { name: "Underground Pinot Grigio", desc: "Mornington Peninsula, VIC", price: "BTL 56" },
      { name: "Cantina Tollo Rocca Ventosa Pinot Grigio", desc: "Abruzzo, Italy. Traditional techniques with citrus, apple, pear and spice flavours", price: "10 / 48" },
    ],
  },
  {
    title: "Chardonnay",
    items: [
      { name: "Seville Estate", desc: "Yarra Valley, VIC", price: "BTL 86" },
      { name: "Single File", desc: "Great Southern, WA", price: "BTL 76" },
      { name: "Oscars Folly", desc: "Yarra Valley, VIC. Stone fruit and citrus notes", price: "12 / 56" },
    ],
  },
  {
    title: "Riesling",
    items: [
      { name: "Rockbare", desc: "Clare Valley, SA", price: "BTL 70" },
      { name: "Lock and Key", desc: "Hilltops, NSW. Crisp, dry and juicy with notes of fresh green apples and sweet pears", price: "12 / 56" },
    ],
  },
  {
    title: "Moscato",
    items: [
      { name: "JJ Hahn", desc: "Barossa Valley, SA. Floral, orange blossom notes, tasteful acidity with sweet rose water undertones", price: "10 / 45" },
    ],
  },
  {
    title: "Cabernet Sauvignon",
    intro: "Known as the 'king of red grapes,' Cabernet Sauvignon thrives in warm, gravelly soils from Bordeaux to Australia.",
    items: [
      { name: "Brands Laira 1968", desc: "Coonawarra, SA. Expressive blackberries and mulberries, deep crimson and cassis, elegant and dark (poured by Coravin)", price: "18 / 72" },
      { name: "Penley Estate 'Tolmer'", desc: "Coonawarra, SA", price: "BTL 60" },
      { name: "Penny Hill 'Edwards Road'", desc: "McLaren Vale, SA. Dark bramble fruits, dark milk chocolate, supple and smooth", price: "12 / 60" },
    ],
  },
  {
    title: "Pinot Noir",
    intro: "One of the oldest grape varieties, delicate yet complex, ranging from red cherry and raspberry to earthy notes.",
    items: [
      { name: "Luna Estate 'Blue Rock'", desc: "Martinborough, NZ", price: "BTL 96" },
      { name: "Seville Estate", desc: "Yarra Valley, VIC", price: "BTL 72" },
      { name: "Longboard", desc: "Bendigo, VIC", price: "BTL 70" },
      { name: "Balgownie 'Black Label'", desc: "Yarra Valley, VIC. Complex, toasty oak notes, strawberry and forest floor undertones", price: "12 / 60" },
    ],
  },
  {
    title: "Shiraz",
    items: [
      { name: "Seppeltsfield Northing", desc: "Barossa Valley, SA", price: "BTL 130" },
      { name: "Woodstock 'Pilots View'", desc: "McLaren Vale, SA", price: "BTL 72" },
      { name: "Buckshot", desc: "Heathcote, VIC", price: "BTL 68" },
      { name: "Turkey Flat 'Butchers Block'", desc: "Barossa Valley, SA. Medium bodied, dark berries, supple tannins and flint", price: "14 / 60" },
      { name: "Tellurian 'Redline'", desc: "Heathcote, VIC. Medium bodied, vibrant red fruits, cherries, savoury earthy notes", price: "13 / 54" },
    ],
  },
  {
    title: "Merlot",
    items: [
      { name: "JJ Hahn", desc: "Barossa Valley, SA", price: "12 / 55" },
      { name: "Juniper Cab Merlot", desc: "Margaret River, WA. Smooth and juicy, blackcurrant and plum overtones, balanced with fine-grain tannins", price: "10 / 45" },
    ],
  },
  {
    title: "Sangiovese",
    items: [
      { name: "Cantina Tollo Nativo", desc: "Abruzzo, Italy", price: "BTL 60" },
    ],
  },
  {
    title: "Dessert Wine",
    items: [
      { name: "Morris of Rutherglen 'Classic' Muscat", desc: "Rutherglen, VIC. Sweet, full, ripe raisin and caramel flavours", price: "12" },
      { name: "Sauternes Audinet", desc: "France. Complex, long aged and golden, sweet and full", price: "12" },
      { name: "Taylor's 'Fine Ruby' Port", desc: "Portugal. Chocolate notes, strong fragrant spices, full and dark", price: "12" },
    ],
  },
];

// ===== SHARED SAUCES (used by set menus & chef's table) =====
export const setMenuSauces = [
  { name: "Creamy Mushroom", desc: "" },
  { name: "Green Peppercorn", desc: "" },
  { name: "Red Wine Jus", desc: "" },
  { name: "Fermented Chilli", desc: "", tag: "GF" },
  { name: "Chimichurri", desc: "", tag: "GF" },
  { name: "Béarnaise", desc: "", tag: "GF" },
  { name: "Garlic & Herb Butter", desc: "", tag: "GF" },
  { name: "Aioli", desc: "" },
];

// ===== CHEF'S TABLE =====
export const chefsTableSections: MenuSection[] = [
  {
    title: "Times Sharing Experience",
    subtitle: "$119 per person, designed for 2 people",
    items: [],
  },
];

export const chefsTableCourses = [
  {
    course: "On Arrival",
    items: [
      { name: "Welcome Drink", desc: "A glass of house selected wine, tap beer, cocktail or soft drink per person" },
    ],
  },
  {
    course: "Pre-Starter",
    items: [
      { name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, garlic & herb butter, parmesan, rosemary", tag: "VG" },
    ],
  },
  {
    course: "Starters",
    subtitle: "Your choice of",
    items: [
      { name: "Mushroom & Truffle Arancini", desc: "Black truffle aioli, parmesan cheese, Davidson plum", tag: "VG" },
      { name: "Signature Fried Calamari", desc: "Spiced flour mix, Vietnamese dipping sauce & herbs", tag: "GFO" },
    ],
  },
  {
    course: "Mains",
    subtitle: "To share",
    items: [
      { name: "Times Carnivore Sharing Board", desc: "Wagyu rump (200g), choice of half pork or beef ribs, slow roasted pork belly, flame grilled half chicken. Served with choice of two sides (chips / simple salad / mash) & one sauce" },
    ],
  },
  {
    course: "Sauces",
    items: setMenuSauces,
  },
  {
    course: "Desserts",
    subtitle: "Your choice of",
    items: [
      { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
      { name: "Duo of Sorbet", desc: "Strawberry / green apple, fresh berries", tag: "V, GF" },
    ],
  },
];

// ===== CHEF'S TABLE: CHRISTMAS FEAST =====
export const christmasFeastSections: MenuSection[] = [
  {
    title: "Times Sharing Christmas Feast",
    subtitle: "$149 per person, designed for 2 people",
    items: [],
  },
];

export const christmasFeastCourses = [
  {
    course: "On Arrival",
    items: [
      { name: "Welcome Drink", desc: "A glass of champagne / white or red wine / beer / soft drink" },
    ],
  },
  {
    course: "Ocean Feast",
    subtitle: "To share",
    items: [
      { name: "Premium Cold Seafood Platter", desc: "Chef's selection of freshest seafood, ½ lobster, 6 Sydney rock oysters, 4 king prawns, Marie Rose, hot sauce" },
    ],
  },
  {
    course: "Mains to Share",
    subtitle: "Your choice of",
    items: [
      { name: "O'Connor T-Bone 800gm MB:3+", desc: "150 days grain fed. Recommended: Medium-rare / Medium. Basted in Times' Signature glaze, served with choice of 2 sauces", tag: "GFO" },
      { name: "Roast Duo of Duck & Pork", desc: "Pot-roasted duck leg & breast, crispy kale, cherry jus, slow roasted pork belly" },
    ],
  },
  {
    course: "Sides to Share",
    items: [
      { name: "Brussels Sprouts", desc: "Burnt butter, hot honey glaze, pomegranate, herbs & crispy pancetta", tag: "VGO, VO" },
      { name: "Wagyu Roast Potatoes", desc: "Roasted potatoes with rosemary, wagyu tallow, parmesan cheese & black truffle aioli", tag: "GF" },
    ],
  },
  {
    course: "Sauces",
    items: setMenuSauces,
  },
  {
    course: "Desserts to Share",
    subtitle: "Your choice of",
    items: [
      { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
      { name: "Strawberry & Passion Fruit Pavlova", desc: "Passionfruit, strawberry sorbet, lime & elderflower cream, sumac macerated berries" },
    ],
  },
];

export const ultimateDiningCourses = [
  {
    course: "Pre-Starter",
    items: [
      { name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, glazed with garlic & herb butter, parmesan cheese, rosemary crisp", tag: "VG" },
    ],
  },
  {
    course: "Starters",
    subtitle: "Your choice of",
    items: [
      { name: "Fermented Chilli Prawns", desc: "Marinated Emerald tiger prawns & garlic, grilled dukkah bread", tag: "GFO" },
      { name: "Times Bruschetta", desc: "Avocado, Roma tomato, Spanish onion, basil with balsamic glaze, extra virgin olive oil, Grana Padano cheese on grilled sourdough", tag: "VG, GFO" },
    ],
  },
  {
    course: "Mains",
    subtitle: "Your choice of",
    items: [
      { name: "O'Connor Striploin 350gm MB:3+", desc: "150 days grain fed. Recommended: Medium-rare/Medium. Basted in Times' Signature glaze, served with the choice of chips or salad and one choice of sauce", tag: "GFO" },
      { name: "Mushroom and Ricotta Tortellini", desc: "Emerald prawn, sage brown butter, raisins, pine nuts", tag: "VGO" },
      { name: "Times Signature Gnocchi", desc: "Butter fried gnocchi with roasted pumpkin, sage cream sauce with a touch of Napoli, garlic and parmesan cheese", tag: "VG" },
      { name: "Crispy Skinned Salmon", desc: "Saffron fregola with prawn meat, scallops, capers, lobster bisque, garlic, chilli, dill, cherry tomatoes, fresh verde", tag: "GFO" },
      { name: "Half Rack of Beef or Pork Ribs", desc: "Slow cooked and finished on flame, grilled using our signature basting with butter. Served with a side simple salad or crunchy chips", tag: "GFO" },
    ],
  },
  {
    course: "Desserts",
    subtitle: "Your choice of",
    items: [
      { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
      { name: "Crème Brûlée", desc: "Vanilla bean crème brûlée served with vanilla biscotti, mocha cream & fresh berries", tag: "GFO" },
    ],
  },
];

// ===== SET MENUS =====
// Set Menu 1: $95 per person
export const setMenu1Courses = [
  {
    course: "Pre-Starter",
    items: [
      { name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, garlic & herb butter, parmesan, rosemary", tag: "VG" },
    ],
  },
  {
    course: "Starters",
    subtitle: "Your choice of",
    items: [
      { name: "Mushroom & Truffle Arancini", desc: "Black truffle aioli, parmesan cheese, Davidson plum", tag: "VG" },
      { name: "Signature Fried Calamari", desc: "Spiced flour mix, Vietnamese dipping sauce & herbs", tag: "GFO" },
      { name: "Hot Chicken Wings", desc: "Smoked black garlic and adobo sauce, furikake", tag: "GFO" },
    ],
  },
  {
    course: "Mains",
    subtitle: "Your choice of",
    items: [
      { name: "Wagyu Rump 250gm MB:5+", desc: "450 days grain fed. Recommended: Medium-rare / Medium. Basted in Times' Signature glaze, served with a choice of side (chips / salad) & a choice of sauce", tag: "GFO" },
      { name: "O'Connor Eye Fillet 200gm MB:2+", desc: "150 days grain fed. Recommended: Medium-rare. Basted in Times' Signature glaze, served with a choice of side (chips / salad) & a choice of sauce", tag: "GFO" },
      { name: "Flame Grilled Chicken", desc: "Fermented chilli glaze, romesco sauce, crispy kale, pickled chilli & shallot, served with chips", tag: "GFO" },
      { name: "Ricotta and Spinach Agnolotti", desc: "Chives, saffron butter emulsion", tag: "VG" },
      { name: "Crispy Skin Barramundi", desc: "Baby potato, spinach, shallots, heirloom tomato, laksa sauce, fried curry leaves", tag: "GFO" },
      { name: "Harissa Lamb Skewer", desc: "Marinated lamb fillet, pickled onion, red capsicum, lemon & rosemary glaze", tag: "GF" },
      { name: "Pork Belly", desc: "Glazed with Szechuan honey, almond, shallot crumb", tag: "GFO" },
    ],
  },
  {
    course: "Sauces",
    items: setMenuSauces,
  },
  {
    course: "Desserts",
    subtitle: "Choose one",
    items: [
      { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
      { name: "Duo of Sorbet", desc: "Strawberry / green apple, fresh berries", tag: "V, GF" },
    ],
  },
];

// Set Menu 2: $110 per person
export const setMenu2Courses = [
  {
    course: "Pre-Starter",
    items: [
      { name: "Garlic & Parmesan Bread", desc: "Fluffy brioche, garlic & herb butter, parmesan, rosemary", tag: "VG" },
    ],
  },
  {
    course: "Starters",
    subtitle: "Your choice of",
    items: [
      { name: "Fermented Chilli Prawns", desc: "Marinated Emerald tiger prawns & garlic, grilled dukkah bread", tag: "GFO" },
      { name: "Signature Fried Calamari", desc: "Spiced flour mix, Vietnamese dipping sauce & herbs", tag: "GFO" },
      { name: "Times Bruschetta", desc: "Avocado, Roma tomato, Spanish onion, basil with vincotto, extra virgin olive oil, Grana Padano cheese on grilled sourdough", tag: "VG, GFO" },
      { name: "Hot Chicken Wings", desc: "Smoked black garlic and adobo sauce, furikake", tag: "GFO" },
    ],
  },
  {
    course: "Mains",
    subtitle: "Your choice of",
    items: [
      { name: "O'Connor Striploin 350g MB:2+", desc: "150 days grain fed. Recommended: Medium. Basted in Times' Signature glaze, served with a choice of side (chips / salad) & a choice of sauce", tag: "GFO" },
      { name: "O'Connor Eye Fillet 200g MB:2+", desc: "150 days grain fed. Recommended: Medium Rare / Medium. Basted in Times' Signature glaze, served with a choice of side (chips / salad) & a choice of sauce", tag: "GFO" },
      { name: "Ricotta and Spinach Agnolotti", desc: "Chives, saffron butter emulsion", tag: "VG" },
      { name: "Crispy Skinned Barramundi", desc: "Baby potato, spinach, shallots, heirloom tomato, laksa sauce, fried curry leaves", tag: "GFO" },
      { name: "Pork Belly Skewer", desc: "Glazed with Szechuan honey, almond, shallot crumb", tag: "GFO" },
      { name: "Flame Grilled Chicken", desc: "Fermented chilli glaze, romesco sauce, crispy kale, pickled chilli & shallot, served with chips", tag: "GFO" },
    ],
  },
  {
    course: "Sauces",
    items: setMenuSauces,
  },
  {
    course: "Desserts",
    subtitle: "Your choice of",
    items: [
      { name: "Sticky Date Pudding", desc: "Salted caramel ice cream, caramel sauce, hazelnut praline and cinnamon crème anglaise" },
      { name: "Crème Brûlée", desc: "Vanilla bean crème brûlée served with vanilla biscotti, mocha cream & fresh berries" },
    ],
  },
];


// ===== BEVERAGE PACKAGES =====
export const beveragePackages = [
  {
    title: "2 Hour Package",
    price: "$55/person",
    includes: [
      "House White – Rochford Sauvignon Blanc",
      "House Red – Underground Pinot Noir",
      "House Sparkling – Growers Gate Brut Cuvee",
      "House Tap Beer – Furphy Crisp Lager",
      "Cocktail on Arrival (1 per person): Times Spritz or Espresso Martini",
    ],
  },
  {
    title: "3 Hour Package",
    price: "$62/person",
    includes: [
      "House White – Rochford Sauvignon Blanc",
      "House Red – Underground Pinot Noir",
      "House Sparkling – Growers Gate Brut Cuvee",
      "House Tap Beer – Furphy Crisp Lager",
      "Cocktail on Arrival (1 per person): Times Spritz or Espresso Martini",
    ],
  },
  {
    title: "4 Hour Package",
    price: "$90/person",
    includes: [
      "House White – Rochford Sauvignon Blanc",
      "House Red – Underground Pinot Noir",
      "House Sparkling – Growers Gate Brut Cuvee",
      "House Tap Beer – Furphy Crisp Lager",
      "Cocktail on Arrival (1 per person): Times Spritz or Espresso Martini",
    ],
  },
];

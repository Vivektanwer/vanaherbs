// Product list from the catalogue. Add "image" paths here later (e.g. "/images/reetha.jpg").
export const products = [
  { name: "Reetha", botanical: "Sapindus mukorossi", form: "Whole / Dried / Powder", 
    image: "/images/reetha.webp"
   },
  { name: "Himalayan Pine Needles", botanical: "Pinus spp.", form: "Dried / Cut / Powder*", 
    image: "/images/pine-needles.webp" 
  },
  { name: "Nettle Leaves", botanical: "Urtica spp.", form: "Dried / Cut / Powder", 
    image: "/images/nettle.webp" 
  },
  { name: "Mugwort", botanical: "Artemisia spp.", form: "Dried / Cut / Powder", 
    image: "/images/mugwort.webp" 
  },
  { name: "Tejpatta", botanical: "Cinnamomum tamala", form: "Whole Leaf / Cut / Powder", 
    image: "/images/tejpatta.webp" 
  },
  { name: "Kutki", botanical: "Picrorhiza kurroa", form: "Whole / Cut / Powder", 
    image: "/images/kutki.webp" 
  },
  { name: "Indian Rose Petals", botanical: "Rosa spp.", form: "Dried / Whole / Powder", 
    image: "/images/rose-petals.webp" 
  },
  { name: "Giloy", botanical: "Tinospora cordifolia", form: "Whole Stem / Cut / Powder", 
    image: "/images/giloy.webp" 
  },
  { name: "Tulsi", botanical: "Ocimum tenuiflorum", form: "Dried / Cut / Powder*", 
    image: "/images/tulsi.webp" 
  },
  { name: "Brahmi", botanical: "Bacopa monnieri", form: "Dried / Cut / Powder", 
    image: "/images/brahmi.webp" 
  },
  { name: "Amla", botanical: "Phyllanthus emblica", form: "Dried / Whole", 
    image: "/images/amla.webp" 
  },
  { name: "Aloe Vera", botanical: "Aloe vera", form: "Whole", 
    image: "/images/aloe-vera.webp" 
  },
  { name: "Arjun / Arjuna", botanical: "Terminalia arjuna", form: "Dried / Whole / Powder", 
    image: "/images/arjun.webp" 
  },
  { name: "Harad", botanical: "Terminalia chebula", form: "Whole / De-seeded / Powder", 
    image: "/images/harad.webp" 
  },
  { name: "Ground Nuts", botanical: "Arachis hypogaea", form: "Whole / Without shell", 
    image: "/images/ground-nuts.webp" 
  },
  { name: "Haldi", botanical: "Curcuma longa", form: "Dried / Cut / Powder", 
    image: "/images/haldi.webp" 
  },
  { name: "Bhatt", botanical: "Glycine max", form: "Whole / Dried / Powder", 
    image: "/images/bhatt.webp" 
  },
];

export const steps = [
  { title: "Farmer / Collector", text: "Local farmers and forest collectors harvest botanicals in the right season." },
  { title: "Procurement", text: "We buy directly, giving fair and timely payment to mountain communities." },
  { title: "Sorting & Cleaning", text: "Material is graded by hand and cleaned of dust, stones and foreign matter." },
  { title: "Drying / Processing", text: "Careful drying, cutting or grinding to the form the buyer needs." },
  { title: "Quality Assessment", text: "Checks for moisture, purity and appearance against buyer specifications." },
  { title: "Packaging", text: "Clean, labelled, moisture-safe packs ready for transport." },
  { title: "B2B Delivery", text: "Dispatched to manufacturers and brands across India." },
];

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/products", label: "Products" },
  { to: "/custom-sourcing", label: "Custom Sourcing" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

// Paste your deployed Google Apps Script "Web app" URL here after deploying apps-script/Code.gs
export const FORM_URL = "https://script.google.com/macros/s/AKfycbzD2ARV3ZZ9XR8qmdfPLLxMz14iOR-I2uE6PaLXCMHaWUQkAfmJ-wcKg5A5iUr6LRWC/exec";

// Hero background video. Put your file in public/videos/ and set the path, e.g. "/videos/hero.mp4".
// Leave "" to show only the green gradient.
export const HERO_VIDEO = "/videos/118878-716230862_medium.mp4";
// Optional still image shown while the video loads, e.g. "/images/hero-poster.webp"
export const HERO_POSTER = "";

// Social links. Paste your page URL in "url". Empty ("") links are hidden automatically.
export const social = [
  { name: "Instagram", icon: "bi-instagram", url: "" },
  { name: "Facebook", icon: "bi-facebook", url: "" },
  { name: "LinkedIn", icon: "bi-linkedin", url: "" },
  { name: "YouTube", icon: "bi-youtube", url: "" },
  { name: "X (Twitter)", icon: "bi-twitter-x", url: "" },
  { name: "WhatsApp", icon: "bi-whatsapp", url: "https://wa.me/919654385462" },
];


// Video for the "See where it grows" section on the Home page. Leave "" to show the green placeholder.
export const SECTION_VIDEO = "/videos/17791400-hd_1920_1080_25fps.mp4";
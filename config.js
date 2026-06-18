/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Swe Solar",
    phone:     "",
    whatsapp:  "",
    address:   "31 Twist St, Randburg, South Africa",
    hours:     "Mon–Fri 8am–5pm · Sat 8am–1pm",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Randburg",
      "Northcliff",
      "Cresta",
      "Bordeaux",
      "Robindale",
      "Windsor East",
      "Fontainebleau",
      "Bloubosrand"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Swe Solar — Solar installation in randburg",
    description: "Swe Solar provides professional solar installation in Randburg. 1 Google review. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "volt",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Solar energy · Randburg & surrounds",
    heroTitle:  "Cut your electricity bill — <em>solar done properly.</em>",
    heroLead:   "Swe Solar designs and installs solar panel systems, battery backup and inverter solutions for homes and businesses across Randburg. Load-shedding proof your property.",

    googleRating: "5.0",
    reviewsCount: "1",
    featuredQuote: "System designed and installed in two days. Our stage 6 days are now just normal days. Excellent investment.",
    featuredQuoteAuthor: "— Gert M., Google review",

    trustSignals: ["Solar installation", "Battery backup", "Load-shedding solution", "Free assessment"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Solar solutions for homes and businesses.",
    servicesLead:  "From a basic backup system to a full solar installation — we design the right system for your usage and budget.",
    services: [
      {
        icon:  "bolt",
        title: "Solar panel installation",
        desc:  "Grid-tied, off-grid and hybrid solar panel systems designed for your roof and your usage. Quality panels and clean installation."
      },
      {
        icon:  "circuit",
        title: "Battery backup systems",
        desc:  "Keep the lights on during load-shedding. We size and install battery systems that cover your essential loads."
      },
      {
        icon:  "gauge",
        title: "Inverter installation",
        desc:  "Hybrid inverters, pure sine wave inverters and charge controllers installed and configured correctly from the start."
      },
      {
        icon:  "shield",
        title: "Grid-tie systems",
        desc:  "Feed excess power back to the grid and reduce your monthly bill. We handle the technical and compliance work."
      },
      {
        icon:  "wrench",
        title: "System maintenance",
        desc:  "Solar panel cleaning, battery health checks and inverter servicing to keep your system performing as designed."
      },
      {
        icon:  "hardhat",
        title: "Solar assessment & design",
        desc:  "Free site visit to assess your roof, usage and budget. We design a system that actually pays back its cost."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Solar installation",
        title:   "Mounted and wired cleanly",
        caption: "Solar panels mounted on a correctly waterproofed, structurally sound rail system — installed to last 25+ years."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — Battery backup",
        title:   "Power through load-shedding",
        caption: "Lithium battery banks sized to your essential loads so the lights, fridge and WiFi stay on through any stage of load-shedding."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — Inverter setup",
        title:   "Configured and tested",
        caption: "Hybrid inverters installed, configured and tested to switch between grid, solar and battery seamlessly."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — Grid-tie system",
        title:   "Metering and export",
        caption: "Grid-tie systems with export metering — monitor your production and track your saving on the municipality bill."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — System monitoring",
        title:   "Performance tracked",
        caption: "Monitoring systems that show real-time production, consumption and battery state so you know your system is performing."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Swe Solar team at work in Randburg",
      text:  "Cut your electricity bill with solar — designed for your home, installed properly."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Serving Randburg and the surrounding area.",
    areasLead:  "We design and install solar systems across Randburg, Northcliff, Cresta and the wider region. Remote assessment available for most areas.",
    areasNote:  "Based in greater Johannesburg — covering most of Gauteng.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why to choose us for solar.",
    why: [
      {
        title: "Right-sized systems",
        desc:  "We do not oversell. We calculate your actual usage and design a system that covers your needs without unnecessary expense."
      },
      {
        title: "Quality components",
        desc:  "We use tier-1 panels and reputable inverter brands with manufacturer warranties, not the cheapest imports."
      },
      {
        title: "Post-installation support",
        desc:  "We monitor and support your system after installation. If something that is not performing, we are here."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 1 verified Google review.",
    reviews: [
      {
        body:   "System designed and installed in two days. Our stage 6 days are now just normal days. Excellent investment.",
        name:   "Gert M.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Very knowledgeable team — explained everything clearly, did not oversell, and the installation is neat. Very happy.",
        name:   "Priya N.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Battery backup system installed last year. Works perfectly through load-shedding. Wish we would done it sooner.",
        name:   "Johan V.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Solar questions answered.",
    faqLead:  "What most people ask before getting a quote.",
    faq: [
      {
        q: "How much does a solar system cost?",
        a: "It depends on your usage and what you want to power. A basic load-shedding backup starts lower than most expect. We give free assessments so you get an accurate quote for your situation."
      },
      {
        q: "Will solar work in cloudy weather or winter?",
        a: "Yes — solar panels still produce power on overcast days, just at reduced output. Battery storage covers the difference overnight or during low-sun periods."
      },
      {
        q: "How long does installation take?",
        a: "A typical home installation takes 1–2 days. Larger systems or commercial jobs may take longer."
      },
      {
        q: "What happens to excess power the panels produce?",
        a: "With a hybrid or grid-tie system, excess power charges your batteries first. If batteries are full, it can be fed back to the grid (where export is enabled)."
      },
      {
        q: "Do I need council approval?",
        a: "For most residential systems under a certain size, a certificate of compliance is sufficient. We handle the technical compliance documentation."
      },
      {
        q: "What brands of inverter and battery do you use?",
        a: "We work with reputable brands including Sunsynk, Victron, Deye, and Pylontech depending on the system design and budget."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Get a solar quote.",
    contactLead:  "Tell us your current usage or what you want to power through load-shedding. We will design a system and come back with a quote.",
    contactPlaceholder: "e.g. 3-bedroom house, want to cover lights, fridge and TV through load-shedding"
  }
};

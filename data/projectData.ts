// /data/projectData.ts

export interface Project {
  id: number;
  title: string;
  category: string;
  stat: string;
  image: string;
  description: string;
  location: string;
  status: "Completed" | "In Progress" | "Proposed";
  area: string;
  year: string;
  features: string[];
  gallery?: string[];
}

export const projectCategories = [
  "All",
  "Buildings",
  "Hydro Power",
  "Bridges",
  "Town Planning",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Saif Mall & Residency",
    category: "Buildings",
    stat: "18 Stories",
    image: "/expertise-images/saifMall.png",
    description:
      "A landmark 18-story commercial and residential complex in Peshawar, featuring extensive retail space and luxury apartments.",
    location: "Peshawar, Pakistan",
    status: "In Progress",
    area: "525,000 sq ft",
    year: "2019-20",
    features: [
      "18 Stories",
      "Commercial & Residential",
      "Luxury Apartments",
      "Retail Mall",
      "Design & Top Supervision",
    ],
    gallery: [],
  },
  {
    id: 2,
    title: "The Landmark Peshawar",
    category: "Buildings",
    stat: "11 Stories",
    image: "/expertise-images/landmark.png",
    description: "A landmark mixed-use development on University Road combining premium commercial spaces with luxury residential units.",
    location: "University Road, Peshawar",
    status: "In Progress",
    area: "220,000 sq ft", // Estimated based on 11 floors
    year: "2024",
    features: [
      "11 Stories",
      "3 Basements",
      "Commercial Complex",
      "Luxury Apartments",
      "Prime Location",
    ],
    gallery: [],
  },

  {
    id: 3,
    title: "Diamond Mall, Peshawar",
    category: "Buildings",
    stat: "19 Stories",
    image: "/DiamondMall.PNG",
    description:
      "A 19-story high-rise building featuring 3 basements and multiple commercial floors, located on University Road, Peshawar.",
    location: "Peshawar, Pakistan",
    status: "In Progress",
    area: "449,537 sq ft",
    year: "2019-20",
    features: [
      "19 Stories",
      "Commercial Mall",
      "3 Basement Floors",
      "Design & Top Supervision",
    ],
    gallery: [],
  },
  {
    id: 4,
    title: "Capital Grand Heights",
    category: "Buildings",
    stat: "17 Stories",
    image: "/CapitalHeights.PNG",
    description:
      "A major 17-story residential and commercial complex in Islamabad, consisting of 3 towers.",
    location: "Islamabad, Pakistan",
    status: "In Progress",
    area: "600,000 sq ft",
    year: "2019-20",
    features: [
      "17 Stories",
      "3 Towers",
      "Commercial & Residential",
      "Design & Top Supervision",
    ],
    gallery: [],
  },
  {
    id: 5,
    title: "Burj Rabbani, Peshawar",
    category: "Buildings",
    stat: "20 Stories",
    image: "/expertise-images/burj-rabbani.jpg",
    description:
      "A 20-story commercial and residential complex with design and top supervision by Pyramids.",
    location: "Peshawar, Pakistan",
    status: "In Progress",
    area: "650,000 sq ft",
    year: "2020",
    features: [
      "20 Stories",
      "Commercial & Residential",
      "Design & Supervision",
    ],
    gallery: [],
  },
  {
    id: 6,
    title: "La Vita, Malam Jabba",
    category: "Buildings",
    stat: "G+7 Hotel",
    image: "/expertise-images/lavita.png",
    description:
      "A G+7 hotel apartment project consisting of 3 towers, managed and designed by Pyramids.",
    location: "Malam Jabba, Swat",
    status: "In Progress",
    area: "320,000 sq ft",
    year: "2021",
    features: [
      "G+7 Stories",
      "3 Towers",
      "Hotel Apartments",
      "Design & Supervision",
      "Construction Management",
    ],
    gallery: [],
  },
  {
    id: 7,
    title: "Saif Defence Mall",
    category: "Buildings",
    stat: "Proposal",
    image: "/expertise-images/SaifDefence.png",
    description:
      "A proposed futuristic mall for DHA Peshawar, designed by Pyramids.",
    location: "DHA Peshawar",
    status: "Proposed",
    area: "N/A",
    year: "N/A",
    features: ["Proposed Design", "Futuristic Architecture", "DHA Peshawar"],
    gallery: [],
  },
  {
    id: 8,
    title: "Town Heights",
    category: "Buildings",
    stat: "Commercial Complex",
    image: "/expertise-images/town-height.png",
    description:
      "Modern commercial complex featuring contemporary architectural design and premium business facilities.",
    location: "Peshawar, Pakistan",
    status: "Completed",
    area: "280,000 sq ft",
    year: "2022",
    features: [
      "Commercial Spaces",
      "Modern Architecture",
      "Premium Business Facilities",
      "Strategic Location",
    ],
    gallery: [],
  },
  {
    id: 9, // or 9, whichever is next in your list
    title: "Future World School DHA",
    category: "Buildings",
    stat: "4 Acres Campus",
    image: "/expertise-images/future-world.png",
    description: "KP's first purpose-built 21st-century iconic campus located in DHA Peshawar. This 4-acre thematic eduland features state-of-the-art facilities including a swimming pool, auditorium, and robotics labs.",
    location: "DHA Peshawar",
    status: "Completed",
    area: "175,000 sq ft",
    year: "2024",
    features: [
      "4-Acre Campus",
      "Swimming Pool & Gym",
      "Robotics Lab",
      "Auditorium",
      "Sustainable Architecture",
    ],
    gallery: [],
  },
  {
    id: 10,
    title: "Glorious Mall Peshawar",
    category: "Buildings",
    stat: "18 Stories",
    image: "/expertise-images/glorious-mall.png", // Rename your uploaded file to this
    description: "A premium 18-story mixed-use destination on University Road featuring luxury apartments, a commercial mall, and exclusive penthouses. ",
    location: "University Road, Peshawar",
    status: "In Progress",
    area: "450,000 sq ft", // Estimated based on similar 18-story projects in your list
    year: "2024",
    features: [
      "18 Stories",
      "Luxury Penthouses",
      "3-Level Basement Parking",
      "Biometric Security",
      "Earthquake Resistant",
    ],
    gallery: [],
  },
  {
    id: 11,
    title: "Rabbani Medical Complex",
    category: "Buildings",
    stat: "Medical Facility",
    image: "/expertise-images/rabbani-medical.png", // Rename your file to this
    description: "A specialized medical complex by Rabbani Associates featuring state-of-the-art clinics, diagnostic centers, and modern healthcare infrastructure.",
    location: "Peshawar, Pakistan", // Contextually likely Peshawar based on developer
    status: "In Progress",
    area: "150,000 sq ft", // Estimated based on typical medical complex scale
    year: "2023-24",
    features: [
      "Modern Medical Center",
      "Consultant Clinics",
      "Diagnostic Labs",
      "Emergency Services",
      "Basement Parking",
    ],
    gallery: [],
  },
  {
    id: 12,
    title: "Eden Heights",
    category: "Buildings",
    stat: "Luxury Living",
    image: "/expertise-images/eden-heights.png", // Rename your file to this
    description: "A contemporary high-rise development in Peshawar offering a blend of premium commercial outlets and luxury residential apartments. ",
    location: "Peshawar, Pakistan",
    status: "In Progress",
    area: "200,000 sq ft", // Estimated standard high-rise area
    year: "2024",
    features: [
      "Luxury Apartments",
      "Commercial Showrooms",
      "Modern Facade",
      "Rooftop Garden",
      "High-Speed Elevators",
    ],
    gallery: [],
  },
  {
    id: 13,
    title: "AFI Tower, Peshawar",
    category: "Buildings",
    stat: "18 Stories",
    image: "/expertise-images/AfiTower.PNG",
    description:
      "An iconic 18-story commercial and residential tower with a unique architectural design, one of the major high-rises in Peshawar.",
    location: "Peshawar, Pakistan",
    status: "In Progress",
    area: "650,000 sq ft",
    year: "2021",
    features: [
      "18 Stories",
      "Commercial & Residential",
      "Modern Architectural Design",
      "Iconic City Landmark",
    ],
    gallery: [],
  },

  {
    id: 14,
    title: "Marina Heights",
    category: "Buildings",
    stat: "11 Stories",
    image: "/expertise-images/marina-heights.png",
    description: "A premium 11-story mixed-use complex in University Town featuring luxury apartments, a shopping mall, and state-of-the-art amenities.",
    location: "University Town, Peshawar",
    status: "Completed",
    area: "350,000 sq ft", // Standardized estimate (or keep "9 Kanals")
    year: "2018",
    features: [
      "11 Stories",
      "Luxury Apartments",
      "Shopping Mall",
      "Biometric Security",
      "2 Basement Parking",
    ],
    gallery: [],
  },
  {
    id: 15,
    title: "Royal Enclave D.I. Khan",
    category: "Town Planning",
    stat: "1325 Kanals",
    image: "/expertise-images/royal-enclaves.png", // Rename your file to this
    description: "A master-planned gated community spanning 1325 Kanals in D.I. Khan. The project features modern urban planning with 806 residential plots, wide carpeted roads, and dedicated green zones.",
    location: "D.I. Khan, Pakistan",
    status: "In Progress",
    area: "1325 Kanals",
    year: "2023",
    features: [
      "Gated Community",
      "806 Residential Plots",
      "Modern Infrastructure",
      "Parks & Mosques",
      "Wide Road Network",
    ],
    gallery: [],
  },

];

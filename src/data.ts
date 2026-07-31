import { Department, IndustryEvent, StudentPlacement, Visitor, Notice, Testimonial } from './types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'firstyear',
    name: 'First Year B.Tech(Science & Humanities)',
    fullName: 'Department of First Year B.Tech (Science & Humanities)',
    description: 'Providing robust fundamental building blocks in Engineering Physics, Chemistry, Applied Mathematics, Professional Communications, and Basic Workshop practices for all incoming engineering undergraduates.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPJD8fc8vpf5pE5LIsdDodUxbsOXfvVdwrv-2gJhENaOFmfq9Q_s_L9jMhFrwV-tgUxLxmK2S6pc1AZKcvGjnPp3qMFnDT9Yy9CgwwWIESziVwcUbSQxxKUHQb_HLzytUjyypx0pRiSV-uNPMGgLYR3Xzx79WM92CzLJmKcVi_MJpJE-rkgtLCYPJFirdDTSbUjsUg4zRvGpdsbassHamvDmFy0G7Va8OJYsiht69xE3ahEVjEWj32nnE_iWYe0UdeL-vMbnY9rJKr6A',
    intake: 360,
    duration: '1 Year (First Year Foundation)',
    labs: [
      'Engineering Physics & Materials Science Lab',
      'Engineering Chemistry & Environmental Analysis Lab',
      'Language Laboratory & Professional English Studio',
      'Basic Electrical Engineering & Workshop Practice Hall'
    ],
    features: [
      'Personalized student mentorship with 1:15 counseling ratios.',
      'Comprehensive 3-week induction program for smoothing transition from higher secondary schools.',
      'Regular continuous assessment tests & expert remedial learning sessions.',
      'Strong emphasis on technical communication, professional writing, and code literacy.'
    ],
    averagePlacement: 'N/A (First Year)',
    hodName: 'Dr. Tasneem Khan'
  },
  {
    id: 'aids',
    name: 'Artificial Intelligence & Data science',
    fullName: 'Department of Artificial Intelligence & Data Science',
    description: 'Leading the AI revolution with deep learning, data analytics, predictive modeling, and intelligent cognitive systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7leppoEhescg8l48L_N0WuxF5StkAgLD9NnT5509vVUInuYxaqfVhE9fcLD5wCRLjmrUcQjfKK3DxroEMIAyDFgArow494JQyboV2Hh-aooKm9UHwrMIIcazoKjSLKY9Fy2Ga1Pt2tm_BWKoXc-Xnp3RkNDN0iW6PX4KAcIZo0wnJirmcfgPo5C_zw_nol_v-VGijqhG_I1uaFvx9TEuXLoNrLypENb6DvPJDuLL3Abbbr26TDx9G',
    intake: 60,
    duration: '4 Years (B.Tech)',
    labs: [
      'Generative AI Development Center',
      'Data Visualization & Analytics Lab',
      'High-Performance GPUs and Parallel Computing Studio',
      'NLP and Computer Vision Laboratory'
    ],
    features: [
      'Intense industry mentorship focusing on model training and deployment.',
      'Practical training on Kaggle datasets and live industrial challenges.',
      'Collaborations with global AI companies for research initiatives.',
      'Excellent curriculum aligned with latest advancements in cognitive architectures.'
    ],
    averagePlacement: '6.0 LPA',
    hodName: 'Prof. Anuaradha Kumar'
  },
  {
    id: 'civil',
    name: 'Civil Engineering(CE)',
    fullName: 'Department of Civil Engineering',
    description: 'Building the modern physical infrastructure of tomorrow with sustainable, innovative, and structurally sound practices.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOu2eh1zkEWoODcI_Q56WobRSjGbj7zyFKFY2uotjJOQ6NumLdc2KXzQTBlSCZn46Wtuy2uzuwa7_4dwFuPJv9fbaoQ2XJ2-RdMRJ43ZNgBzUsxq85s--C--v2dQELgljjK6VFgIyxDVxDlTbpA6RlagBJ14tttHlYu_9Cr7Z8EOmjWv7TfIMUzed2Z12PzFPNkMpJwLICmW8V-bDqNiQhlSL8u75EcChiRLf4byYUst8h_0hT4FIQ',
    intake: 60,
    duration: '4 Years (B.Tech)',
    labs: [
      'Concrete Technology & Structural Testing Lab',
      'Geotechnical Engineering & Soil Mechanics Lab',
      'Environmental Engineering & Hydrology Studio',
      'Advanced Surveying & GIS Mapping Lab'
    ],
    features: [
      'Comprehensive hands-on field surveys utilizing high-precision Total Stations.',
      'Professional training on STAAD.Pro, Revit Architecture, and ArcGIS.',
      'Industrial visits to major bridge construction sites, dams, and highway projects.',
      'Green building modeling and environmental impact assessment projects.'
    ],
    averagePlacement: '4.1 LPA',
    hodName: 'Dr. S. M. Ali'
  },
  {
    id: 'cse',
    name: 'Computer Science & Engineering(CS)',
    fullName: 'Department of Computer Science & Engineering',
    description: 'Mastering algorithms, software development, modern computing technologies, and full-stack system architecture.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA24Q01gSF3eYyh7oNSRhz4fNunourO-sGcT5XdjdME6b9zUQY6DAzB7yf_M3D_i631zZ9FIzsXLJZJV952XKbNd3EBAjRH61-TjyXYFpuucfnsk92Chy1kGkUwH2E2wB3lLDRS9I-Z3S68amaSx6KtZJqfJOxMQLqKiIxQLMhzFMcfP0THRTSyeRNDKTiQerdo3OBrkZBEzoPQhftoGoIwOfYpbobVJUFrV3Hq4sPE9M0S-dfniHIs',
    intake: 120,
    duration: '4 Years (B.Tech)',
    labs: [
      'Advanced Cloud Computing Lab',
      'Artificial Intelligence & Deep Learning Lab',
      'Computer Networks & Cyber Security Lab',
      'Data Structures & Algorithm Lab'
    ],
    features: [
      '100% hands-on training with cutting-edge software engineering tools.',
      'Active student clubs like Developer Student Clubs (DSC) and ACM Student Chapter.',
      'Industrial training and internship programs with Amazon, TCS, and Wipro.',
      'Highly research-oriented curriculum focusing on Blockchain, Cloud, and Machine Learning.'
    ],
    averagePlacement: '5.2 LPA',
    hodName: 'Dr. M. S. Khatib'
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering(EE)',
    fullName: 'Department of Electrical Engineering',
    description: 'Powering the future through advanced energy systems, sustainable electrical grids, power electronics, and smart technology.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoNgH0YpE-nLJ9HTBesQVPcIjWk6O9yBTgwbRe7QrrppSaNHw0aGEQFWUB7Br9NwDInV7VPe7WTM7TxQXSn0tKdxcD7GpGom9H812D6JXi9LKaas6a8QgVZV4fMOD8_wZZYS0s_pM4uYou_u3FpjmFDIQ4f3WX69DLCyuo3ZVBfU98IIFojDPh5_PTEyTta_mbqxZLtJxlpn5qPUM9umnL3eBnE9rNXhkZcBSDatHf_JYluuIKMHCs',
    intake: 60,
    duration: '4 Years (B.Tech)',
    labs: [
      'Power Electronics & Electric Drives Lab',
      'Renewable Energy Systems & Microgrids Studio',
      'Electrical Machines & Control Systems Lab',
      'Smart Grid Automation Center'
    ],
    features: [
      'Comprehensive study of Solar and Wind Energy Integration models.',
      'Partnerships with power generation stations and state electricity boards.',
      'Interactive testing of hybrid and battery electric vehicle charging infrastructure.',
      'Strong foundations in smart automation and industrial PLC programming.'
    ],
    averagePlacement: '4.5 LPA',
    hodName: 'Prof. Archana Shirbhate'
  },
  {
    id: 'etc',
    name: 'Electronics and Telecommunication Engineering(ET)',
    fullName: 'Department of Electronics & Telecommunication Engineering',
    description: 'Connecting the world through advanced communication systems, signal processing, IoT, and embedded electronics.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLv_tESZkcTUm08cbrVthOvWSA_qIOei9w5qQxWF5pE6i7umN8TJ5AxixaAGj7VoPFawYQC1YkrqMifaRAGh5Mj1MSTYMOInW41avTRZcIqSfOksdV9PmqWHa9xiAguR5s4O_2DFWkhcqel_GUl-oFdsJZ6CplSsxvEBvCxFx2t32tAHtIlZhi5iilOBAyGA-Rh3yUeO_un0ij1l3i4J-hmfyod597jsbf-lEM06o5xvxMpoU5tx8Q0Blg',
    intake: 90,
    duration: '4 Years (B.Tech)',
    labs: [
      'VLSI & Embedded Systems Design Lab',
      'RF & Microwave Engineering Lab',
      'Microcontroller & IoT Development Lab',
      'Analog & Digital Signal Processing Center'
    ],
    features: [
      'Strong focus on 5G network modeling and IoT sensor networks.',
      'Active VLSI training with state-of-the-art Electronic Design Automation (EDA) tools.',
      'Consistent placements in semiconductor companies and telecom giants.',
      'Annual technical symposium and electronics design competition.'
    ],
    averagePlacement: '4.8 LPA',
    hodName: 'Dr. Sayyad Naimuddin'
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering(ME)',
    fullName: 'Department of Mechanical Engineering',
    description: 'Designing, manufacturing, and analyzing machines, thermal plants, and robotics that power heavy industries globally.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkfXvFE6GD3D4QdYzP0IaOfRtT_Uug90ym_UhhlIH2IEhJX_ocCnKLzJrI4jtXBQp0EiYaAnI4IGUrqrm1IL26XWXwHSIOZWYYmBjc4oDBWg7Fouv6vb0VOcQWuWVTRcnpoSevZirbQ5uX0TeOcnuBrFjINRj2-q_kckNkKPORuwjevQa4_0qovdqbtIzZwd1XWMsHN7fAcCFsTKWMJc61HxexiLNV1BlpesJGVvpaBWJs3fNg2_8a',
    intake: 60,
    duration: '4 Years (B.Tech)',
    labs: [
      'Robotics & Industrial Automation Studio',
      'Computer Aided Design (CAD/CAM/CAE) Lab',
      'Internal Combustion Engines & Fluid Power Lab',
      'Advanced Material Testing Workshop'
    ],
    features: [
      'Advanced 3D Printing and Rapid Prototyping workspace.',
      'Training on leading CAD packages: SolidWorks, ANSYS, and AutoCAD.',
      'Successful participations in national SAE BAJA and Go-Kart events.',
      'Excellent manufacturing lab equipped with industrial-grade CNC lathes.'
    ],
    averagePlacement: '4.2 LPA',
    hodName: 'Dr. Akash Langde'
  }
];

export const EVENTS: IndustryEvent[] = [
  {
    id: 'vidarbha',
    title: 'Advantage Vidarbha 2026',
    category: 'Exhibition & Industry Summit',
    description: 'Showcasing engineering innovations and empowering industrial growth across central India at the esteemed Khasdar Audyogik Mahotsav.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPJD8fc8vpf5pE5LIsdDodUxbsOXfvVdwrv-2gJhENaOFmfq9Q_s_L9jMhFrwV-tgUxLxmK2S6pc1AZKcvGjnPp3qMFnDT9Yy9CgwwWIESziVwcUbSQxxKUHQb_HLzytUjyypx0pRiSV-uNPMGgLYR3Xzx79WM92CzLJmKcVi_MJpJE-rkgtLCYPJFirdDTSbUjsUg4zRvGpdsbassHamvDmFy0G7Va8OJYsiht69xE3ahEVjEWj32nnE_iWYe0UdeL-vMbnY9rJKr6A',
    date: 'February 12-14, 2026',
    venue: 'Nagpur Exhibition Center, Nagpur',
    highlights: [
      'Over 40 prototype technologies exhibited by ACET students.',
      'Panel discussions with key directors of heavy metal and tech industries.',
      'Awarded Outstanding Innovator trophy in state-level competition.',
      'Explored 12+ MoUs for collaborative R&D and internships.'
    ]
  },
  {
    id: 'reunir',
    title: 'SE-REUNIR 2025',
    category: 'Alumni Homecoming Meet',
    description: 'Welcoming back the proud global alumni of ACET to network, mentor current students, and celebrate decades of academic excellence.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsiX3OLnoiaUvMqwF9nFwaDNTe75Hb9FIfo6fDunCXmmvOdbJXD28BUsY2sqPTRZnsJR0rA23xVhXRUptPNLw3LXV4ewD_W8_gFHpWNSNPmefvg2WBOz5WR_gEJwfszU3L5il4c9d0bgbcBhYFAiFlY5ATR1m1UWDvaKI_v6kl71kgwo50Ti0rbLqxTHSsAJ5WTulvH2WmINyejw3MUWRobYMnb_VKwPoYWwQFF1GuakT2xQbqU3f_cRg',
    date: 'December 27, 2025',
    venue: 'ACET Central Auditorium, Nagpur',
    highlights: [
      'Fireside chat with prominent Silicon Valley alumni leaders.',
      'Launched Alumni Endowment Scholarship program for meritorious students.',
      'Batch-wise felicitation & campus walks revisiting historic lecture halls.',
      'Interactive networking dinner with final-year students.'
    ]
  },
  {
    id: 'cultural',
    title: 'Cultural Fest 2024',
    category: 'Annual Youth Festival',
    description: 'Celebrating creativity, passion, art, and the rich cultural diversity of our campus through interactive exhibitions and spectacular stage shows.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsh6naEjf_9et3e1yX_XbQvAMbytThs6o4VO0gf_wIJ02Z_kEQQJKYeera3MKVq5jg89wO4s8vvlEedRAa1oj9F4lz9X08C5K-kJW7v1-yfJblwADX8Lm7O9KqOb0vkNfstOewSLMDV-fKdPxFiW1G9iTwBxJEmYvlCZRmwkN7QE01HCe34OXkUp8B3M_k_tWVE42eWk6uRMDoBzrCYAeUqYRLiBKxrYxDQxYYydDPClwjlKtQ7cTZNRgA',
    date: 'March 18-20, 2024',
    venue: 'ACET Main Sports Arena, Sadar, Nagpur',
    highlights: [
      'Mega Fashion Show and Choreographed Street Dance competitions.',
      'Live music concerts featuring popular indie and folk-fusion bands.',
      'Art exhibitions and food stalls curated by student clubs.',
      'Over 2,500 inter-college students participated in diverse competitions.'
    ]
  },
  {
    id: 'progress',
    title: 'Celebrating Passion & Progress',
    category: 'Campus Showcase & Hackathon',
    description: 'A glimpse into the vibrant student life, innovative research, athletic achievements, and technical projects designed on campus.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZoBrYYLbvAxzqa_4W6qqIDGC2k_TDuhpwIr_tCfa7kcKVWMwe2msblbUfrEB_P5hZjJNWZj_43HCkU2QHINWOmsuXX7Nh4wPjphdeFnIW-cO8d-AwzKgj6rd8duBm3EpVCiTOh5sFLZ2_-NpZnp0F_GokEsovhl5qaPB81qJaU8fK5ndxG2ywGYdBKYgKu4o9aOZ6dYiDD7dSUjBrtdGdjDqb5pYtLYY_oiqfBS4LF5h3JPhYJxLfPbjGB-FSTtJ--w',
    date: 'January 10, 2026',
    venue: 'Campus Innovation Center, Nagpur',
    highlights: [
      'Smart Campus hackathon with 36 hours of continuous coding.',
      'Inauguration of the Solar Tech Canopy designed by Electrical students.',
      'Sports trophy ceremony celebrating regional basketball victory.',
      'Exemplary robotic simulations by the ACET Robotics Club.'
    ]
  }
];

export const PLACEMENTS: StudentPlacement[] = [
  {
    name: 'Prajjwal Dubey',
    company: 'Infosys',
    branch: 'Electronics & Telecommunication',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVn9dvnH4dBQHLuEGFzT9X5GbkKVstgpvTDv_eNzTgSmqO1WB3Fj0UYdH_vvdZkoVyIAfDfEimFAkpKk51aKLR5zvh925lO9fj9NhV-8Q8VN1w0TJa0qjgjbrLlzgThYqt-c_bWu2XQ9R3Wt6vDntOdiAcST-numknRrST0kfO3CSPH_p5RHe0XMNau0oqj3H7tiTQ5IYR2wSK1SEkWwzx0Z-hP_SKoOHFmB0mPL7RWFjDrWulz1nl2M8HsgNQVGYDJOBBBpo_hQAu8w',
    package: '4.8 LPA',
    role: 'Systems Engineer'
  },
  {
    name: 'Shantanu Patne',
    company: 'TCS Digital',
    branch: 'Computer Science',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB637CBRi3DTNLwfxSA4FrY0N_myIUaD6UZnGsNFjZuCIAKymOGsg9YtLgVRG9Z-f-5eRUfrUwavAljlLmHGjhxdYfw8qjcUxi6zYIWAZ8QBFR6g1pJaVX-zO8wvKJzDJSV9JfUPbVVm9DMKBIOOgUrQrS4PUyvSBugzEiG0QkdWDTeroHdAyI_xGEaVtwwyyiJ9e1hJq0r0SinD80PknCJ1svYaLohQGV29gINh6NcD4sj2yaVkiJvSRHehEqvXGP2XBrrmSJA3NRYDw',
    package: '7.2 LPA',
    role: 'Digital Systems Associate'
  },
  {
    name: 'Piyush Umate',
    company: 'Wipro',
    branch: 'Electronics & Telecommunication',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB0evf6SryeDxrO1rl5QNXDPdlXCcqlP487T0z5d9xf8ntzZbabH4IORd_2R2sjVjJxDVP27ajtbMyGdoamLjujsaNhBC4Sepcj6Hr2-19t0gQUSPSQUDVPq9Duj89UYDtW5dfwwnSTaoXn8hGxQBCMb42NKRelkBwTseJJZFrA1yxQbUFCdA5aUA8vNG4tkzFgb4bqeTbiG0Dj6GlN7yY4Cu8ynnUf4duwVXbZn4fHUYLLNAhxrIRangdHGHbItg1iBcrim0oqZ--hA',
    package: '4.2 LPA',
    role: 'Project Engineer'
  },
  {
    name: 'Prasad Zalte',
    company: 'Amazon',
    branch: 'Computer Science',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZoVi1XV4KB9IlBe_b0NZmoHjAawiEpYeRvKw1d2rj62Spon3yp_-zvIsZqWb9oO7joz72pODHxT5i1ne2N0TsGtiU-HURLy3u8fj9o-Xe-UI3BNevZ8_8sCc6PcRVWgEOsrHbUG8fabMmJDOpOtL4VEagh2hzSo1NnjwNeI85EbytVQ17IE05Io9PANk1n0fZ_AJZpF_rPzl6F8aLEazcDxtrUPljYO-wpBz2XCMraeo8H3buTwVsnEm3szMhFRhft4T3vX60LsT00w',
    package: '12.0 LPA',
    role: 'Cloud Operations Specialist'
  }
];

export const RECRUITERS = [
  { name: 'Infosys', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv67tiFNH3x37R0hfLHNOegVvEunqweuDrx1e3X2Hcnhl7eKTZjQHJWrNWJWCmIrJstkE5iL66VvM0DDMLV6UV_w9pVvTwuRzBQe4tbxrDkEj6R8i_Oj69T8K3Eb4NSt3dxB1fHvYqdxHg-1-OPsNq2nLdisbIGdxjVFgDxUi0REdV4Ebis81mrtIr_TO13h34lYmkSRT53hCLsZyah0HhVL64YU3-FZtPHFPiqq3XWFbF2JGlypKA' },
  { name: 'TCS', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu6nhbmxG-AIIa__T7qSWCKxfpIw4nW7Nng0xfZUY7rVthmwBJkGyJwFTEBLgTtRhJdFUAX2wauqvJkYQtVCO4BzJkbMBGEnUarc8YDLoV7qzhscWS3s4MT7dAyJZaozCeasK1QhVzHsVSolXCe1p6po4QZwJNjHtNaGMm3cK7uyiPmtZaRwVk5aIiogEDKNdDhKLt7WPUmV3r9JddPSvyPajrAr9AChqPDpb_NR10E6pc4rCt73gc' },
  { name: 'HCL Technologies', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLhrCVfXBNr3aowKYSbZpoixqDPW2ckmGAIAGTTFt6W9aJlmVEWNZYk3VN4SHICwwYN_Cueyt0lUjXDFSbTpAHkEfx7vNcNL7blGZG-mazCxMwBW_GVvfrB5nvvEziXv7cmUMFhLSz3Sh_q1TIYKSLPXeV9o85Zz5nN3BDrmicTDqFT_yF8A1zINCik2qIyYf7dP7KftTfEaPl3Fx_2fk_UmviwWAjykiJdrFRdC8ETvt8ADDCmFWp' },
  { name: 'Wipro', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzKEAaFnkYOa603nAQ9c0YJmwaDtU2z7br7OtbcWNBojHzaIMm7ohgRmgbJTz1lhP1NPncuSA4-7QzcVix3UyBJ_REVmYhHw3Zp2Fmy7Yng0ZU2XRzO0PWS64Qg560WdlFU6rG_Br6fHeAI_hI-DztTsxQ45kfDXNPN8FvtcNiS2C-9Dth6KujS-MIsPMDLdqC2xxvLSEyk9dKOU5JcZImUi13K9x2dCifvVkAdqkHsOo8LPx-iaDB' },
  { name: 'Capgemini', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG2Upiq8zbWH5-HebhZXsl7tptz7_H50wymI26mK4lITj3lpTQFUiQ-8VXLzolQv5o-lT7b0cHUlO2SRdZh37ZrDiLQlm0pPAkQbmDlimAjgfdmUJh3Va76JmZ1XvNaz34MUsfNfH8V0iXfTc9w2QZYR2Lq7kWForynQ2g2_47dg8_yfB4x6gTPiIlUQF0kJ2mmIerBw8ZVRQ41fVnYlCjONp40nZvnyOhDWd_U_EKjExl-ib2XWrT' },
  { name: 'Amazon', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2yv2rCdGYRBHRABmqLzQa2bbYl2Cvwu9I9zntQlNPj6Wuu-V_5Kf-a_HSpsw7JKlZpons05jk-NuseN9xnFadGVTmxoHCsCkZXBodsw4hySR0waMUChZ8jvsKylL9EjO2t3nOwqbANgkaeWr8CEWeCttfgELUrDAtaArDomgrEBt9TjR-eGiF0q9bwOuYQnAeQafPfhKuzqrK3VEEfu_Mkigxn0qzjjiYFwtlhaqY4c55NJAcW3PS' }
];

export const VISITORS: Visitor[] = [
  {
    name: 'Dr. Bhimraya Metri',
    designation: 'Director, IIM Nagpur',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC9gGsJxdUcjY1NNez2PvArKrvMaYgPNW1EVMhR59KFr1d8Ezov-LXMnaIeIKZrYjnDY1gcW_wq384QXdhYNoldJTnNjqqG1HCuJJ6nFosm8uaXRqOM9uCvnAhBoDs9tJgDzU1hl09Kz5i-DxT7hwqEeS09_-r3E6eBA1mctksLKIzXd_uheG40s04Yfi4IpxauAWDM4x9bjBW9jik7vBfMyYAWgapYTFCdg4M-sGqcW55fKfxQObGLcgxqjaApctlUA',
    quote: 'The standard of student projects and technical commitment shown by the faculty of ACET Nagpur is truly outstanding. They are building a genuine center of entrepreneurial engineering.',
    speechTopic: 'Developing Industrial Entrepreneurship in Engineering Mindsets'
  },
  {
    name: 'Dr. Ravinder Singal',
    designation: 'Add. Director General (ACB) Maharashtra',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUBtCRtYXBTZyGPFxoji6waQEfQJ2KCaKs-Jw8jGepU91GSzHVGlLfrLNLF2lLgOybBET0RB06wSLr3myjztCayxLtYgWd_lQTlObv6gqhx5TLPL_cg_bBfM81pm0EKI5tt-5mg2rWlN0oUrqV0PvL6ie2bvkl25n4PEM2w6OefKiovuxNyYABAMC9R1GN3Edm5fmKxvAna5NqK9VyDQTsh2QVFa1kmz5DI6061CJ-tVb0mUvc5ep_d7QaJNKShK8TYA',
    quote: 'Ethics and engineering must go hand in hand. I am highly impressed by Anjuman College\'s focus on social welfare, discipline, and building responsible citizens of our nation.',
    speechTopic: 'Moral Values, Digital Ethics and Patriotism in Technical Education'
  },
  {
    name: 'Dr. Rajesh Dighde',
    designation: 'Director of Engineering, Meta',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxYB7nBfbzfuT6aGdKyzkBDhkukQgUIL83OnqrR6GLbClRfuIQPlptaK3iSL69CJDuHmZkPe-9uqyli01it2nlbhFn7BLyOJo5-LH2kWSwZRHlpLhLW5ojy1Jc8zADuvjx7J7zvZdSCi98mS8_IlzRxfsl7eOSKscSqR-AU3D2mRDmCqudDZ0LHAGhJthwMC9wuKAD8YJuPcF2R6MhImKLanDoBttO2AB0fVBX-1O0klGnR5yr9J58D5p_rghq_Z--jQ',
    quote: 'The foundational knowledge displayed by final year Computer Science students during the technical interactives rivals that of top global engineers. Truly exceptional campus culture.',
    speechTopic: 'Scaling Distributed AI systems in the Modern Meta-Universe'
  },
  {
    name: 'Dr. Manali Makarand Kshirsagar',
    designation: 'Vice Chancellor, R.T.M.N.U.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkhDku-foPCtXcvpo_dBuR-CLj1kSCHK-facatU3kseixYCkr75WZ9wSTjnz4uolhvtD0vXKUtPioF4dK5RnOTvn7RkKWouhdaltJGDD5FccSnLzndeGWtwONgOLAuQwlFQFSYj9Nigz_q4NGzcgetKumLvVjoix7-W3rEAOP3epgrorcytyPX7aGUyBled7JU_5Wxb19RALYJ0M_i4t5oQBcyPVnqSBB1JjUKbyYcUqvCWTz0bANZpAkT8gI4fRdZGg',
    quote: 'ACET continues to represent a pillar of academic excellence under Rashtrasant Tukadoji Maharaj Nagpur University. Their NAAC standard and active research drive is stellar.',
    speechTopic: 'Implementing National Education Policy (NEP) for Regional Transformation'
  },
  {
    name: 'Dr. M. M. Sufiyan Beg',
    designation: 'Professor, Aligarh Muslim University',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkUinp5XZ0XFrSQrDYavOXrAuMDzOVzpSRjnOkh9hlLJrFIxhIypxJghQclf0Jw87bXQlpPIGXS4uDFZq3X8rmqSyBddyIXgykRfagMivjQh1WhbVo6z2bAO2O75rESd0c8Ljdk3QLS6LAOdO_-JlYDOWqEaz4g5WjDHKtx1sweGiuc2Dg_4hRq5O7qqONBwz4u5iFK4UTOOMMkj70zOcqyhddFKPBcFGR9BEEmSmEP3DkbtzSICA3gm-XSRqut6h99Q',
    quote: 'The technical laboratories and computing centers at ACET Nagpur are highly advanced. It is delightful to see the synthesis of high scientific caliber with humble moral growth.',
    speechTopic: 'Fuzzy Logic, Soft Computing and Neural Optimization models'
  }
];

export const NOTICES: Notice[] = [
  {
    id: 'not-1',
    title: 'PhD Coursework Backlog - Core And Domain Courses Examination August 2026',
    category: 'exam',
    date: 'Jun 29, 2026',
    description: 'Guidelines and final datesheet for PhD coursework backlog exams in central university modules.',
    fileSize: '1.2 MB'
  },
  {
    id: 'not-2',
    title: 'Notification For PhD Coursework Regular Examination (Core Courses) July 2026',
    category: 'exam',
    date: 'Jun 24, 2026',
    description: 'Detailed hall-ticket and batch allocations for the regular Core courses doctoral exam.',
    fileSize: '950 KB'
  },
  {
    id: 'not-3',
    title: 'PhD CourseWork Result 2025-26, January 2026 (Core Courses) Published',
    category: 'exam',
    date: 'Jun 19, 2026',
    description: 'Consolidated university scorecard file is uploaded for research scholars. Kindly access with credentials.',
    fileSize: '1.8 MB'
  },
  {
    id: 'not-4',
    title: 'PhD Admission-Winter-2025-26: List Of Selected Candidates',
    category: 'general',
    date: 'Feb 05, 2026',
    description: 'Selected doctoral applications list under diverse guides for CSE, Electronics and Mechanical Engineering.',
    fileSize: '1.4 MB'
  },
  {
    id: 'not-5',
    title: 'PhD Interview Winter 2025 -26 Schedule Announcement',
    category: 'general',
    date: 'Jan 29, 2026',
    description: 'Reporting timelines, necessary presentation slides, and guide allocation criteria guidelines.',
    fileSize: '620 KB'
  },
  {
    id: 'not-6',
    title: 'Invitation For Nominations - Convocation Academic Gold Medal Awards 2026',
    category: 'admission',
    date: 'Jan 21, 2026',
    description: 'Nominations are open for academic high scorers across all departments. Submit by the strict deadline.',
    fileSize: '840 KB'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Shantanu Patne',
    role: 'Computer Science (Batch of 2026)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB637CBRi3DTNLwfxSA4FrY0N_myIUaD6UZnGsNFjZuCIAKymOGsg9YtLgVRG9Z-f-5eRUfrUwavAljlLmHGjhxdYfw8qjcUxi6zYIWAZ8QBFR6g1pJaVX-zO8wvKJzDJSV9JfUPbVVm9DMKBIOOgUrQrS4PUyvSBugzEiG0QkdWDTeroHdAyI_xGEaVtwwyyiJ9e1hJq0r0SinD80PknCJ1svYaLohQGV29gINh6NcD4sj2yaVkiJvSRHehEqvXGP2XBrrmSJA3NRYDw',
    company: 'TCS Digital',
    text: 'ACET didn\'t just teach me coding; they gave me a playground of hackathons, expert workshops, and direct placement guidance which made clearing the highly selective TCS Digital interview a breeze!'
  },
  {
    name: 'Prajjwal Dubey',
    role: 'Electronics & Telecommunication (Batch of 2026)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVn9dvnH4dBQHLuEGFzT9X5GbkKVstgpvTDv_eNzTgSmqO1WB3Fj0UYdH_vvdZkoVyIAfDfEimFAkpKk51aKLR5zvh925lO9fj9NhV-8Q8VN1w0TJa0qjgjbrLlzgThYqt-c_bWu2XQ9R3Wt6vDntOdiAcST-numknRrST0kfO3CSPH_p5RHe0XMNau0oqj3H7tiTQ5IYR2wSK1SEkWwzx0Z-hP_SKoOHFmB0mPL7RWFjDrWulz1nl2M8HsgNQVGYDJOBBBpo_hQAu8w',
    company: 'Infosys',
    text: 'The state-of-the-art VLSI and Signal Labs, combined with supportive faculty who encouraged out-of-the-box research, gave me the skills to launch my tech career with Infosys right from Sadar, Nagpur.'
  },
  {
    name: 'Prasad Zalte',
    role: 'Mechanical Engineering (Batch of 2026)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZoVi1XV4KB9IlBe_b0NZmoHjAawiEpYeRvKw1d2rj62Spon3yp_-zvIsZqWb9oO7joz72pODHxT5i1ne2N0TsGtiU-HURLy3u8fj9o-Xe-UI3BNevZ8_8sCc6PcRVWgEOsrHbUG8fabMmJDOpOtL4VEagh2hzSo1NnjwNeI85EbytVQ17IE05Io9PANk1n0fZ_AJZpF_rPzl6F8aLEazcDxtrUPljYO-wpBz2XCMraeo8H3buTwVsnEm3szMhFRhft4T3vX60LsT00w',
    company: 'Amazon Web Services',
    text: 'Even as a Mechanical student, ACET let me cross-train in cloud operations. Combining CAD modeling with server logic helped me land an incredible role at Amazon. Proud Anjuman Alumnus!'
  }
];


import React from 'react';
// import BentoGrid from '@/components/BentoGrid';
import axios from 'axios';
import CollegeFacilities from '@/components/HomePageComponents/collegeFacility';
import ProgramsSection from '@/components/HomePageComponents/WorkShops';
import BentoGrid from '@/components/BentoGrid';
import AdmissionHero from '@/components/HeroFile';





export const events = [
  {
    url: 'https://scontent.fpat1-1.fna.fbcdn.net/v/t39.30808-6/482346942_1044838464338759_5069384743125723283_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DGCQ5gY1EuwQ7kNvwH_CEKW&_nc_oc=AdnnPhgKDFNG8oAhejYiwN38q0y_1M9uWt9ZaQAxYi1X397vaQ_c-jDx_4skTRpAP1tPSya5ts3sdF-8ArL-SHvW&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&_nc_gid=U0TSnQYMVrEcw0R6XrhgMQ&oh=00_AfRdFtxXeaOYIwnzUubatx_sHJst-9lQJBgCpfzVnLlOfA&oe=6871D219',
    alt: 'Students gear up for Inspiro 2025 opening ceremony',
    tag: 'Inspiro 2025',
    link: '/events/inspiro-2025',
  },
  {
    url: 'https://scontent.fpat3-1.fna.fbcdn.net/v/t39.30808-6/487379618_1062566292565976_6708051379425012928_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tkk_W2nUOCoQ7kNvwHZOKTn&_nc_oc=AdlpXMRj6tPuipCkovFjupmHOO4nrlbAKD7SPH7ICW99kmiDFTrgKlpS_fWpgAqFJByWcbIBWZHA-K9X-x9m5bjZ&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&_nc_gid=FUH9BZuy7mwutHydQICVhg&oh=00_AfQfTktWgxQqddtRjErPEe9jrdeGk_a9DnafJdwuoRFBgQ&oe=6871BB54',
    alt: 'Farewell 2025 passing-out batch group photo',
    tag: 'Farewell 2025',
    link: '/events/farewell-2025',
  },
  {
    url: 'https://scontent.fpat3-1.fna.fbcdn.net/v/t39.30808-6/488263318_1062566319232640_2304393293627260561_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Q7PGynQzzp8Q7kNvwHgE12-&_nc_oc=AdktpOXRK8NWgJnRv_Kqhdt-Tz171hb91wFFwntG0dL1D_-bHtvlsL05GSV1ZJQ3STBqYejEKOPqoxCj5poXfKRK&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&_nc_gid=GoZ0CD9PkC0aC_mtm1SgKg&oh=00_AfQ0etyPb6dY03L9doELZyqDNI4MJ9pfPepN6tWCR19m8w&oe=6871B10C',
    alt: 'Placement Highlights 2025 banner with company logos',
    tag: 'Placement 2025',
    link: '/events/placement-2025',
  },
  {
    url: 'https://scontent-ccu1-2.xx.fbcdn.net/v/t39.30808-6/516080370_1139890131500258_5580723189454870541_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=n99VQIXv-QIQ7kNvwFrijQB&_nc_oc=Adkw_7Oi-sTHspwlTC6UpINnVy7DilI0cocQvVPhR318dEjHX31qNcOXiZXzxL67Qb8hbCF84ogtvqzmb_tJv0QE&_nc_zt=23&_nc_ht=scontent-ccu1-2.xx&_nc_gid=NyRB4C6Hgpx5oGy21x9ubw&oh=00_AfSvtkfpcHoGiRJsSwmq25lsSnvY0Oyr6rSa5A3sxRNEbQ&oe=6871DA55',
    alt: 'Students practicing yoga during International Yoga Day 2025',
    tag: 'Yoga Day 2025',
    link: '/events/yoga-day-2025',
  },
  {
    url: 'https://scontent.fpat1-1.fna.fbcdn.net/v/t39.30808-6/496844110_24184237211181289_7675636492943181793_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3iRfamLw5ZQQ7kNvwH--jWl&_nc_oc=AdmpoEahN7VM1dh5adgL69sG1GQ0wd_pdrMC5OVzwF8tLgkgz6QFazo0yeuFAkuaFtJeJzTbrteUcx_4ff1G_nQ7&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&_nc_gid=jesj8ckYbYRIlP00hHN4QQ&oh=00_AfRjlyKRaQwoFSNcQlWUvrvf9BHcTNQzf68ypfawvkKAUA&oe=6871AE86',
    alt: 'International Yoga Day highlights from campus',
    tag: 'Yoga Highlights',
    link: '/events/yoga-highlights-2025',
  },
  {
    url: 'https://scontent.fpat3-1.fna.fbcdn.net/v/t39.30808-6/496085614_24184250851179925_7196755551137491524_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qcb197Qt87kQ7kNvwFZAp_N&_nc_oc=Admu39E3KqBUOT7l_QkKSsLUrJFdigoyn-W7ybHGP--bYYMiTrQPQQA8Ry76IcxPGmTDbw4yJ-RG3dA5RKpeQK_m&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&_nc_gid=DKgumzibhaWolpxnpDd3Ig&oh=00_AfQddtAaZhdksg07ChfvavXV79GTUDeIlSMr9SLn4ZjMTg&oe=6871CB14',
    alt: 'Admissions Open 2025-26 promotional graphic',
    tag: 'Admission 2025-26',
    link: '/events/admission-2025',
  },
  {
    url: 'https://scontent-ccu2-1.xx.fbcdn.net/v/t39.30808-6/488886299_1064930345662904_4568816821473952557_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XxgfGpSK4wcQ7kNvwELUQtS&_nc_oc=AdlucHzKGGLvyJlRnj7rjgXf93GgWICRgewH-Vs3AyndrLhXbNceb0Y7Z47f62uu12A_tFHgwf6crACYpbo2bbIq&_nc_zt=23&_nc_ht=scontent-ccu2-1.xx&_nc_gid=CCGKK8pIUH-VEt_UIboyXg&oh=00_AfRCotOD_dn3smhT-LpxD6W55BEK9XNwDfqzAYHq2nUyUQ&oe=6871B148',
    alt: 'Freshers attending Induction Class 2025',
    tag: 'Induction 2025',
    link: '/events/induction-2025',
  },
  {
    url: 'https://scontent.fpat1-1.fna.fbcdn.net/v/t39.30808-6/487548214_1064929942329611_6111595072781720104_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X0CKdQPjT1EQ7kNvwH_sPYd&_nc_oc=AdkYiUefDOy2p2cp-1hYI2B_kLxLTjRY-cou5BQIAtthelr6uelsaOwhMFYAYZLVprcgbEvwrSKqmbh8xlHuZe0P&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&_nc_gid=VDxdQj23lGfSRjm6IkTD9A&oh=00_AfSpgBN25qDjuhO5NMPvhZXygFk9sGK3vd7jmzyP0WEudw&oe=6871CC94',
    alt: 'Announcement poster: major recruiter visiting CIMAGE',
    tag: 'Recruiter Visit',
    link: '/events/recruiter-visit-2025',
  },
  {
    url: 'https://scontent.fpat3-1.fna.fbcdn.net/v/t39.30808-6/486259359_1058956466260292_5837405276942702980_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DtMf_gFQiKcQ7kNvwEiDQAh&_nc_oc=AdmhZt9QKy7RPoo1VMGMgCAzh-M8mcrlZ1IjsnvJ9NMdaT3UMcxc7ug9K2DLzbUjlPkj-vqiapEAu8fdjtezwbB2&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&_nc_gid=WNsxXHOOfxG97XzNnMEslA&oh=00_AfQqOej-3w3UEk89cXtZnOQSMhFEslbcomZcLlyNAgv8Ew&oe=6871C1CF',
    alt: 'Final-year students giving heartfelt reviews at Farewell 2025',
    tag: 'Farewell Reviews',
    link: '/events/farewell-reviews-2025',
  },
  {
    url: 'https://scontent.fpat3-1.fna.fbcdn.net/v/t39.30808-6/486620288_1058958729593399_724533731527287798_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3ixYA24Wdd4Q7kNvwGlRO5N&_nc_oc=AdkoARAZRP4DWkzxY6gtmql4txWagHxBt4hD9fF2L0hKhcy8ojResuEPSKj-dGtMbrd2Phg8ZFcQ-3JDWQ3DsiuS&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&_nc_gid=acKSMk4H3yAq3EvvOBUyPA&oh=00_AfR8FOXJASW8__wY9hkkO_Vc9UgT99sFAGeGTS-XfB5zkg&oe=6871C4C3',
    alt: 'Campus stories from Placement Celebration 2025',
    tag: 'Placement Stories',
    link: '/events/placement-stories-2025',
  },
  {
    url: 'https://scontent.fpat1-2.fna.fbcdn.net/v/t39.30808-6/482238489_1049466727209266_844684632856290949_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rZHEweeS76QQ7kNvwHqcDR3&_nc_oc=AdnYyeEmkSGcCxPMRBxqBsuhVKGbfDeggpqVs10O9uY0jbwwcGXytUDCiSObJfy74o4DPHKIFQO0WsUhyq_hsT8a&_nc_zt=23&_nc_ht=scontent.fpat1-2.fna&_nc_gid=2uHl0wVn6X2AMNxjW9G8KA&oh=00_AfQT42ZqKjP5xFXqTSEUBlIMJi4-3gRis9OWndPlQvtSVg&oe=6871B0CE',
    alt: 'Flag-hoisting at Republic Day Event 2025',
    tag: 'Republic Day 2025',
    link: '/events/republic-day-2025',
  },
  {
    url: 'https://scontent.fpat1-1.fna.fbcdn.net/v/t39.30808-6/481281192_9938812982816950_2876240132093325717_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3JcwjfsJWJcQ7kNvwGnmg4t&_nc_oc=AdkTpHS2IjIXJqqwy7AN2ZXGodvW256X1HNFhRtVZbq5amixMI8hS-qaklCX0Vl2SYn19bWorHWbDm4pQsRYNpF6&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&_nc_gid=am2ZF3mxBVS8yFvKQBWDTg&oh=00_AfTbgTZd_Yi9QZ_eB9tzBoWcyG_FSjkfmrV40NO82s7ITA&oe=6871CE3D',
    alt: 'Interactive session at the Agentic AI Workshop',
    tag: 'Agentic AI Workshop',
    link: '/events/ai-workshop-2025',
  },
  {
    url: 'https://scontent.fpat1-1.fna.fbcdn.net/v/t39.30808-6/481279738_9932528286778753_2638763813409918889_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=K8o-OHHH2zYQ7kNvwF69s1F&_nc_oc=Adm5zg8mYVNyk3HjwjSSXWd2tOkbyMSicT0mcWcFofk4XogC75ZqTxu9DIkUVb39JKWcrXsGbHZjzCCsrEgF3Vpn&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&_nc_gid=GdEYPArdcvnfDeu7caToag&oh=00_AfTLH_-mVyiM1Rr_WKM8NLkOBsli23EThAgMJEDtQ-eHiA&oe=6871C52B',
    alt: 'Graduates tossing hats on Graduation Day 2025',
    tag: 'Graduation Day 2025',
    link: '/events/graduation-day-2025',
  },
];
const courses = [
  {
    title: "Bachelor of Business Administration (BBA)",
    description: "Develop business acumen and leadership skills with our comprehensive BBA program that prepares you for the corporate world.",
    highlights: [
      "3-year undergraduate program",
      "Specializations in Marketing, Finance, HR",
      "Industry-relevant curriculum"
    ]
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    description: "Master software development and computer applications with hands-on training in modern programming languages and technologies.",
    highlights: [
      "Focus on practical coding skills",
      "Latest technologies and frameworks",
      "Strong industry partnerships"
    ]
  },
  {
    title: "Bachelor of Science in IT (BSc IT)",
    description: "Combine theoretical knowledge with practical IT skills in this program designed for the digital age.",
    highlights: [
      "Comprehensive IT foundation",
      "Emerging technologies focus",
      "Research-oriented approach"
    ]
  }
];

const program = [
  {
    kind: "industry-visit",
    title: "Industry Visits",
    duration: "1-Day",
    description: "Exclusive visits to leading companies to understand real-world operations",
    benefits: [
      "Behind-the-scenes look at manufacturing processes",
      "Direct interaction with industry professionals",
      "Understanding corporate workflows",
      "Networking opportunities with potential employers"
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
  },
  {
    kind: "workshop",
    title: "Technical Workshops",
    duration: "2 Weeks",
    description: "Hands-on sessions with industry experts on cutting-edge technologies",
    benefits: [
      "Practical skill development",
      "Exposure to latest tools and technologies",
      "Project-based learning approach",
      "Industry-recognized certification"
    ],
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&auto=format&fit=crop&q=60",
  },
  {
    kind: "tour",
    title: "Educational Tours",
    duration: "3-5 Days",
    description: "Learning experiences beyond classroom walls at key locations",
    benefits: [
      "Exposure to different work environments",
      "Cultural exchange opportunities",
      "Team building experiences",
      "Practical application of classroom knowledge"
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
  },
  {
    kind: "workshop",
    title: "Coding Bootcamps",
    duration: "4-Week Sprint",
    description: "Intensive training programs to master programming skills",
    benefits: [
      "Problem-solving techniques",
      "Competitive programming practice",
      "Real-world project development",
      "Hackathon preparation"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
  },
  {
    kind: "tour",
    title: "Shimla Campus Experience",
    duration: "3 Days",
    description: "Learning in the serene environment of our hill campus",
    benefits: [
      "Focus sessions in distraction-free environment",
      "Team-building activities",
      "Nature-inspired creativity",
      "Cultural exchange programs"
    ],
    image: "https://images.unsplash.com/photo-1593693392682-0d0f297d15f1?w=800&auto=format&fit=crop&q=60",
  },
  {
    kind: "internship",
    title: "Interview Preparation",
    duration: "6 Weeks",
    description: "Comprehensive training for placement success",
    benefits: [
      "Mock interviews with HR professionals",
      "Résumé-building workshops",
      "Communication-skills training",
      "Aptitude-test practice"
    ],

    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60",
  },
  {
    kind: "internship",
    title: "Leadership Programs",
    duration: "12 Weeks",
    description: "Developing tomorrow's industry leaders",
    benefits: [
      "Team-management workshops",
      "Conflict-resolution training",
      "Decision-making simulations",
      "Public-speaking mastery"
    ],

    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60",
  },
];

const facilities = [
  {
    id: 1,
    title: 'Smart Classrooms',
    description: 'Digitally equipped classrooms with interactive learning systems',
    image: 'https://images.unsplash.com/photo-1690192079218-fe6dce1486c0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwY2xhc3Nyb29tJTIwd2l0aCUyMHByb2plY3RvcnxlbnwwfDF8MHx8fDA%3D'
  },
  {
    id: 2,
    title: 'IoT Labs',
    description: 'State-of-the-art Internet of Things research facilities',
    image: 'https://plus.unsplash.com/premium_photo-1723485630190-6d70e7d3c0ab?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlvdCUyMGxhYnxlbnwwfDF8MHx8fDE%3D'
  },
  {
    id: 3,
    title: 'Computer Labs',
    description: 'High-performance computing labs with latest configurations',
    image: 'https://plus.unsplash.com/premium_photo-1724167808709-95162ce9f78c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbXB1dGVyJTIwbGFifGVufDB8MXwwfHx8MQ%3D%3D'
  },
  {
    id: 4,
    title: 'Full AC Campus',
    description: 'Air-conditioned learning environment throughout campus',
    image: 'https://plus.unsplash.com/premium_photo-1731421965837-c4d336e18827?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFDJTIwY2FtcHVzfGVufDB8MXwwfHx8MQ%3D%3D'
  },
  {
    id: 5,
    title: 'Smart Boards',
    description: 'Interactive whiteboards in all lecture halls',
    image: 'https://plus.unsplash.com/premium_photo-1687128298182-6a60a37af6d4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGxjZCUyMHNtYXJ0JTIwYm9hZCUyMGZvciUyMGxlYXJuaW5nfGVufDB8MXwwfHx8MQ%3D%3D'
  },
  {
    id: 6,
    title: 'Campus-wide WiFi',
    description: 'High-speed internet connectivity across entire campus',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lmaSUyMGNhbXB1c3xlbnwwfDF8MHx8fDE%3D'
  },
  {
    id: 7,
    title: 'Expert Faculty',
    description: 'Experienced professors with industry expertise',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdWx0eSUyMHRlYWNoaW5nfGVufDB8MXwwfHx8MA%3D%3D'
  },
  {
    id: 8,
    title: 'Modern Library',
    description: 'Extensive collection of resources and study spaces',
    image: 'https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwbGlicmFyeXxlbnwwfDF8MHx8fDA%3D'
  },
];

const campusFacility= {
  campusImageUrl: "https://media.npr.org/assets/img/2023/12/12/gettyimages-1054147940-627235e01fb63b4644bec84204c259f0a343e35b.jpg",
  facilities: facilities
}

const heroImageSection = {
  heroImageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
  timeline: "2022-29"
}


export default async function EventsPage() {
  let response;
  try {
    console.log("Server log", response)
    response = "https://www.purina.in/sites/default/files/2020-12/Understanding%20Your%20Cat%27s%20Body%20LanguageHERO.jpg"
    console.log("Server log", response)

  } catch (error) {

  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* ──────────────── HERO ──────────────── */}
      <AdmissionHero data={response || heroImageSection} />

      {/* -----------------------about Us ------------------------------ */}
      <CollegeFacilities campusFacility={campusFacility} />
      {/* --------------------glallery section -------------------- */}
      <section>
        <div className="w-full h-auto ">
          <h1 className="text-4xl font-bold text-center mb-12">Cimage at a Glance</h1>
          <BentoGrid images={events} />
        </div>
      </section>
      {/* ---------course details-------------- */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Undergraduate Programs</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover programs designed to launch your career with industry-relevant skills and knowledge
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <ul className="space-y-2 mb-6">
                    {course.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Full Details Link */}
          <div className="text-center">
            {/* <Link href="/courses" >
                <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                  Explore All Courses
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </Link> */}
          </div>
        </div>
      </section>
      {/* --------------workshops and internships----------------- */}

      <ProgramsSection programs={program} />




    </div>
  );
}
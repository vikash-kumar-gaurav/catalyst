
import React from 'react';
import Link from 'next/link';
// import BentoGrid from '@/components/BentoGrid';
import axios from 'axios';
import CollegeFacilities from '@/components/HomePageComponents/collegeFacility';
import ProgramsSection from '@/components/HomePageComponents/WorkShops';
import BentoGrid from '@/components/BentoGrid';
import AdmissionHero from '@/components/HeroFile';
import { MdDescription } from 'react-icons/md';
import type { Metadata } from 'next'
import TestimonialsCarousel from '@/components/HomePageComponents/Testimonials';
import LatestNewsSection from '@/components/HomePageComponents/Notification';
import CallbackRequestSection from '@/components/HomePageComponents/CallBack';
import GlobalAchievers from '@/components/HomePageComponents/CollegeAchievers';


export const metadata: Metadata = {
  title: 'HUHU',
  description: ' hi '
}

const hereoData = {
  "hero_img_url": "https://www.build-review.com/wp-content/uploads/2020/08/modern-exterior.jpg",
  "duration": "2025-2031",
  "tagline": "Begin your journey to excellence. Applications now being accepted for all programs."
}

const campusFacility = {
  "campus_img_uri": "https://images.unsplash.com/photo-1638394975153-91efc3916166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFybGltZW50c3xlbnwwfHwwfHx8MA%3D%3D",
  "facilities": [
    {
      "id": 1,
      "title": "Library",
      "description": "A state-of-the-art library with thousands of books, digital resources, and quiet study areas.",
      "image": "https://images.unsplash.com/photo-1568667256549-094345857637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 2,
      "title": "Sports Complex",
      "description": "Modern sports complex featuring football fields, basketball courts, and indoor gymnasiums.",
      "image": "https://images.unsplash.com/photo-1635842939844-1fbf6bea8e78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnQlMjBjb21wbGV4fGVufDB8fDB8fHww"
    },
    {
      "id": 3,
      "title": "Cafeteria",
      "description": "Spacious cafeteria serving hygienic and diverse cuisine including vegetarian and vegan options.",
      "image": "https://plus.unsplash.com/premium_photo-1661346065046-ed00130a3761?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhZmV0ZXJpYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 4,
      "title": "Computer Labs",
      "description": "Fully equipped computer labs with high-speed internet and modern computing resources.",
      "image": "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBsYWJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      "id": 5,
      "title": "Auditorium",
      "description": "Large auditorium with a seating capacity of 500+ for seminars, workshops, and cultural events.",
      "image": "https://images.unsplash.com/photo-1571636876366-b24a7cee3069?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": 6,
      "title": "Hostel Accommodation",
      "description": "Safe and comfortable hostels with 24/7 security, Wi-Fi, and recreational facilities.",
      "image": "https://plus.unsplash.com/premium_photo-1679088034974-2c9c01d59992?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zdGVsfGVufDB8fDB8fHww"
    },

  ]
}

const imageItems = [
  {
    url: "https://plus.unsplash.com/premium_photo-1682089821031-05d132d2be0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9saXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Students participating in Holi festival with colored powder",
    tag: "Holi",
    link: "/event/1"
  },
  {
    url: "https://images.unsplash.com/photo-1616813769023-d0557572ddbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbGl8ZW58MHx8MHx8fDA%3D",
    alt: "Close-up of colored hands tossing gulal during Holi",
    tag: "Holi",
    link: "/event/2"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww",
    alt: "Students coding together in a competition round",
    tag: "Coding Round",
    link: "/event/3"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1683219368353-6597c132c26f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFyZXdlbGwlMjBkYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Group of students celebrating at a farewell event",
    tag: "Farewell",
    link: "/event/4"
  },
  {
    url: "https://images.unsplash.com/photo-1597591516654-72b726d644da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhcmV3ZWxsJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D",
    alt: "Student presentations during college cultural program",
    tag: "Cultural Program",
    link: "/event/5"
  },
  {
    url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VtaW5hcnxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Students attending a workshop in auditorium",
    tag: "Seminar",
    link: "/event/6"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1679547203090-6313a91d4478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNlbWluYXJ8ZW58MHx8MHx8fDA%3D",
    alt: "Student speaker at college program",
    tag: "College Program",
    link: "/event/7"
  },
  {
    url: "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww",
    alt: "Group celebrating success at a coding round",
    tag: "Coding Round",
    link: "/event/8"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1698500035179-edd84b64f527?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVlcGF3YWxpfGVufDB8fDB8fHww",
    alt: "Students dancing during college cultural festival",
    tag: "Cultural Festival",
    link: "/event/9"
  },
  {
    url: "https://images.unsplash.com/photo-1662720868850-e60cefb03201?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRlZXBhd2FsaXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Farewell ceremony with students throwing caps",
    tag: "Farewell",
    link: "/event/10"
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1665203421659-09089ede4ffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    alt: "Panel discussion at a college seminar",
    tag: "Seminar",
    link: "/event/11"
  },
  {
    url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww",
    alt: "Coding round awards ceremony with trophies",
    tag: "Coding Round",
    link: "/event/12"
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D",
    alt: "Crowd enjoying cultural program outdoors",
    tag: "Cultural Program",
    link: "/event/13"
  }
];

const courses = [
  {
    "title": "Bachelor of Computer Applications (BCA)",
    "duration": "3 years",
    "description": "An undergraduate program focusing on foundational and advanced knowledge in computer applications, programming languages, and software development.",
    "highlights": [
      "Industry-relevant curriculum with practical exposure",
      "Internship opportunities in IT companies",
      "Strong placement support for software roles"
    ]
  },
  {
    "title": "Bachelor of Business Administration (BBA)",
    "duration": "3 years",
    "description": "A comprehensive course designed to develop managerial, operational, and entrepreneurial skills in business and administration.",
    "highlights": [
      "Covers finance, marketing, and HR fundamentals",
      "Live business case studies and simulations",
      "Guest lectures from industry experts"
    ]
  },
  {
    "title": "Bachelor of Science in Information Technology (BSc IT)",
    "duration": "3 years",
    "description": "Focuses on information technology concepts such as networking, databases, web development, and data structures.",
    "highlights": [
      "Hands-on lab sessions and project-based learning",
      "Covers key certifications like CompTIA, Cisco, and AWS",
      "Focus on cybersecurity, cloud computing, and analytics"
    ]
  }
]

const workshops = [
  {
    id: 1,
    kind: "industry visit",
    title: "Manufacturing Plant Tour – Production Best Practices",
    duration: "2 weeks",
    benefits: [
      "Hands-on exposure to assembly line workflows",
      "Understand 5S/lean manufacturing principles"
    ],
    image: "https://scontent.fpat11-2.fna.fbcdn.net/v/t39.30808-6/487555599_1061839282638677_5498399053034687482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=o6P4VgsGoZwQ7kNvwFBm_oK&_nc_oc=Adn0u-F8OWZVLgBEknPfc44ikcoZkh4LylTTsm4hB-SWxk8S6MaBa9RvI8eYeOBoGSUvT_TwNKIOiyN4cCrKlUa2&_nc_zt=23&_nc_ht=scontent.fpat11-2.fna&_nc_gid=DI4n5L9NltSJI7MEPIDfRA&oh=00_AfQYenvOm9FXQBzOY3oPAyx9AkrjCNfE9cmEEXOWD3OZGQ&oe=6873B7EA"
  },
  {
    id: 2,
    kind: "industry visit",
    title: "Automotive Factory Immersion",
    duration: "2 weeks",
    benefits: [
      "Witness robotic welding & automation",
      "Explore quality control systems"
    ],
    image: "https://scontent.fpat11-1.fna.fbcdn.net/v/t39.30808-6/487561789_1061839139305358_5834986030165890354_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Tx8G3LBmro0Q7kNvwEMHpUs&_nc_oc=AdkJ4Rb3M9keALjNnW58KjGjWZMEwkrD9gYD-jfQ-1vg9S0B5YjqpZ1zBZLqTG_QNDkkQK8cDCGyx0_eMnR6tvYI&_nc_zt=23&_nc_ht=scontent.fpat11-1.fna&_nc_gid=3iSlA6Qf9ZzTdl_oU4Ck5A&oh=00_AfQyJJvxuaSPKCL4HAq-9qWHY1TIa8PahBrR6deAvDO9MA&oe=6873A908"
  },
  {
    id: 3,
    kind: "industry visit",
    title: "Food Processing Facility Visit",
    duration: "2 weeks",
    benefits: [
      "Learn hygiene & safety protocols",
      "Study cold-chain and packaging processes"
    ],
    image: "https://scontent.fpat11-1.fna.fbcdn.net/v/t39.30808-6/500317731_1276237490742777_1206835863195262897_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jxUeCaEzGAgQ7kNvwHVVNtX&_nc_oc=AdkU-QiGx7c_420TB34hWysft6_cmXNS6fDG8vd9OAhFGEa-zRqGZbKkBmiQB-qGYLGfUyKvgBtwV5vSBAAgZIL5&_nc_zt=23&_nc_ht=scontent.fpat11-1.fna&_nc_gid=uH06GWOc_eLG2L6DBH8KvQ&oh=00_AfRAGd2CIuHVVHhURqZoBkjkzBtjH9u5uPXGuGLtjWeuDw&oe=6873961D"
  },
  {
    id: 4,
    kind: "industry visit",
    title: "Pharmaceutical Manufacturing Tour",
    duration: "2 weeks",
    benefits: [
      "Observe GMP compliance in real time",
      "Understand regulatory production workflows"
    ],
    image: "https://scontent.fpat11-2.fna.fbcdn.net/v/t39.30808-6/487386180_1061839569305315_4427509311423236749_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bJtNB5nG0ZYQ7kNvwFDyWDv&_nc_oc=AdlqUyOpMMjBRHJAngg-QZfX6HFDRVnvPwniP3rjI_RaeKn7EC3vLJNQNQOgS_wPcuzvjMSURdsNO0_cWSC7C5on&_nc_zt=23&_nc_ht=scontent.fpat11-2.fna&_nc_gid=yiqczm0wN5KyL1_qd5JLPw&oh=00_AfQFWwELUbdUV-7ylN31fqZ9SLBUqDT9OjcHTLLYaIiS7Q&oe=6873B8D2"
  },
  {
    id: 5,
    kind: "industry visit",
    title: "Steel Plant Operations Tour",
    duration: "2 weeks",
    benefits: [
      "See blast furnace processes",
      "Learn about material handling & worker safety"
    ],
    image: "https://scontent.fpat11-2.fna.fbcdn.net/v/t39.30808-6/506247372_1028357919473872_4453499340072080420_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=L48Yw8R39sAQ7kNvwEkCGhz&_nc_oc=AdkIFcQtCeoLL7_2HSNVqyEH6Aaiz5ChSzSlTScbi1lTYmIKrBD-gtlm-q1wtKYdFO0iLo782kDIaVpSRDvLUWw3&_nc_zt=23&_nc_ht=scontent.fpat11-2.fna&_nc_gid=P3j6iQCLeCe60xVO90bIzw&oh=00_AfRYFx7EQ2X0vKi2ArK2089Nx0bnefYjvVtI7LujoYlMfg&oe=6873AB85"
  },
  {
    id: 6,
    kind: "industry visit",
    title: "Tech Startup R&D & Prototype Workshop",
    duration: "2 weeks",
    benefits: [
      "Hands-on experience with product prototyping",
      "Interact with innovation and engineering teams"
    ],
    image: "https://scontent.fpat11-1.fna.fbcdn.net/v/t39.30808-6/486695053_1061166666039272_7960288623839682280_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TdvL3BXeiVgQ7kNvwG16M-A&_nc_oc=AdkQVMqgcXCov8QdBBaU7pJHKYrCFZ8G624RbHHgvBPP-UUHsb5FhXYDtJVEXMgqQEyB5CdBVpMg7kuXKfhMJ07N&_nc_zt=23&_nc_ht=scontent.fpat11-1.fna&_nc_gid=xsI9geE5cdIKnn5oItnZcg&oh=00_AfRSI_vb466E5y6cuH8olw2HXt3V3Q7AHkX-q_O-KDt1Zg&oe=6873A6FC"
  }
];
const newsItems = [
    {
      id: '1',
      slug: 'new-research-grant',
      title: 'College Receives $5M Research Grant',
      excerpt: 'Our institution has been awarded a significant grant to advance AI research in healthcare applications.',
      date: '2023-06-15',
      category: 'news',
      isNew: true,
      isFeatured: true,
      image: 'https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVldGluZ3xlbnwwfDB8MHx8fDA%3D'
    },
    {
      id: '2',
      slug: 'campus-reopening',
      title: 'Campus Reopening Guidelines',
      excerpt: 'Important updates about campus reopening procedures and safety measures for the upcoming semester.',
      date: '2023-06-10',
      isNew: true,
      isFeatured: true,
      category: 'notification',
      image: 'https://images.unsplash.com/photo-1447433865958-f402f562b843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hc2F8ZW58MHwwfDB8fHww'
    },
    {
      id: '3',
      slug: 'alumni-weekend',
      title: 'Annual Alumni Weekend 2023',
      excerpt: 'Join us for our biggest alumni gathering of the year with special guests and activities planned.',
      date: '2023-06-05',
      category: 'event',
      isFeatured: true,
      image: 'https://images.unsplash.com/photo-1599180475650-590405b9ac5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycnVwdGlvbnN8ZW58MHwwfDB8fHww'
    },
    {
      id: '4',
      slug: 'new-dean-appointed',
      title: 'New Dean Appointed for Engineering Faculty',
      excerpt: 'Dr. Sarah Johnson has been appointed as the new Dean of the Faculty of Engineering.',
      date: '2023-05-28',
      category: 'news',
      image: 'https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHwwfDB8fHww'
    },
    {
      id: '5',
      slug: 'registration-deadline',
      title: 'Fall Semester Registration Deadline Extended',
      excerpt: 'The deadline for Fall 2023 course registration has been extended to June 30th.',
      date: '2023-05-20',
      category: 'notification',
    },
    {
      id: '6',
      slug: 'research-symposium',
      title: 'Annual Research Symposium 2023',
      excerpt: 'Showcasing groundbreaking research from our faculty and students across all disciplines.',
      date: '2023-05-15',
      category: 'event',
      image: 'https://plus.unsplash.com/premium_photo-1682144748274-add3d8ed04ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kdXN0cnl8ZW58MHwwfDB8fHww'
    },
  ];

const achievers = [
    {
      id: 1,
      name: "Rahul Sharma",
      course: "BCA (2020-2023)",
      company: "Google",
      position: "Senior Software Engineer",
      package: "₹1.2 Cr",
      location: "California, USA",
      testimonial: "The practical learning approach at our college gave me the confidence to crack international interviews.",
      social: {
        linkedin: "https://linkedin.com/in/rahulsharma",
        twitter: "https://twitter.com/rahulsharma"
      },
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D"
    },
    {
      id: 2,
      name: "Priya Patel",
      course: "MCA (2019-2022)",
      company: "Microsoft",
      position: "Product Manager",
      package: "₹95 Lakh",
      location: "Seattle, USA",
      testimonial: "The industry-aligned curriculum helped me transition seamlessly into product management roles.",
      social: {
        linkedin: "https://linkedin.com/in/priyapatel",
        twitter: "https://twitter.com/priyapatel"
      },
      image: "https://images.unsplash.com/photo-1678271215808-6fa76e3ebb40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGd1YXRlJTIwZ2lybHxlbnwwfDB8MHx8fDA%3D"
    },
    {
      id: 3,
      name: "Arjun Mehta",
      course: "B.Tech CSE (2018-2022)",
      company: "Amazon",
      position: "Machine Learning Specialist",
      package: "₹1.1 Cr",
      location: "London, UK",
      testimonial: "The research opportunities provided by the college laid my foundation in AI/ML.",
      social: {
        linkedin: "https://linkedin.com/in/arjunmehta",
        twitter: "https://twitter.com/arjunmehta"
      },
      image: "https://plus.unsplash.com/premium_photo-1661306554721-36f375f05302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBtYW58ZW58MHwwfDB8fHww"
    }
  ];  
const testimonials = [
  {
    name: "Kundan ",
    course: "Full Stack Web Development",
    duration: "6 months",
    review:
      "This course completely transformed my career. The hands-on projects and industry-relevant curriculum helped me land a job at Amazon within 3 months of completion. The instructors were always available to help, and the community support was exceptional.",
    photo: "https://pps.whatsapp.net/v/t61.24694-24/473400958_1336104264101506_8997009254125814244_n.jpg?ccb=11-4&oh=01_Q5Aa1wE86I4W_smn41CcwuFPC2RUWyVMsdt6d_zsQCZ3LrdZVw&oe=6872F5E5&_nc_sid=5e03e0&_nc_cat=101",
    company: "Amazon",
    rating: 5,
  },
  {
    name: "Khushi",
    course: "UI/UX Design Specialization",
    duration: "4 months",
    review:
      "As a career switcher, I was nervous about breaking into tech. This program gave me the confidence and skills I needed. The portfolio-building exercises were crucial for my job hunt. I'm now working at Meta as a product designer!",
    photo: "https://pps.whatsapp.net/v/t61.24694-24/491842735_1083838126890319_2758397277704704590_n.jpg?ccb=11-4&oh=01_Q5Aa1wFaB5CtfWQQJnJLBrMzCYY2jX4dMpZcnQrMJHnbefI8bg&oe=6873096A&_nc_sid=5e03e0&_nc_cat=107",
    company: "Meta",
    rating: 4,
  },
  {
    name: "Shivam",
    course: "Data Science & Machine Learning",
    duration: "8 months",
    review:
      "The depth of the curriculum impressed me. We didn't just learn theory - we worked on real datasets and deployed models to production. The capstone project became a talking point in all my interviews. Now I'm part of Netflix's recommendation team!",
    photo: "https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/491867498_1158655036013021_2815680004208516293_n.jpg?ccb=11-4&oh=01_Q5Aa1wGWLVYn5TtSbORZ5D4mHPDeDUctYtVVmx2usq16El9ZQQ&oe=68748C67&_nc_sid=5e03e0&_nc_cat=105",
    company: "Netflix",
    rating: 5,
  },
  {
    name: "Saurav",
    course: "Cloud Engineering & DevOps",
    duration: "5 months",
    review:
      "From zero cloud knowledge to AWS Certified Solutions Architect! The labs simulating real-world infrastructure challenges were invaluable. The career services team helped me negotiate a 40% salary increase at my current role at Microsoft.",
    photo: "https://pps.whatsapp.net/v/t61.24694-24/469607652_1268254471189232_8492873431884021242_n.jpg?ccb=11-4&oh=01_Q5Aa1wGnGF5nWOf74J4f52mxzVat63PNKLZizMXpx5hKospP_w&oe=686F74A3&_nc_sid=5e03e0&_nc_cat=103",
    company: "Microsoft",
    rating: 5,
  },
  {
    name: "Ella Kapoor",
    course: "Cybersecurity Professional",
    duration: "7 months",
    review:
      "The live hacking simulations were intense but prepared me for real-world security challenges. I particularly appreciated the ethical hacking modules and digital forensics training. I've since led security audits for Fortune 500 clients.",
    photo: "https://pps.whatsapp.net/v/t61.24694-24/491875587_1074570694009505_7147903798800781601_n.jpg?ccb=11-4&oh=01_Q5Aa1wErH_HaAuE_F3YEt_ltg8x2XsKxmWLg-xL6fJHAJE1G_A&oe=6871C9F2&_nc_sid=5e03e0&_nc_cat=106",
    company: "IBM Security",
    rating: 4,
  },
];  












export default async function Home() {
  let response;
  try {
    response = await fetch("http://192.168.1.67:8000/api/v1/catalyst/home/")
    response = await response.json();

  } catch (error) {
    console.log(error);

  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* ──────────────── HERO ──────────────── */}
      <AdmissionHero data={hereoData || response.hero_section} />

      {/* -----------------------about Us ------------------------------ */}
      <CollegeFacilities campusFacility={campusFacility || response.campus_facility} />
      {/* --------------------glallery section -------------------- */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-200" />
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Floating accent elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full filter blur-[80px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full filter blur-[80px] opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Campus Visual Journey
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Cimage</span> at a Glance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our vibrant campus life through stunning visual narratives
            </p>
          </div>

          {/* Expanded BentoGrid Container */}
          <div className="relative group mb-16">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="p-1"> {/* Adds subtle inner spacing */}
                <BentoGrid
                  images={imageItems || response.cimage_glances}
                />
              </div>
            </div>
            {/* Floating frame effect */}
            <div className="absolute -inset-4 border-2 border-transparent group-hover:border-blue-200 rounded-3xl pointer-events-none transition-all duration-500"></div>
          </div>

          {/* Enhanced Gallery Button */}
          <div className="text-center">
            <button className="relative px-8 py-4 font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full overflow-hidden group hover:shadow-xl hover:shadow-blue-100 transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span>View College Gallery</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* ---------course details-------------- */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-blue-200" />
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#pattern)" />
          </svg>
        </div>

        {/* Floating abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg className="absolute top-1/4 -left-20 w-64 h-64 text-indigo-100 opacity-70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M45,-78.3C58.5,-69.8,70,-58.3,77.9,-44.3C85.8,-30.3,90.1,-13.8,89.5,0.4C88.9,14.6,83.4,29.2,74.1,41.8C64.8,54.4,51.7,65,37.2,73.2C22.7,81.4,6.8,87.2,-8.9,86.5C-24.6,85.8,-49.2,78.6,-64.5,65.5C-79.8,52.4,-85.8,33.4,-86.6,14.8C-87.4,-3.8,-83,-22,-72.4,-36.4C-61.8,-50.8,-45,-61.4,-28.9,-69.3C-12.8,-77.2,2.6,-82.5,17.1,-79.1C31.6,-75.7,45,-63.7,45,-78.3Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-1/3 -right-20 w-72 h-72 text-blue-100 opacity-70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M38.4,-65.2C50.4,-58.9,61.4,-50.6,69.3,-39.8C77.2,-29,82,-15.5,82.8,-1.1C83.6,13.3,80.4,26.6,72.5,37.8C64.6,49,52,58.1,38.1,65.7C24.2,73.3,9.1,79.4,-5.8,79.9C-20.7,80.4,-41.4,75.3,-56.6,64.8C-71.8,54.3,-81.5,38.4,-84.4,21.2C-87.3,4,-83.5,-14.5,-74.3,-29.5C-65.1,-44.5,-50.5,-56,-36.5,-62.3C-22.5,-68.6,-9,-69.7,3.3,-67.9C15.6,-66.1,31.2,-61.4,38.4,-65.2Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Undergraduate</span> Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover programs designed to launch your career with industry-relevant skills and knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(courses || response?.courses)?.map((course: any, index: number) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">{course.description}</p>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Program Highlights</h4>
                    <ul className="space-y-3">
                      {course.highlights.map((highlight: any, i: number) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <span className="ml-2 text-gray-700">{highlight || highlight.highlight_text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors duration-300 group-hover:border-blue-300">
                    Explore Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --------------workshops and internships----------------- */}
      <ProgramsSection programs={workshops || response.workshops} />
      {/* ________________CallBackRequest___________ */}
      <CallbackRequestSection />

      {/* _________________Global Achivers__________________ */}
      <GlobalAchievers achievers={achievers} />


      {/* -------------News Section---------------- */}
      <LatestNewsSection newsItems={newsItems} />
      {/* --------------------------Testimonials---------------------- */}
      <section>
      <TestimonialsCarousel testimonials={testimonials} />
      </section>



    </div>
  );
}
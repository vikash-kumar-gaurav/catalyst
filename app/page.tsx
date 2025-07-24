
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import CollegeFacilities from '@/components/HomePageComponents/collegeFacility';
import ProgramsSection from '@/components/HomePageComponents/WorkShops';
import BentoGrid from '@/components/BentoGrid';
import HeroImage from '@/components/HeroFile';
import { MdDescription } from 'react-icons/md';
import type { Metadata } from 'next'
import TestimonialsCarousel from '@/components/HomePageComponents/Testimonials';
import LatestNewsSection from '@/components/HomePageComponents/Notification';
import CallbackRequestSection from '@/components/HomePageComponents/CallBack';
import GlobalAchievers from '@/components/HomePageComponents/CollegeAchievers';




export const metadata: Metadata = {
  title: 'Catalyst College',
  description: ' hi '
}

const heroData = {
  hero_img_url: "https://res.cloudinary.com/dcnp0gkrx/image/upload/v1753270808/517124044_1140604534762151_4895265090587035788_n_akow3w.jpg",
  duration: "2025 - 2028",
  tagline: "Shape your future with excellence — Enroll today in top-notch programs crafted for tomorrow's leaders."
}


const campusFacility = {
  campus_img_uri: "https://catalystcollege.in/sitepanel/uploads/aboutus/cimage-catalyst-pat.jpg",
  facilities: [
    {
      id: 1,
      title: "Library",
      description: "Digitally integrated library with thousands of academic titles, e-books, and research archives.",
      image: "https://catalystcollege.in/sitepanel/uploads/aboutus/image-004(1).jpg"
    },
    {
      id: 2,
      title: "Smart Classrooms",
      description: "Interactive smart classrooms with digital boards, AI-assisted learning tools, and virtual reality modules.",
      image: "https://catalystcollege.in/sitepanel/uploads/aboutus/WhatsApp%20Image%202024-11-13%20at%205.43.12%20PM%20(2).jpeg"
    },
    {
      id: 3,
      title: "Cafeteria",
      description: "Multi-cuisine hygienic cafeteria with daily menu rotations and meal plans for students.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Computer Labs",
      description: "High-speed internet-enabled computer labs with cloud-based access and state-of-the-art systems.",
      image: "https://admissions.cimagepatna.com/wp-content/uploads/2025/06/Labs-II.jpeg"
    },
    {
      id: 5,
      title: "Auditorium",
      description: "Fully air-conditioned auditorium with 500+ seating capacity, AV tech, and acoustic walls for events.",
      image: "https://images.unsplash.com/photo-1533832024848-4ca8b44c4d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXRvcmlhbXxlbnwwfDB8MHx8fDA%3D"
    },
    {
      id: 6,
      title: "Hostel Facilities",
      description: "Separate boys and girls hostels with Wi-Fi, biometric entry, and in-house wardens for safety.",
      image: "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG9zdGVsfGVufDB8MHwwfHx8MA%3D%3D"
    },
    {
      id: 7,
      title: "Innovation Lab",
      description: "AI/ML and robotics lab for hands-on innovation, equipped with 3D printers and IoT development kits.",
      image: "https://scontent.fpat11-1.fna.fbcdn.net/v/t39.30808-6/486171915_1056603129828959_6134060459618529572_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Zu7cxmZVAagQ7kNvwG8TOXA&_nc_oc=AdlhiGguLTSkun5BR4M2jzqRVv_ZqTF4k7UjIkteZ8N1rJCDixqdVAgpw0ZuBWmoUzV7ayHFxRKAIt88BlGFo4bf&_nc_zt=23&_nc_ht=scontent.fpat11-1.fna&_nc_gid=hQJ2JL_f915s17tiLz7mGA&oh=00_AfQyAZJICYuHe6AcFDE_EhIIFJnEbmFm6Ig3niOkLu1HAA&oe=6874E840"
    }
  ]
}


const imageItems = [
  { tag: "Freshers Party", alt: "Students enjoying DJ night at freshers party", link: "/event/freshers", url: '/1.jpg' },
  { tag: "Farewell", alt: "Seniors bidding farewell with performances and speeches", link: "/event/farewell", url: '/2.jpg' },
  { tag: "Holi Mela", alt: "Celebrating Holi with colors, music, and dance", link: "/event/holi-mela", url: '/3.jpg',},
  { tag: "Republic Day", alt: "Students participating in Republic Day parade and cultural programs", link: "/event/republic-day", url: '/4.jpg' },
  { tag: "Independence Day", alt: "Flag hoisting ceremony and patriotic performances", link: "/event/independence-day", url:'/5.jpg'  },
  { tag: "Cricket Tournament", alt: "Inter-departmental cricket tournament finals", link: "/event/cricket-tournament", url: '/6.jpg' },
  { tag: "Badminton Championship", alt: "College-wide indoor badminton championship", link: "/event/badminton-championship", url:  '/7.jpg'},
  { tag: "Cultural Fest", alt: "Annual college cultural fest with dance, drama, and music", link: "/event/cultural-fest", url: '/8.jpg' },
  { tag: "Tech Fest", alt: "Showcasing student tech projects, exhibitions, and coding events", link: "/event/tech-fest", url: '/9.jpg' },
  { tag: "Coding Round", alt: "Competitive programming round held at college level", link: "/event/coding-round", url: '/10.jpg' },
  { tag: "Workshop Day", alt: "Hands-on workshops and speaker sessions for students", link: "/event/workshop-day", url: '/11.jpg' },
  { tag: "Teachers' Day", alt: "Tributes and celebrations honoring faculty contributions", link: "/event/teachers-day", url: '/12.jpg' },
  { tag: "Annual Day", alt: "Celebration of college achievements with cultural performances", link: "/event/annual-day", url: '/13.jpg' }
];


const courses = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    duration: "3 years",
    description: "Comprehensive foundation in software development, data structures, and emerging tech trends.",
    link:'/program/bca',
    highlights: [
      "Live projects & hackathons",
      "Internships in top IT firms",
      "Career support for software engineering roles"
    ]
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    duration: "3 years",
    link:'/program/bba',
    description: "Management-focused program with real-world business case studies and entrepreneurial training.",
    highlights: [
      "Industry mentorship programs",
      "Startup incubation opportunities",
      "Workshops on digital marketing & finance"
    ]
  },
  {
    title: "Bachelor of Science in Information Technology (BSc IT)",
    duration: "3 years",
    link:'/program/bsc-it',
    description: "Curriculum covering web development, networks, cloud, and cybersecurity with practical exposure.",
    highlights: [
      "Certifications: AWS, CompTIA, Cisco",
      "Mini-projects every semester",
      "Cybersecurity, analytics, and AI modules"
    ]
  }
]


const workshops = [
  {
    id: 1,
    kind: "Tech Workshop",
    title: "Django Web Development Bootcamp",
    duration: "2 weeks",
    benefits: [
      "Hands-on full-stack development using Django",
      "Deploying real-time projects on cloud"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-NPpw63n0WkrkX4eUXRhkz5QXquYr8V5DQ&s"
  },
  {
    id: 2,
    kind: "Tech Workshop",
    title: "Agentic AI with LangChain",
    duration: "1 week",
    benefits: [
      "Building intelligent agents with Python",
      "Practical use-cases in finance and edtech"
    ],
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 3,
    kind: "Analytics Workshop",
    title: "Data Visualization using Power BI",
    duration: "1 week",
    benefits: [
      "Data modelling and dashboard building",
      "Live case studies from Indian startups"
    ],
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxUQEBIVFRUVFRUVFRUVFRUVFhYVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUtLS0tLS0tLS0tLS0tLy0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKABOwMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAgEDBAUHBgj/xABFEAACAQICBAoHBAkDBQEAAAABAgADEQQhBRIxUQYTIjJBYXGBkbEHUnKSobLRFCOCwSQzQmJzorPh8CU0tDVjdIPCFf/EABsBAQEAAwEBAQAAAAAAAAAAAAABAgMEBQYH/8QANREBAQABAgQDBQcEAQUAAAAAAAECAxEEEiExBUFREzJxkbEiJDNhgcHRIzSh8OEGFEJicv/aAAwDAQACEQMRAD8A67M2KIBAIBAmBEAgEAgTAiAQCAQJgRAIBAIEwIgEAgEAgEDW6Q4Q4LDtqV8VRpt6r1EDe7e8ymNvaG7KwGkKOIXXoVadVfWpurjxUyWWdzdkSCYEQCAQCBMCIBAIBAmBEAgEAgTAiAQCAQCAQKK+Mppzmz3DMzj4jxDh9Dpnl19J1rfp8PqanuxhvppBsVj4Cedl49pS9MLfk6p4dne9iE05T6VYeB/OZYeO6N97Gz5VcvDdTysrOw2Lp1OYwPVsPgc56ehxejr/AIeW/wBfk49XQ1NL34vnQ0tZpDT+Ew5tVropH7IOs3urc/CHXo8DxGr1wwu3+PnWixPpFwS8xar9iBR/OwPwlkduPgnEX3rJ+v8ADXYv0p0Kalvs1UgW/aQbTaZY4b1q4rwzLh9K6lyl2+LHo+mHCE8vDYhescU3/wBCbPYX1eT7SN3gPSTousbceaZ3VUZB3tYqPGY3SynkszxenwmLp1kD0qiVFOxkYMviMprss7st910gIBA5r6WuGNTDWwOFYpUdderUXJkQkhUQ9DNYknaBa22436WEvWsM8tujjfTfpJuesnpM3tTZaH0jWwtUVqDlHHSOkbmGxl6jMtplNqx3s7PoTgnpxcfhExAADG61FH7NRecB1bCOphOLUw5MtnRjlzTduZgyRAIBAIEwIgEAgECYEQCAQCBMCIBAIBAIt2Vp8fpInkobDf0ns3CfLeIeL5alunoXbH1878Pyerw3Byfaz7+jVO88LZ6UxUs8y2bJFLPMpGcjU47TiUjyDrONxsAfa+k9ThPDtXUszv2Z6+f6OzS4O6k+12/3yajSnCXF4gatSswXZqpyAfatm3fPqMN5JLd23R8O4bQu+GE39b1aTZNsdGWRGMzkaMqwNKn7o93mJu0+7xvGL91y/T6tKJvfHU8oyMDjKtB+MoVHpvlykYqTbYDbaOoxZL3N9uzofBv0q16dkxycauzjEAWoOtlyV+7V75py0JezOal83UtEaWw+LpCrh6i1F6tqn1WU5qeoznyxuN2rbLL2ZsxV8++lNGGmMRrdPFFfZ4mmMu8NOvT92NOfd5ObGLIpTKMa7J6F1b7JXJ5pr5doppreazn4nvG3R7V0OczaiAQCAQJgRAIBAIE2gFoBaAWgFoBaAWgFoBaAQNXprFao4sbTmezd3zwfG+LuGM0cb1vf4f8AL0eA0Oa898miZ58xI9mYqWeZSM5FFWqACSbAbSZnjhcrtO7bjhbdo81pTS7VLqlwu/YW+gn0XB+HY6f2tTrl9HscPwc05zZ9/o07GetHRlVbGbJGjKqyZtkaMqqYzZI0ZVhaTP3R7vMTbh3eR4tfu2X6fVphNr5A4lDCVDCUbDQ2lq+Eqith6hRunpVh6rrsZf8ABYyZYzKbUls7O38C+GVHSKauVOuou9K+0dL0ydq/EdPQTx6mncPg6Mc5k1fpO4FNj0XEYe32imurqmwFWne4S52MCSRfLlEHoIaefL0plju4jjcNUoOadZGpuNq1FKN22O0dc6Z17NO1bngzwcxWPcLh6ZKk51SCKSjpJfYT1DOW5zHunLb2fQHB/RFPBYZMNTzCDNjtZibsx7ST2ZDonFnlcrvXRjjyzZsZiqIBAIBAmBEAgEAgcvFVvWPiZ1bPF5r6mFVvWPiY2XmphVb1m8TGyb1Iqt6x8TJsc1MKresfExsnNfUwqt6x8TGy81MKresfEwb0wqN6x8TJsb0wqN6x8TCc1MKjbz4mNjmvqylbkifAeIavteJzy/Pb5Pu/D9H2fD4T8t/mRnnJI75FL1JlI2TF5jS2kTVOqp5A/mO89U+k4Hg5o482XvX/AA9rheGmnObLv9GsJnpyOjKq2M2SNGVVtNkjRlVTGbJGjKq2M2SNGVYWkv1Z7vMTbi8nxW/dsv0+rUCZvkziUMJUMJQ0qMjCYmpRqLVpMUdCGVhtBH+Wt0g2jbebUd54EcKU0jQubLWp2FVBvOx1/dNj2G47eHU0+S/k6cM+aPROgO0A9ovNTJMAgTAiAQCAQJgRAIBAIHLROt4hrQGEgkQGEIYSKYQGEgcQiYF5v/mXnPz3V08vaZbzzv1fo2hZ7PH4RUxG8fEzGYTzv7uifBqNNYxQOLBa522sMt189s9Xw3hccr7S+XZ6HCaGVvP06NGaijYvvHW+AsPG89x6VxyvfL5dP5VviH9YjqHJHgMpsjVcMZ5KziG6TrDc2fnmO6ZyNGWM8lbNTPQy9lmHgSCPEzZI05c0VsiHY/vKR5XmybtGWV9FNWmQLnYdhBBHZcdPVNmLTcmBpE/dnu8xNseV4pfu+X6fVqRMnyxxKGEqGEoYSoeBtODmmqmBxKYinnq5OvQ9M85D29G4gHokzxmU2qzLa7vofA4tK9JK1M6yOoZTvBFx2HqnnWbXZ1S79V8gIBAIBAIBAIBAIBAIHLROt4phIiRAYQhhIphAYQGEgtCW2+HT/aTffsz5JPe+Sdbdl5+Mmyc+3u9FdRp8X4po3T4nL0vWfq+88H1vbcLjfOdL+jHrVgoJOwC84sMLllMZ5vXww3u0eXqOzuTtLHYM+6fWaWnNPCYzye3OXSw2t2kK1MDnMB1DlH6Dxm6Rpy1rl7mO/wCd6T+f8K2qKNi39ok/AW/ObJGjLHUvvZfKfvd/2VnEsNlh2Kv0myRoz0cL33v63+SNiWO0Ke1V8wL/ABmcjRdHGe7vP1qlnXpUj2Wt8wM2yVqymc7ZfOfxsEqopuNfcRdbEbiLZzLaufL2n5fK/wAsPSppGkxQMpuOSWBG0c3K57L5dec2SXzeb4jz+wu9nl9fi0YmT5unEoYSoYShhKhxAYSo6r6HdNayVME55l6tL2SbVFHYxB/GZy8Rh/5N2ll5OlTlbhAmBEAgEAgTAiAQCAQOXidbxTCREiAwhDCRTCA6Lc2EluyyW3aLbgZDb0t9PrMdt+7PeYdMe/r/AAUTJqMJAlZLjLaJ5fivBe30+bH3p/n8nteC+IThtblzv2cv8XyrUaVcBLMSNY7BtIGfd0Zn4zxfDtC+05svJ+h8Nbnn/T67efl/z+nzaV6xtYckbh0+0dp8uoT3XozRkvNld7639p2n+9WOxmciZUjGbJGjKqiZskaMqrYzZI0ZVWxmyNGVVsZskacqw8ceQe7zE2bdHl+I3+hf0+rXCYvmzCUMJUMIDCZIcQGEqNzwR0kcLjqFa9gHCv7D8h79gYnuEx1MebGxcbtd30OZ5rrRAmBEAgEAgTAiAQCAQOYTqeKkQlMIDCQMIDopJsJLVktu0WkgCw7z+Q6vOY9+tZWzGbT9aUTJrNAYCQPsk7q8zwkI40Aerc9pJ+k4NTSwwztxm1vd+mf9J56mXBW53ec20+EahjEj6TKthR0FVdEfjKCtUXWp0nrKlR1uVDANZbEg2u18ptkeXq8fhjlljy5WTpbJvJfr/hg6S0ZiMP8Ar6LoN7KdU9jjknuMzkMOJ0tX8PKX6/LuwGM2SJlVbGbJGjKqmabJGjKq2M2yNGVYuNPIPd5zK9nmeIX+jf0a4TF88cQGEqGEocSoYQhhKGIuJUfR+gcXx+EoVumpRpse0oCfjeeZnNsrHZjd5uzpiqYEQCAQCBMCIBAIBA5hOp4phDEwgOiE7AT2SWspLfJYKe8gfE+H1k39GXL69D64tZch0npPbuHV5ybepctptiUStZhAYCQPs/P6CTuoEo8pwgf9IbqCj4X/ADnHq++/Uf8ApiTHw3D87fq1ZaYyPayyjY8ImGphL2/2dL+pWm7Z5nCX7Wr/APd+kZPBrB6SZ6dPCtUpCqrshcstF1TnHVIKttHQdsy6OXjNXhNrdSS2dLt3/b6jA1UxmJ+yYnD0VqHjV46iOJdalNHYllQ8XUzS3NEz22m7Rq76On7TTzu3Tpes2u3r1jyevcAzdI6c7G8xGPahgsIaa0fvBiC5ehQqltWsVFzUQmwGUsx3tefcZnqZ7+W23WzyJpTRYqVVdBToKcNRr19YlaVFqmVgACRrckqgBPLyFhlnjltP1aZq7Sy3frZPWtNpLRVqXGU61KrTLpTaopdRSZzyeOV1DIps1msRyT05TO5dNrOrj43U30rL0vRgUNCV3rV8Oqg1MOtd6ovsGHJFS283FhvJEwuUkleJtSYXR1WoivTXW16woIoPLeoVDWUbgGS5v+2vdd5E2Z1TQR1ahp4ihWekperTpmoWVFtrMrMgSqF2nUY2GeYzkmf5LyipoN6eHTEVatJFq0zUoqWcvUszKVVVU6pBXaxC8oZ7bWZ73aJt03XcD6etjUGqH+7xLBWUOCy4WuychgQ1mVTYg5gRqe6Y92diOMfBVqmMoJTcGkMPU+z08M7uXAqUwEReMQUyzG4OqQuecTaZSY34+Ze3Vh6eoqq4TVUDWwdNmsANZjWrgsd5sBn1CZYXff4pfL4NWJsYu+ej59bRWGP7hHuuy/lPP1vfrp0/dj0M1M0wIgEAgECYEQCAQCBzbjR0Ko/m+a86NvzeNzTyieObq7lUeQjlhz1K1W6GPcfpG0OfL1Oyuedf8R+sm8Te3uBTPV7y/WXdDBOsf52SbhtUbx8fpG4YAdflHUTrbspNgCVDCFaTSy/enrA8pz592NyynatewkY8+Xrfm6PoHROGSvhiiKTUwdRnvyrtehyrHZz3Hwh6uljMcsdvPG/sy9BDkaP/AINT5Ehnp3ph8HgdDD/Vv/bifkqzPyedp5X2/fzv7vMgZDsmTmmWW3du6+kalHB4UUygyrk3p0nYHjjaxdSV7rQ3XVzxwx2vr9WNhS+JoVqQJeu9WlWzN3qhFqq6gnnMOMDW2kA22S9mOOWWeNm/Xv8AHu1+mMG9DR+JFdWpmsKKU0cartq10qM+ocwoCWuel7DpmeF3yjo4XmwyvN59iYrSooLQ0gra1TFNh3qqLXtg7LiVIGwVaiq2e20zmO++Pp+70LdupqdSjgdJYXD8YhpYc1SahzTWxQfVqMRtC0zhb/wzL1yxt/3onSXZTVXHYdajHR2Hohabo1YUSq6tRDTbiqrPqvdXIGrrXvlL9m+d+aXeeTW6ee9PBC9wuCQW3H7Rib/lM8PP4sb5LuBWt9up6l9Y08UFsbHWODrhbHfci3XGr7vy+pj3bNExlLDYgaRNXi2okUkruWY4nWXimpK5LAjlFmGWrcHaJN8bZy/7DrJd2u4QsCmDsdmCpg9R4/EZTPDz+KXy+DUibGLvno9TV0Vhh+4T7zs35zz9b366dP3Y9FNTMQCAQCAQCAQCAQCBzQUW6RbtsPgZ07x4mxwFG036hkPE/STqJ409GQ3DL+5742ECUMIDCRDCBIkDCA0KYQNRplOWDvHkf7iaNTuwyaxhMGB8Li6lFtek7I1it1NjY7RKyxzyxu8reaH4XvRagKqBqdBHRQmTkMAASSbG1hu6ZdnRpcVceXmnSNR/+7VXW1Fpgs1QqxpoaiCqWLBKlr7GIv4StXtspvtt5+XWbtMRMmlWRKithKNfpj9S34fmE2afdv4b8SPPgTe9MwEoYAeGzqvKh1EoYi8qGVQNgtKhwIEk2EqPozg9QFHC0KGxqdGmpByN1UBj159InmZ3fK1147bbNlMWSYEQCAQCBMCIBAIBA5mJ1PDMIDCRUiA4kDCENAkSBgIDCFMIGFpalenf1T8Dl9Jq1J0Y5NIwmlgqYTJFbCUVsJYisiUVMJRWwmSNfpn9S34fmE2afvN/DfiR5xjkT1Toem3fC7BU6GOq0aS6qLxWqtyba1Cm5zJvtYnvmOFtxlrLKbVqhM2BhKGlQ4gMJUbngjo37VjqFG1wagZ92onLe/aFI7xMdTLlxtXGb5SPoWogbIi88112bq+LYc1r9TZ+DbfG8JtZ2HH254K9e1feGwdtoN/VapuLjOFEAgECYEQCAQCBzQTqeGkSKYQHEBhIhhAkSBgIDCAwhTCAMgIIOwi3jMb1SvNYikVYqdoM5rNq1qWEqKmEorYSithMoithKKmEqNdpr9Q3avzCbNP3m/hvxI80+w9hnS9N670i6Pq08c9Z0Ip1RS4trizauHohrAG4sd816Vlx2Z5zq8wJtazCUOJUMIDCVHU/Q/oQhKmObItelSuL3UH7xuwsAPwGcvEZ/wDi36Mnevd19LKmWrcjbY5dx/tPnNfxrR087hjLlt8nqafA5Z9d9l2A0jTrXC5EbVO22/rE7OD47T4mfZ6WeVauI4XU0Pe7erMna5VTUF2jI71y8bZHvhOWItUGwhu3knxGR8BB1H2gDnAr2jL3hcDvg5vVYrAi4II3jMeMKaBEAgEAgc1E6niJEgYQHEiGECRAYSBhAYQphAkSBhIjX6Ywtxxg2jb2b+6a9THzSxo2mpgrYTJFbCUVsJUVMJRWwmSNbpsfcN2r8wmzT95v4b8SPM1Oaew+U6XpvScPB/qdc9VD/jUZhpe5GWfdohNjAwlDCVDgyo2nBvQ1THYlMPTy1s2boRBznPZfLeSBMc8uWb1cZzXaPoKlhUw+HFKkNVKdPVUbgoy7+ueLxueU0NTKd9q79HGc+MeZxVSfBYx9Np4qdD1T9qpgG1yRlbZqnf2T1fDLZxOG3+9F43Cf9tlbO38vZazjaobrXI+6T+fdPsHzG2N7Xb4pSupNr2O43U+BzhLhlFkMEwKnw6k3tY7xdT3kZwnLEcW42PfqYA+BFvjeDa+o4xxtTvUg+N7HwvBvfQDFJsLWO5rqe4Na8HNFsKmBzQTpeIYQGEB5EMIEiAwkDCAwhUiAwkQwgMBINDpTAcWdZeaf5Tu7Jpyx2YWNY0xjFWwlFbCUVsJkiphKNbpwfcN+H5hNmn7zdw34keXfmnsM6o9R630iUKQxzslbXdhS4ynxbLxdsPRtyzk9xnlsmvSt5WWfd5kTa1mEocSklt2j0+Dwa01AAz6T0k/Sebqatyr9P8P8L0OE0pjMZcvO+dr03AjSX2bFhQq6tcrTc2F73Oob7dp2dcxmVvRyeMeGaWpo5auOMmcm+8856V1DHH7p/YbyM5uN/t9T4V8Xw/4uPxeJxVSfEYx9Zp4q9BP+m0vaPyNPT8On3nD4/snHz7pn8P3joM+ufHFdQRYgEbiLiFls7K+ItzWZew3Hg1wO60Muf1m4vUHqt2XU+BvfxEH2b+Q48DnBl7RceK3Ag5N+13WI4bNSD2G8MbLO5oRTVrqOScz6oGse8DYOs5Qzmnb18lAwpOwcUNyGzHttyR/N2wbYY9ut+UBwH/cqeKnzWE58vX/E/h4ITpeEYQHEgYQhhAkSBhAYQphAkQGEiGEBhIJZARYi4O0QNDpLRRS7Jmu7pX6iassduzCxqCJixVsJRUwlQhEyGs08PuG/D8wmzT95v4b8SPK1Oaew+U6XpvScPf8Aqdfsof8AGozHS9yLn3NoDgvUxS8YzCnTvkSNYtbI6q3GXXeXLPZz56sx6LtNcE6lBDURxUUZtydVgN9rkERjnumGtMrtWs0Noyviqop0KZdhmbbFUHNmbYo7ZnnZJ1dOlP6mPxn1b7jRtnmzB+s5asjI0PV/S6H8ej/VWbJg4eM1t9DUn/rfo7RpE/c1PYbyM4+N/t9T4V8Fw342HxjwGKqT4vGPstPFHB1/06j7R+Rp6fh0+8Yf75MfEZ9z1Ph+8dJn1T4hEAgEAgK9NTmQCd9s/GGUys7FOHU7bnqLMR4E2hefI9NAosoAG4Cw+EMbbe6YQQObidLxDCA4kQwgTAYSBhAYQqRAYCQMIQwkDCAwgMJBr8dodKma8ht42HtExuLG4vP4zRlWnzluPWXMf275jtYxsrAaRiqImQ1mnv8Abt2r8wm3S95v4b8SPKVNh7DOqPSet9Ilakcc6pR1HUUtepxjNxl8PS1eQRZLDLLbNelLys8+71ejqgWhSUbBTQfyiYvMz96nq18iDuMbMY6Fo3RGHwmHNLD01prqkm21jq85mObHrJnPllcr1e5pySxwla3JHYJ08j7vPX6svQdX9Mw3/kUP6qTK4dK4uJ1t9PKflfo7ppU/o9X+G/ymeTxv9vn8K+Y4X8bD4xzXFVJ8djH3Gnibgw98fR9pvkael4fP6+LX4pNuC1Ph+8dRn1D4MQCAQCBMCIBAIBA5xOl4hxAYSIkQGEgaAwhUiAwgMJEWUqbMbKCTuAvIymNvSNhQ0PVO2y9pz8BJzRvx4XUvfoy00GOl/Af3k5m6cFPOrRoVPWb4fSTmZf8AZ4etKdCr0Oe8AxzJeCx8qpqaHcc1gfES8zVlwec7Vh1sO6c5SOvo8RLu589PLDvGDiNH0anORSd9rHxGcbRr2hsLwMw1ZC2tUU3IyZSOj1gd++YXo6tHhcdTDe2sfH+jSjVQp9oqAG2eopORB/KXHLlu7fp8HjhlzSsCl6HcJ+3icQ3s8Uvmpm3299HT7OPUYngLo58Q1erQ4x21L8YzFeSioORfV2KOia5qZbbRlcZvu8FpCsqVqiLYBajqALAABiAAOgATqxnR4+e3NfiwquKFjnLsm7s9X9WfZPlOLze3j5PmlcSLDMbB0z1pp19Fnrs7g9iAcdhsx/ucP/VSM8NsL8HLq62+N+D6B0yf0at/Df5TPn+M/t8/hXn8H/cYfGOV4qsN8+Sxj77TwZPBFgcfR9pvkaehwP4+Ln8Wn3LU+E+sdWn0z4AQCAQCBMCIBAIBA5yBOl4hhIhhAYQGEgYQJEKYQLKaFiAoJJ2ASVZLbtG7wWhOmqfwj8z9JhcvR26XCeebcUqSqLKAB1C0xdmOMxm0hpFEAgECYEGBhYrRiNmvJPVs8JZXNqcLjl26U+jaDU0Ktt1j3iwzi1lw+ncMdqypG9MBuNO+NlVlF9VfdX6Qm0Rxa+qvur9INot4w/5aNlU8QnqJ7i/SU3oFFAbhEuNnIX6SG9Wlycj5CTaG5NRfVX3V+knJj6M/aZ+tCqAbhVB3hVH5RyYzyS6mV72rGcmZMCQCAQCBMCIBAIBA/9k="
  },
  {
    id: 4,
    kind: "Industry Tour",
    title: "Coca-Cola Bottling Plant Visit",
    duration: "1 day",
    benefits: [
      "Automated beverage production insight",
      "Sustainability and logistics overview"
    ],
    image: "https://c8.alamy.com/comp/AK1F9R/man-in-the-coca-cola-factory-in-radzymin-poland-AK1F9R.jpg"
  },
  {
    id: 5,
    kind: "Industry Tour",
    title: "Hajipur Footwear Factory Visit",
    duration: "1 day",
    benefits: [
      "Hands-on exposure to leather goods production",
      "Supply chain insights"
    ],
    image: "https://static.theprint.in/wp-content/uploads/2024/05/ANI-20240517213616.jpg"
  },
  {
    id: 6,
    kind: "Industry Tour",
    title: "PVC Pipe Manufacturing Process Tour",
    duration: "1 day",
    benefits: [
      "Raw material to finished product overview",
      "Quality control processes in action"
    ],
    image: "https://i.ytimg.com/vi/0z08GbRql1E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBcaZKEefgYXs8OiBiEOoXD2ZI5Ng"
  },
  {
    id: 7,
    kind: "Industry Tour",
    title: "Kurkure Snacks Production Line Tour",
    duration: "1 day",
    benefits: [
      "FMCG packaging automation",
      "Food safety and storage management"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcMV8rKLHH9dk8pkHN681qMfcf7LQ_3tYVQ&s"
  },
  {
    id: 8,
    kind: "Academic Tour",
    title: "IIT Bombay Campus Visit",
    duration: "1 day",
    benefits: [
      "Interactions with professors & lab visits",
      "Exposure to ongoing research and innovation"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3mPWaCKrOGetYMEftNUdEJ0r8KXL2G8Uew&s"
  }
]

const newsItems = [
  {
    id: '1',
    slug: 'ai-lab-inauguration',
    title: 'Inauguration of AI Lab in Collaboration with TCS',
    excerpt: 'College partners with TCS to launch an advanced AI research lab focusing on Indian industry needs.',
    date: '2025-06-10',
    category: 'news',
    isNew: true,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: '2',
    slug: 'ugc-approval',
    title: 'UGC Grants Autonomous Status to Campus',
    excerpt: 'The college achieves academic autonomy to design modern curricula under NEP 2020.',
    date: '2025-06-05',
    category: 'notification',
    isNew: true,
    isFeatured: true,
    image: ""
  },
  {
    id: '3',
    slug: 'alumni-meet-2025',
    title: 'Global Alumni Meet in Delhi',
    excerpt: 'Alumni from 15+ countries to reunite for networking, mentorship, and cultural celebration.',
    date: '2025-05-20',
    category: 'event',
    isFeatured: true,
    image: "https://plus.unsplash.com/premium_photo-1665203421659-09089ede4ffa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: '4',
    slug: 'startup-cell-launched',
    title: 'Startup Incubation Cell Launched',
    excerpt: 'The newly formed cell will support student ventures with seed funding and mentorship.',
    date: '2025-05-10',
    category: 'news',
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: '5',
    slug: 'exam-update',
    title: 'Semester Exam Schedule Released',
    excerpt: 'Detailed timetable for all UG and PG programs has been announced.',
    date: '2025-04-30',
    category: 'notification',
  }
]


const achievers = [
  {
    id: 1,
    name: "Ankit Raj",
    course: "BCA (2020 - 2023)",
    company: "Amazon India",
    position: "Software Development Engineer",
    package: "₹32 LPA",
    location: "Bangalore",
    testimonial: "Real-world coding projects and placement support helped me crack my dream job.",
    social: {
      linkedin: "",
      twitter: ""
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bjXseXhHiDj_aqbkRgRjB8jFO25DaAlAWDMRTCdU5bZjUdeOK5tAWDRtpnxd008mcWY&usqp=CAU"
  },
  {
    id: 2,
    name: "Sneha Verma",
    course: "MCA (2019 - 2022)",
    company: "Zomato",
    position: "Product Analyst",
    package: "₹21 LPA",
    location: "Gurgaon",
    testimonial: "The business intelligence modules during my MCA gave me the perfect skillset for product analytics.",
    social: {
      linkedin: "",
      twitter: ""
    },
    image: "https://media.cricheroes.in/user_profile/1607743048043_MP8GGBiRwrIQ.jpg"
  },
  {
    id: 3,
    name: "Rajat Sharma",
    course: "BSc IT (2018–2021)",
    company: "Flipkart",
    position: "Security Engineer",
    package: "₹18 LPA",
    location: "Hyderabad",
    testimonial: "Cybersecurity labs and faculty mentorship helped me land a role in e-commerce security.",
    social: {
      linkedin: "",
      twitter: ""
    },
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bjXseXhHiDj_aqbkRgRjB8jFO25DaAlAWDMRTCdU5bZjUdeOK5tAWDRtpnxd008mcWY&usqp=CAU"
  }
]

const testimonials = [
  {
    name: "Kundan Kumar",
    course: "Full Stack Web Development",
    duration: "6 months",
    review: "Got placed at Amazon after project-based learning here. The faculty support was phenomenal.",
    photo: "https://scontent.fpat11-2.fna.fbcdn.net/v/t39.30808-6/471334012_1088249496361515_2617594531183237883_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ZcVoOhnBgCEQ7kNvwE3ZpeE&_nc_oc=AdnckqJtzmt-mcKqjHIwIvxwYv9jpkhzqR7VMAccvzRgZQO_D7VtBlOgJNyX67irtMKhbXdkuRMm8rsLqc-JMaiC&_nc_zt=23&_nc_ht=scontent.fpat11-2.fna&_nc_gid=TjQkvxW7vDLE84SvYtyBxg&oh=00_AfQ_MHMnRSJsbWNWcfSNquwSQFYtUcPhDJ-JNcJoWJkzww&oe=6874F068",
    company: "Amazon",
    rating: 5
  },
  {
    name: "Khushi Singh",
    course: "UI/UX Design Specialization",
    duration: "4 months",
    review: "As a commerce graduate, this course helped me pivot into tech design. Now at Meta as a UX designer!",
    photo: "data:image/jpeg;base64,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",
    company: "Meta",
    rating: 4
  },
  {
    name: "Shivam Gupta",
    course: "Data Science & Machine Learning",
    duration: "8 months",
    review: "Capstone project made my resume stand out. Working in ML team at Netflix India now!",
    photo: "https://m.media-amazon.com/images/S/amzn-author-media-prod/qhclq7i6eo9kgc19paj1i7nb95.jpg",
    company: "Netflix",
    rating: 5
  },
  {
    name: "Saurav Jha",
    course: "Cloud Engineering & DevOps",
    duration: "5 months",
    review: "Achieved AWS certification and doubled my salary at Microsoft India. Highly recommend the DevOps labs.",
    photo: "https://www.povertyactionlab.org/sites/default/files/styles/hea/public/images/2024/12/Shivam-Singh.jpg?itok=WFj3A5LC",
    company: "Microsoft",
    rating: 5
  },
  {
    name: "Ella Kapoor",
    course: "Cybersecurity Professional",
    duration: "7 months",
    review: "Live hacking simulations were next-level. Now leading audits for BFSI clients at IBM Security.",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREL4hHxYkMs5mNN4cUq2b1D8HoofTe2OPwtw&s",
    company: "IBM",
    rating: 4
  }
]













export default async function Home() {
 
//  )
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* ──────────────── HERO ──────────────── */}
      <HeroImage data={heroData } />

      {/* -----------------------about Us ------------------------------ */}
      <CollegeFacilities campusFacility={campusFacility } />
      {/* --------------------glallery section -------------------- */}
      <section className="relative py-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Life</span> at Cimage
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
                  images={imageItems }
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
      <section className="relative py-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
            {(courses )?.map((course: any, index: number) => (
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

                  <Link href={course.link}>
                      <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors duration-300 group-hover:border-blue-300">
                    Explore Program
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --------------workshops and internships----------------- */}
      <ProgramsSection programs={workshops } />
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
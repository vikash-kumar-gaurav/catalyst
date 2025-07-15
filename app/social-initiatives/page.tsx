import HeroSection from '@/components/newHeroImageForAllPage';
import { fetchPageData } from '@/lib/useFetchData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Impact Initiatives | Catalyst College - Transforming Lives Through Service",
  description: "Explore Catalyst College's extensive social outreach programs including blood donation camps, student welfare, sports initiatives, and community development projects.",
  keywords: "social responsibility, blood donation camp, student welfare, sports initiatives, NSS, women empowerment, rural development",
};

// Extensive JSON data for all sections
let socialData = {
    "page_name": "social-initiatives",
    "bloodDonation": {
        "title": "Life-Saving Blood Donation Initiatives",
        "description": "Our biannual blood donation camps have become a cornerstone of our community service program.",
        "highlights": [
            "Organized in partnership with Red Cross and local hospitals",
            "Special 'Young Donors' program to encourage student participation",
            "Blood group registry for emergency needs",
            "Awareness sessions on blood donation myths"
        ],
        "achievements": [
            {
                "year": "2023",
                "units": "450",
                "donors": "380"
            },
            {
                "year": "2022",
                "units": "390",
                "donors": "320"
            },
            {
                "year": "2021",
                "units": "280",
                "donors": "240"
            }
        ],
        "testimonials": [
            {
                "quote": "Donating blood at college was my first time. The team made it so comfortable, I've become a regular donor now.",
                "author": "Rahul, B.Com 2nd Year"
            },
            {
                "quote": "Our blood bank camps have saved lives during critical shortages. Proud of our students' commitment.",
                "author": "Dr. Neha Sharma, Medical Coordinator"
            }
        ],
        "gallery": [
            {
                "src": "https://scontent-del2-3.xx.fbcdn.net/v/t1.6435-9/71143843_2744901165541537_4730165835203608576_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ozLbEhCMROIQ7kNvwHCfUHj&_nc_oc=AdmWa5PmbaN8Qv5TSdvGDzQdgJE1NvnCPBUWPY5kVUSRyoCnbaM6xnnEd3XsP4s_30g&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=RwuI8rFtVxsN66AAAP8hvA&oh=00_AfQ3jyA1r7bBPmv49bTrRTRVDeAx9QI3f0uOi9Kk78FMCA&oe=689D9906",
                "alt": "Students donating blood"
            },
            {
                "src": "https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/71495625_2744901642208156_3934718800854777856_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ykO-XivIgf8Q7kNvwFyvSHh&_nc_oc=AdkbafH_t4IEw1zHHRTttyoZaRJSOyu560YOYJdv1oMAOWijlSFiPgAlnFytq3-29bM&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=WzJiMql2L75644KD9OxYGg&oh=00_AfStXFKo8idZqZBm1-rZvLUJ1UE9ePoucL6Uepj-URql8w&oe=689D9983",
                "alt": "Blood donation camp setup"
            },
            {
                "src": "https://scontent-del2-2.xx.fbcdn.net/v/t39.30808-6/487286892_1064883055667633_5024952859530526660_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Vq6YO79nZXcQ7kNvwFH1m7V&_nc_oc=AdlomlWggngVQ4HUhn8F1ztGkUlFC_7xLATkzaDCEJmy-GREEBjFoQo3x3N3GdW4IIs&_nc_zt=23&_nc_ht=scontent-del2-2.xx&_nc_gid=Zl6Z20tHOvAEP304oMWk0g&oh=00_AfTegDsGKGQTF15y6aYsqhs3f3wh0veKr9lLuR6YGi1GgA&oe=687C07FD",
                "alt": "Girls also show their trust"
            },
            {
                "src": "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/487504194_1064883049000967_3247859890276381075_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_aid=0&_nc_ohc=YdVuWBrjRl4Q7kNvwGVATNk&_nc_oc=AdnYbL4H_ubpKF-dI3TUW8mQyHigTmZiE-mp6OaAmcof8Kvrgaxe9aGyxK2GkSoDwXI&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=1wO-JZMo3tG8ThsOl96vbA&oh=00_AfR_9DJGTxr5AmFcfCgRyMoUT1km0vD8jy2LVu3044UEGg&oe=687C1085",
                "alt": "Blood Donation"
            },
            {
                "src": "https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/488217060_1064882295667709_1999050953493412670_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aDHDoG3AUhEQ7kNvwGeu1FM&_nc_oc=AdkgGLURsbuAnDkQpSpeR45308FtxVdTk2A9tRvqpZuWod8kH2B-vkXys6oj0ZGr08E&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=k53Y1V1ALmvlm8aDkTOp_Q&oh=00_AfSGsT5sLIM17JQqj_Hti2PzRFCtiUkU30WfpmfduWbRnQ&oe=687BDA5D",
                "alt": " happy to donate my blood to save someone"
            },
            {
                "src": "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/487484441_1064881979001074_793804582653629235_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0UhpKFEldIgQ7kNvwE0-Hoj&_nc_oc=AdkOfNQX4SsM3sSO42RCzTbJM5x2tsSThMr7WPPGhurRW6QQImCRZAjxX96jcX8PruA&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=De9a03AAjf93RClLO8pZdg&oh=00_AfSYwQ0Nlc6ab9WfFMf4lINS0do5iEsvb31nJwyxnkmwIw&oe=687C0FBD",
                "alt": "Donating blood during cimage blood donation camp"
            },
            {
                "src": "https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/487511321_1064882255667713_8297367989822617538_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DBKL5M8b5ycQ7kNvwGw2bGw&_nc_oc=AdnbSBhTrBIuYCk4qz0n0p8s1_L_jP7mOZ13oCyHtbhGm76ROiKchSNUzAg0Y0ahORE&_nc_zt=23&_nc_ht=scontent-del1-2.xx&_nc_gid=jE_guRa7taQVrJmMknYrAw&oh=00_AfQrpu0Gu5IW1J9BIfWX_d7KgVHwP5GwEmdbBCiSb6Iy7g&oe=687BF308",
                "alt": " donating blood to save life"
            },
            {
                "src": "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/487216484_1064882302334375_4674392581528068795_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TUgJ1Ry1uZ8Q7kNvwGn0d0w&_nc_oc=Adks0UxoUGa0E41dI2bqrY8SLHwt7214Y8b7u9fky_msoiyHOBF-GthZ-YgOWliuyxw&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=QIwes9JeACwt0n9N6TkEEA&oh=00_AfSIaJYLTDB7vikAQ9xUgvz227qgGc4R9p4FB4m8KDjCAQ&oe=687BFD9C",
                "alt": "checking blood sample and hemoglobins"
            },
            {
                "src": "https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/488453873_1064881952334410_3135901574836215516_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=h7YRzXyFU4AQ7kNvwFwvFSA&_nc_oc=AdkWpwTT0R6jXzi0zIiOsvsQpXQItJMj_WpavfSU-z9tMDwGs5TXVufaw6iCU86DAO8&_nc_zt=23&_nc_ht=scontent-del1-2.xx&_nc_gid=3z7xJ01-DZrq4ZOIgKtQxQ&oh=00_AfQJR0bynaS78pCeh2QcBpylE6_XhbiMA7o4V2G_yWtTaQ&oe=687C1D33",
                "alt": "checking blood sample and hemoglobins"
            }
        ]
    },
    "heroSection": {
        "imageUrl": "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/486355340_1056889366467002_3263269439069116964_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=I6so-M_-dpwQ7kNvwHVkk3J&_nc_oc=AdkrIxGf_M8n1k_5Ar428ISKbZ7UteoTvK7PEe5CDWhnjUFQwnpJIcXyUS9p8Rt4e4s&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=M3qV4MMyjI8RYKbKdZc1fg&oh=00_AfQSFa8G2wXpsuoApzJFgLWplI1IwPfPiPPLDLwzF7to9A&oe=687BF2D6",
        "title": "Social Initiatives",
        "description": "A step towards a better world",
        "overlayOpacity": 0.9,
        "height": "lg"
    },
    "purpose": {
        "title": "Our Social Mission",
        "description": "Catalyst College integrates social responsibility into education, creating compassionate leaders who drive positive change.",
        "points": [
            "Foster civic responsibility through hands-on community projects",
            "Develop leadership skills via student-led social initiatives",
            "Bridge urban-rural divide through technology and education",
            "Promote health awareness through regular medical camps",
            "Support underprivileged students through scholarship programs"
        ],
        "stats": [
            {
                "value": "1500+",
                "label": "Volunteers Engaged"
            },
            {
                "value": "50+",
                "label": "Villages Impacted"
            },
            {
                "value": "5L+",
                "label": "Lives Touched"
            }
        ]
    },
    "sportsInitiatives": {
        "title": "Sports for Social Change",
        "programs": [
            {
                "name": "Champion's Program",
                "description": "Identifying and nurturing rural sports talent",
                "achievements": [
                    "5 state-level players identified in 2023",
                    "Sports scholarships for 12 students",
                    "Annual inter-village sports tournament"
                ]
            },
            {
                "name": "Adaptive Sports",
                "description": "Inclusive sports for differently-abled students",
                "achievements": [
                    "Special wheelchair basketball team formed",
                    "Annual para-athletics meet since 2021",
                    "Sign language training for coaches"
                ]
            },
            {
                "name": "Community Fitness",
                "description": "Promoting health through sports",
                "achievements": [
                    "Free yoga classes for 300+ community members",
                    "Morning running club with 150+ regulars",
                    "Annual 'Run for Cancer' charity event"
                ]
            }
        ],
        "gallery": [
            {
                "src": "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/486560027_1058956659593606_6797265105672671932_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jr_65htFPsUQ7kNvwHx7oWv&_nc_oc=AdkFR5L8eN9vu_AWRzwNlxRP-qVrru6ISzuBTE_YHtdXubJOU_Pe3ayW42uQxSUlCbc&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=OwuJzz-nJe0rmgvDvAHcgA&oh=00_AfQpSnuglQkukE8q4zeBOzKQiyFA-W28sl9bI9iuVQXKbg&oe=687BDDC4",
                "alt": "College cricket team"
            },
            {
                "src": "https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/486473279_1058955286260410_7053765430285051233_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cxJF4FofGtMQ7kNvwHIxYjY&_nc_oc=AdkLEgldNVWIAYtF8T86lU-5mgUvr2QGZZPyu3BjGkgPMZo7Q52Wy4diMcRPi8HvPGQ&_nc_zt=23&_nc_ht=scontent-del1-2.xx&_nc_gid=bZOSDe7ITIFa3bfFmhiUkQ&oh=00_AfSpAWWSzvJ1nqgRtC6Snr7kxATOKKrPeN6S8nBDhLQCOA&oe=687C041E",
                "alt": "Badminton"
            },
            {
                "src": "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/510317731_1126615716161033_1299775679840386401_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3PMT4N2K2NMQ7kNvwGYHPjb&_nc_oc=Adn4DDVy10chSi1kFUKFE0cjdC81ypJNz29ptncYp4fAJr8Jd-ld7QguzbEpC69U78U&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=5YZgkjUBn_9avSmqz-AdIg&oh=00_AfTAGQx5ECGGZcKhaaUmOCtDhai4EROps55r2BU7XkdGzw&oe=687C0AF4",
                "alt": "Yoga session"
            }
        ]
    },
    "studentWelfare": {
        "title": "Comprehensive Student Welfare Programs",
        "sections": [
            {
                "title": "Mental Health Support",
                "icon": "🧠",
                "content": [
                    "Free counseling services with professional psychologists",
                    "Monthly stress management workshops",
                    "24/7 mental health helpline",
                    "Peer support group 'Mind Matters'"
                ]
            },
            {
                "title": "Financial Assistance",
                "icon": "💰",
                "content": [
                    "Merit-cum-means scholarships for 25% students",
                    "Emergency fund for crises",
                    "Free laptops for economically disadvantaged students",
                    "Book bank with 5000+ titles"
                ]
            },
            {
                "title": "Career Support",
                "icon": "💼",
                "content": [
                    "Free skill certification programs",
                    "Resume building workshops",
                    "Mock interview sessions with HR professionals",
                    "Alumni mentorship program"
                ]
            }
        ],
        "stats": [
            {
                "value": "200+",
                "label": "Students assisted annually"
            },
            {
                "value": "₹25L+",
                "label": "Scholarships distributed"
            },
            {
                "value": "100%",
                "label": "Placement assistance"
            }
        ]
    },
    "upcomingEvents": [
        {
            "date": "2 August 2025",
            "title": "Career MahaKumbh",
            "description": "Freely Organize an events that show the new students the new career path in their life"
        },
        {
            "date": "5 Sep 2025",
            "title": "Teachers' Day Village Outreach",
            "description": "Educational activities in rural schools"
        },
        {
            "date": "2 Oct 2023",
            "title": "Gandhi Jayanti Cleanliness Drive",
            "description": "Pan-city cleanliness campaign"
        }
    ],
    "saraswatiPujaInitiatives": {
        "title": "Saraswati Puja Social Outreach 2024",
        "tagline": "Embracing divinity through service to humanity",
        "overview": "Our annual Saraswati Puja initiatives combine spiritual celebration with meaningful social action. This year we expanded our programs to touch more lives than ever before.",
        "initiatives": [
            {
                "id": "warmth-drive",
                "title": "Winter Warmth Clothing Drive",
                "subtitle": "Combating winter hardships with dignity",
                "description": "Our comprehensive clothing initiative addressed seasonal needs while promoting sustainable fashion through community participation.",
                "details": {
                    "preparation": [
                        "6-month community collection campaign",
                        "Sorting by 50+ volunteers over 200 hours",
                        "Professional dry-cleaning of all donated items",
                        "Quality checks by textile experts"
                    ],
                    "distribution": {
                        "locations": [
                            "Shishu Niketan Orphanage (Kolkata)",
                            "Nirmal Hriday Old Age Home",
                            "Sundarban Tribal Village Cluster",
                            "Railway Platform Outreach Program"
                        ],
                        "methodology": "Door-to-door delivery for elderly, Size-matching system for children"
                    },
                    "specialFeatures": [
                        "Eco-friendly packaging from recycled materials",
                        "Multi-lingual care instructions attached",
                        "Included handmade greeting cards from local school children"
                    ]
                },
                "impactMetrics": [
                    {
                        "value": "2,450",
                        "label": "Clothing Items Distributed",
                        "icon": "shirt"
                    },
                    {
                        "value": "18",
                        "label": "Institutions Served",
                        "icon": "building"
                    },
                    {
                        "value": "320+",
                        "label": "Volunteer Hours",
                        "icon": "users"
                    },
                    {
                        "value": "78%",
                        "label": "Reused Materials",
                        "icon": "recycle"
                    }
                ],
                "gallery": [
                    {
                        "src": "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/494887616_24101901616081516_7358920563547091298_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ll4XlWImAQoQ7kNvwELxlDY&_nc_oc=Adk5_dIZ6jshgc_gbXJpbxJ2RA9D1AUk1J4ylQJQ0KwktBg4pDgWsCKKW-klV8P9uvs&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=OhekTVKwfWg0swVoreAWiw&oh=00_AfQC4H1kapnozaMxTGJavuWA6tWBHnwrKaI-AbJ7a35Xww&oe=687C0B2C",
                        "alt": "Community donation collection point",
                        "caption": "Collection Drive"
                    },
                    {
                        "src": "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/487545171_1059465282876077_6933790708618471626_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UvQXLOFqwFMQ7kNvwHe79i4&_nc_oc=AdlMgdDytEFmG6v1dxrE_PCDww8Urov8konrmkZN9nDoxaigS3-38E7SeT0-IjIYDqU&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=fZ1ir6HNX530ZbwNzMZCtg&oh=00_AfSWDTHukMVCLGyBhMTpIR1BX5b-Fs_yAa1wNhjJnwcqZg&oe=687C1A2B",
                        "alt": "Volunteers sorting winter wear",
                        "caption": "Quality Control"
                    },
                    {
                        "src": "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/487036880_1059465426209396_4906932412347891683_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ajvv-Uy__pIQ7kNvwHhzzo4&_nc_oc=AdmnpSJa2lWKtwUl1_GOYCH2G_PaKWSTWiw6AWu7GUZX9BUw4V-Pv6jbH4K5Cnz2y7A&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=ACAkLVMtrg7TCS43Uloz8Q&oh=00_AfT5YXJF8KsTHrvteVdsUqP01aVud4xLPmEbDUJWCdD8Ag&oe=687BF769",
                        "alt": "Distribution at tribal village",
                        "caption": "Rural Outreach"
                    },
                    {
                        "src": "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/486854107_1059465392876066_128403449979356360_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kI57RJ5iU9QQ7kNvwGOcYSF&_nc_oc=AdkRWALFYOEpvdmKjQWEu7FVNe0Zi_Kz4EIMwKy-AxK7Cf7XPMAv1g1d1PSaS8u5mu8&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=VDUQOciyaDmGxreJA15nZw&oh=00_AfSRf7IDY9_XfazqwseqVzOD_ERhrK7djFWz5KMm0gVSTg&oe=687BFE14",
                        "alt": "Children receiving packages",
                        "caption": "Joyful Recipients"
                    }
                ],
                "futurePlans": [
                    "Establish permanent collection centers",
                    "Partner with textile manufacturers for new items",
                    "Winter wear repair workshops"
                ]
            },
            {
                "id": "education-equity",
                "title": "Knowledge For All Initiative",
                "subtitle": "Bridging educational disparities",
                "description": "Our literacy program delivers comprehensive academic support through infrastructure, materials and mentorship.",
                "details": {
                    "components": [
                        {
                            "name": "Textbook Library",
                            "items": [
                                "NCERT textbooks",
                                "Competitive exam guides",
                                "Bengali literature",
                                "STEM workbooks"
                            ]
                        },
                        {
                            "name": "Learning Kits",
                            "contents": [
                                "Geometry sets",
                                "Art supplies",
                                "Scientific calculators",
                                "Language dictionaries"
                            ]
                        },
                        {
                            "name": "Digital Resources",
                            "offerings": [
                                "Pre-loaded tablets",
                                "Educational SD cards",
                                "Offline Wikipedia access"
                            ]
                        }
                    ],
                    "implementation": {
                        "schoolPartners": [
                            "12 government schools",
                            "8 NGO-run learning centers"
                        ],
                        "distributionStrategy": "Need-based allocation system",
                        "monitoring": "Quarterly impact assessments"
                    }
                },
                "impactMetrics": [
                    {
                        "value": "1,850",
                        "label": "Books Distributed",
                        "icon": "book"
                    },
                    {
                        "value": "420",
                        "label": "Complete School Kits",
                        "icon": "backpack"
                    },
                    {
                        "value": "37",
                        "label": "Digital Devices",
                        "icon": "tablet"
                    },
                    {
                        "value": "9",
                        "label": "New Libraries",
                        "icon": "bookshelf"
                    }
                ],
                "gallery": [
                    {
                        "src": "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/487192657_1059465386209400_2741203299868525955_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=r0tAqtFHab4Q7kNvwF0jOEr&_nc_oc=AdnnXt1-UosUvZAAJfbh2nxXtY1z1NNFxLmWWt7wPOUFBxxPaqLTYcoLKhBKRQ6ZwrE&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=6PszaFSzaLKyPqF8xxqq1w&oh=00_AfRezuNrm9GvYSybVaDVftFGDY58iNOgOek45cU4U-yDfg&oe=687C0A30",
                        "alt": "Students exploring new books",
                        "caption": "Library Setup"
                    },
                    {
                        "src": "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/494697775_24104682419136769_8272606791586889647_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZJ4igT-54O4Q7kNvwGQmHgS&_nc_oc=AdmLvqnqAqUpZkbIk1p7kSOwOlM5rb1wQfNqQHa8Hived9cUzpvTyg5xB-nYLV-sXuo&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=K8EvTngoNLNBohEvwfoHlw&oh=00_AfRihCwYa0kFrmALBQAfGiMsdnaSuvBeNaqAgBwQ81M3mA&oe=687C0B14",
                        "alt": "Teacher with educational kits",
                        "caption": "Resource Distribution"
                    },
                    {
                        "src": "https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/487348865_1059465572876048_2874551856872495678_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f44QA3pwNT0Q7kNvwFgfO34&_nc_oc=AdkpNewT03oppnQvF2kkMz00blokVo6DBC6_kwisw5vW0XTSFPVbwtBDVQTJ23f00Og&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=NT09W8Te0mrmoqGqKzUwQg&oh=00_AfQoa03itk3HBf-95lbWybtvGEOsdZ5J23mHNUSbbbrf6w&oe=687BEB19",
                        "alt": "Children using digital tablets",
                        "caption": "Tech Integration"
                    },
                    {
                        "src": "https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/494778700_24104682475803430_7984266922341959800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NF5ZkSKHbFoQ7kNvwGaJHdV&_nc_oc=Adlp4ge0NlSVMZkWCnDiwawpsItlP61qSbs5Rk307MW2KEQUn8Dn9-wClFN0SKck0JQ&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=A6Rsscr2-Wud959v3NVTDw&oh=00_AfT_l5bVwb1o0x36VtPn1_AnfT4LTmhY0bww1iF__ONi-Q&oe=687C152C",
                        "alt": "Sponsorship award ceremony",
                        "caption": "Scholarship Program"
                    }
                ],
                "futurePlans": [
                    "Mobile library van project",
                    "Annual book fair sponsorship",
                    "Career counseling workshops"
                ]
            },
            {
                "id": "musical-therapy",
                "title": "Harmony Project",
                "subtitle": "Healing through sound",
                "description": "Our sensory enrichment program brings therapeutic music to special needs institutions.",
                "details": {
                    "equipment": [
                        {
                            "type": "Audio Systems",
                            "specs": [
                                "Bluetooth enabled",
                                "Tactile controls",
                                "Durable casing",
                                "8-hour battery"
                            ]
                        },
                        {
                            "type": "Instrument Kits",
                            "items": [
                                "Hand percussion",
                                "Tuned bells",
                                "Therapeutic singing bowls"
                            ]
                        },
                        {
                            "type": "Accessories",
                            "includes": [
                                "Noise-canceling headphones",
                                "Vibration pads",
                                "Custom storage"
                            ]
                        }
                    ],
                    "implementation": {
                        "institutions": [
                            "Blind Boys Academy (Howrah)",
                            "Kolkata Deaf Children's Society",
                            "Asha Neurodiversity Center"
                        ],
                        "training": [
                            "Staff orientation workshops",
                            "Therapist certification program",
                            "Maintenance tutorials"
                        ]
                    },
                    "programs": [
                        "Daily music therapy sessions",
                        "Rhythm development classes",
                        "Monthly performance showcases"
                    ]
                },
                "impactMetrics": [
                    {
                        "value": "7",
                        "label": "Full Systems Installed",
                        "icon": "speaker"
                    },
                    {
                        "value": "140+",
                        "label": "Therapy Sessions",
                        "icon": "music"
                    },
                    {
                        "value": "28",
                        "label": "Staff Trained",
                        "icon": "graduation-cap"
                    },
                    {
                        "value": "3",
                        "label": "Institutional Partners",
                        "icon": "handshake"
                    }
                ],
                "gallery": [
                    {
                        "src": "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/494679829_24165220373082973_4020780669397141769_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bEWoSjLxgnEQ7kNvwH1wX7g&_nc_oc=Adnym4ptJ6zt6EHhzrXtbzH5lgeV0_h1sv7s-ewKUljaLKezU9PCvumqTtiEyk0N22w&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=JU5l3LaanYpb6wXje3p4Ew&oh=00_AfT3v6yx_c15uVbjdGokIUkqmkiHZTH8ZvJl6ucJeXiR6Q&oe=687C0762",
                        "alt": "Giving bags and coppies ",
                        "caption": "copy distribution"
                    },
                    {
                        "src": "https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/496207240_24165220063083004_3454952184758252080_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DUOobviglLoQ7kNvwElQVGb&_nc_oc=AdmM2auQO1a-o0ojlqN9LDhocc4q2VaJfFicPm1QtwlCBq4ZwZsR09cVw1hTwxO29b0&_nc_zt=23&_nc_ht=scontent-del1-2.xx&_nc_gid=g9q42Uqicg6Dt8w251mSHw&oh=00_AfQIWwoi_BE38CaERqzcQPWUB1X1Cf7huquF3zP4KxReWw&oe=687C187A",
                        "alt": "Water filter ",
                        "caption": "Clean water for all"
                    },
                    {
                        "src": "https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/487279874_1059465549542717_8015275644592277424_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mXxytTZ-tgAQ7kNvwF8tECZ&_nc_oc=AdkjtRYT1Yln9lF2k-CeIyDCfcAX5QMsptEJlJuPFAachGxTe7977J2D_Mq-5IWGOGg&_nc_zt=23&_nc_ht=scontent-del1-2.xx&_nc_gid=A69rzqzgCtXDQKzjECvOsA&oh=00_AfQzHErXd2WVpMrbpD5sbuzdJztDVYUGON9UDqEDnwVQQg&oe=687BEEDE",
                        "alt": "Fan donate",
                        "caption": "Giving Fans to deal with hot summer "
                    },
                    {
                        "src": "https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/486832023_1059465559542716_857533387504463260_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CLI5Xc9iOscQ7kNvwHx7N1s&_nc_oc=AdlyfXUGq0OwVJqvSdMLK7VMTIzskJRyCp40LVWOnstHENmpCt0-PVIX3BzwWjev5nI&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=gj4w7mm9_uFX3sAt9GADow&oh=00_AfRRmxq7655GDuEzWSVCWv9pWboknsD5u3yC1UAXcmRbCQ&oe=687C1D28",
                        "alt": "listening fairy tale",
                        "caption": "Sharing their memories"
                    }
                ],
                "futurePlans": [
                    "Expand to 5 more institutions",
                    "Develop regional music therapy curriculum",
                    "Annual inter-school music festival"
                ]
            }
        ],
        "footnote": "All initiatives monitored by our Social Impact Audit Team with quarterly public reports"
    }
}

export default async function SocialInitiatives() {

  const { data, error } = await fetchPageData("social-initiatives");
  socialData = data as any ?? socialData;


  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        title={socialData.heroSection.title}
        description={socialData.heroSection.description}
        imageUrl={socialData.heroSection.imageUrl}
        overlayOpacity={socialData.heroSection.overlayOpacity || 0.4}
        height={"lg"}
      />

      {/* Purpose Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-4xl font-bold text-center mb-8">{socialData.purpose.title}</h2>
            <p className="text-xl text-center mb-12 max-w-4xl mx-auto">{socialData.purpose.description}</p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <ul className="space-y-6">
                  {socialData.purpose.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-6 text-center">Our Impact in Numbers</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialData.purpose.stats.map((stat, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                      <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm mt-2">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Donation Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{socialData.bloodDonation.title}</h2>
            <p className="text-xl max-w-3xl mx-auto">{socialData.bloodDonation.description}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Camp Highlights</h3>
              <ul className="space-y-4">
                {socialData.bloodDonation.highlights.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-3">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Yearly Progress</h3>
              <div className="space-y-6">
                {socialData.bloodDonation.achievements.map((item, index) => (
                  <div key={index}>
                    <div className="font-bold text-lg">{item.year}</div>
                    <div className="flex justify-between mt-2">
                      <span>{item.units} units collected</span>
                      <span>{item.donors} donors</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-red-600 h-2.5 rounded-full"
                        style={{ width: `${(index + 1) * 30}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Testimonials</h3>
              <div className="space-y-6">
                {socialData.bloodDonation.testimonials.map((item, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                    <p className="italic">"{item.quote}"</p>
                    <p className="font-medium mt-2">— {item.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-8 text-center">Gallery</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {socialData.bloodDonation.gallery.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* helping needy on the ocassion of saraswatipuja */}
      <section className="py-24 bg-white">
  {/* Hero Header */}
  <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
    <h1 className="text-5xl font-bold text-gray-900 mb-6">
      {socialData.saraswatiPujaInitiatives.title}
    </h1>
    <p className="text-2xl text-purple-700 font-medium mb-8">
      {socialData.saraswatiPujaInitiatives.tagline}
    </p>
    <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
      {socialData.saraswatiPujaInitiatives.overview}
    </p>
  </div>

  {/* Initiatives Container */}
  <div className="max-w-7xl mx-auto px-6 space-y-28">
    {socialData.saraswatiPujaInitiatives.initiatives.map((initiative) => (
      <div key={initiative.id} className="bg-gray-50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Initiative Header */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-800 p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-3">{initiative.title}</h2>
            <h3 className="text-2xl font-semibold text-indigo-200 mb-6">{initiative.subtitle}</h3>
            <p className="text-xl leading-relaxed">{initiative.description}</p>
          </div>
        </div>

        {/* Content Grid - Modified layout */}
        <div className="grid lg:grid-cols-5 gap-0">
          {/* Left Column - Details (2 columns) */}
          <div className="lg:col-span-2 p-8">
            <div className="sticky top-8 space-y-10">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Program Details</h4>
                
                {initiative.details.preparation && (
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                      </svg>
                      Preparation
                    </h5>
                    <ul className="space-y-2">
                      {initiative.details.preparation.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-indigo-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {initiative.details.distribution && (
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Distribution
                    </h5>
                    <div className="space-y-3">
                      <h6 className="font-medium text-gray-900">Coverage:</h6>
                      <ul className="space-y-1 pl-5">
                        {initiative.details.distribution.locations.map((loc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-indigo-500 mr-2 mt-1">›</span>
                            <span className="text-gray-700">{loc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Compact Stats */}
                <div className="mb-8">
                  <h5 className="text-lg font-semibold mb-3">Key Metrics</h5>
                  <div className="grid grid-cols-3 gap-3">
                    {initiative.impactMetrics.map((metric, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg shadow-sm text-center">
                        <p className="text-2xl font-bold text-indigo-700">{metric.value}</p>
                        <p className="text-xs text-gray-600">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Future Plans */}
              <div>
                <h5 className="text-lg font-semibold mb-3">Future Roadmap</h5>
                <ul className="space-y-2">
                  {initiative.futurePlans.map((plan, i) => (
                    <li key={i} className="border-l-2 border-indigo-400 pl-3 py-1 text-gray-700">
                      {plan}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Gallery (3 columns) */}
          <div className="lg:col-span-3 p-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
              {initiative.gallery.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div>
                      <p className="text-white font-medium">{img.caption}</p>
                      <p className="text-white/80 text-sm">{initiative.title}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Additional images from other arrays */}
              {initiative.details.specialFeatures && (
                <div className="relative aspect-square overflow-hidden group bg-indigo-50 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-10 h-10 mx-auto text-indigo-600 mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <h4 className="font-bold text-gray-800">Special Features</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {initiative.details.specialFeatures.length} innovative aspects
                    </p>
                  </div>
                </div>
              )}

              {initiative.details.equipment && (
                <div className="relative aspect-square overflow-hidden group bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-10 h-10 mx-auto text-gray-600 mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                    <h4 className="font-bold text-gray-800">Technical Specs</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {initiative.details.equipment.length} equipment categories
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Student Welfare Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{socialData.studentWelfare.title}</h2>
            <p className="text-xl max-w-3xl mx-auto">Holistic support systems ensuring every student thrives academically, emotionally and socially</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {socialData.studentWelfare.sections.map((section, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md border-t-4 border-blue-500">
                <div className="text-5xl mb-6">{section.icon}</div>
                <h3 className="text-2xl font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-600 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-8 text-center">Welfare Program Impact</h3>
            <div className="grid grid-cols-3 gap-4">
              {socialData.studentWelfare.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sports Initiatives Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{socialData.sportsInitiatives.title}</h2>
            <p className="text-xl max-w-3xl mx-auto">Using sports as a tool for social inclusion, health promotion and talent development</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {socialData.sportsInitiatives.programs.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{program.name}</h3>
                <p className="mb-6">{program.description}</p>
                <h4 className="font-semibold mb-3">Achievements:</h4>
                <ul className="space-y-3">
                  {program.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-8 text-center">Sports Gallery</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {socialData.sportsInitiatives.gallery.map((image, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className=" bg-neutral-600 p-3 rounded-2xl  text-white font-medium">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl max-w-3xl mx-auto">Join us in our next initiatives to make a difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialData.upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden">
                <div className="bg-blue-600 text-white p-4 text-center">
                  <div className="text-2xl font-bold">{event.date.split(' ')[0]}</div>
                  <div className="text-lg">{event.date.split(' ').slice(1).join(' ')}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p>{event.description}</p>
                  <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a student, faculty member, or community partner, there's a place for you in our social initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
              Become a Volunteer
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition text-lg">
              Partner With Us
            </button>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-lg">
              Donate to Causes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
// Your page component
import BentoGrid from '@/components/BentoGrid';
import Footer from '@/components/Footer'
import StudentForm from '@/components/RegistrationForm';

const events = [
  // 20+ image objects
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/496844807_24184237454514598_1691096236981329380_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=azZoqShU12MQ7kNvwHgXwPj&_nc_oc=AdkScE9o2UtIUn-PeTB1rhCL2YsRBSOQuFeZ_0wMjXKRbazbnC0AlXhBCjqv8cx3Jp0&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=Hex35g08yO53FaH65aWCrw&oh=00_AfTROWb_LRoTql2UigYLZxiFvdqr4Qnw_ZG7NFHsLNcsOQ&oe=68717D4F',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/495366607_24184235541181456_4001701579454790737_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cruM3z6XJ-UQ7kNvwEudn_h&_nc_oc=AdlYSJtE6DzVwoIC39E42ms1K_eVWeS065DjJgv0GHEg07e0OB7D03kCTZdZ7K6CeeM&_nc_zt=23&_nc_ht=scontent-del1-2.xx&_nc_gid=mHDlXdGO-OWS1wn7w4GMDw&oh=00_AfS9fc20F0fYtcQxnHqTpevNsy5swOJZCFBe2vJAQTUA9Q&oe=68717609',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/488886299_1064930345662904_4568816821473952557_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XxgfGpSK4wcQ7kNvwHfgloR&_nc_oc=AdmdzhKwB21HDTx_9SNAQuMtyOA9jlhCNk6Gea8adyXqJUM-B2UdXAeSiVd_v6uVH4w&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=P7otuP4l52RZVSa_e9btxw&oh=00_AfTKWidT17P0yqk1qnFxqiLsJV7x67Qxpx_ZIpdIKo6KXA&oe=68717908',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/487548214_1064929942329611_6111595072781720104_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X0CKdQPjT1EQ7kNvwHUN6Pf&_nc_oc=Adk3I2ZtR7rX0qQzJ-w4SVl9h1VjYMNS6XaZcSJsmRSDw1vjV7f38TiSRmwbyfwZWx8&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=Olce35jfXBYIQXJj6YN5vw&oh=00_AfT7kk4MqWNnEj8342fZhfMkF2tTerrQK4p83bfdqEeuUQ&oe=68715C14',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/67983657_2658493784182276_6888045657702006784_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HFQMOaik5fkQ7kNvwEQPlSF&_nc_oc=AdndoU1Y_9KvLcErhFS1T0V1WMXH3CcP8Kvfkh3Hcd0g4RZiiLAS2t_L8WQB0V9B1mM&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=x6oFKcX0CdKpLEUUjhxLzQ&oh=00_AfRpIhhxYJ8VVnhlvXLixnqjD4GIg_Yl21I_u9I_4TK7Yg&oe=689300E8',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/485734238_1052423500246922_2889030121503606787_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=G_0GdeDpqAUQ7kNvwFEynq-&_nc_oc=Adlz5yg-fL4Y0FeVDAAd8FjO4TD_pPBt7lxTT9SX5M5iNbjbVsi06vN1_g89Ki4u0Ic&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=pcqmoIwYLxU1qFVz-7abOw&oh=00_AfQTRVmmn3SZKP_h16WDuWq0aOhgs0iOK_uFYBnDErafRQ&oe=687153E8',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/484497461_1052423423580263_794801896446851540_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AwvlDsrfxNMQ7kNvwFPXoR5&_nc_oc=AdmVysD1IWxq7vYtBbDPbumcEcVXyWr0McUBqCltidDiNLEM5ztPtMOSWMzO9tZwXD4&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=GAcPdPA6zpctfYkDMlFvIQ&oh=00_AfQHK-QzxSY-13G4iNwMy6T0lBKbnPO9SDFo25PTG727xQ&oe=68716990',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/495019092_24100199769585034_2116387603322275259_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FPwl5pv1GFwQ7kNvwFB7H0p&_nc_oc=AdkFZQyfW6F36IQPvP6C2UWyYKR0531nJGuSEfd_xBAdo1VtvsCNDVG4B7gT4scPdb8&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=h_4oD-D7GQBlJsBXoD42zA&oh=00_AfSVm_38HlZRWs_0Yqz4Ya0l7ktns7PdNg6mZ9JUZbsG_g&oe=68714F02',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/488180962_1064929998996272_167265621417818682_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jY9arDewmu8Q7kNvwGVS8B1&_nc_oc=Adl1MZHkc_1wCkPzjJlmouJDEc4hQuDVsqI_nCWGUBD3S2NbiRCyWtf8t12JnQgDIyY&_nc_zt=23&_nc_ht=scontent-del1-2.xx&_nc_gid=CbxbkDPrGJWbn3JVlC2abg&oh=00_AfS8sR9j9NUTZxVhsFixq8XkSn3F0dRTjJRPozHWe4f1SA&oe=68716F38',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/494811143_24184251007846576_4776582752710620433_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mGQBiBOkq0sQ7kNvwE5SClL&_nc_oc=Adn6dLLd8-p82dm9DXVQFXZZn8PUM3V7ABmotslT9sa2YGFM7dgfTl8aXgyLzGD49X4&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=x6oFKcX0CdKpLEUUjhxLzQ&oh=00_AfR5OMoFqDMldZth6CL8mAu_vLPUMLBDkxKJeQq6shJqww&oe=68717D79',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-2.xx.fbcdn.net/v/t39.30808-6/495413158_24098316586440019_7539199045285954506_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gjLemwDmgRgQ7kNvwG5v3Xr&_nc_oc=AdlYHIxVZ00FGC3QnQa7hNVbf1VqJqeIZOmE3TayODKVyC-RAoqj7rDgw8fqurBkFqk&_nc_zt=23&_nc_ht=scontent-del2-2.xx&_nc_gid=OlYOlncUe6TqcPC4kndc0A&oh=00_AfT3DSxiR0uvg6XzxaNTcMjXfUEd62sYBeuFKNL9wmsxqg&oe=6871720E',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del1-1.xx.fbcdn.net/v/t39.30808-6/485655690_1053918783430727_3189819062832752514_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XTZrd4S2PMsQ7kNvwHqaW4J&_nc_oc=AdmjJt95IBzUzj_chkRVFwTa6V2_yxwAFGpKa67zLmfnUPK4KtSVZcT5ZvNtBHU5NdM&_nc_zt=23&_nc_ht=scontent-del1-1.xx&_nc_gid=8z6BomvzFBMdiYxsfYCEfA&oh=00_AfTXKB7hB-Dbt7Ipbjn2YjlU6Y7R1yEWTzvibkMUyEwGfA&oe=687179F7',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-1.xx.fbcdn.net/v/t39.30808-6/491332251_23964222309849448_4422110462937725377_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QET0uuS-beEQ7kNvwGTjKp8&_nc_oc=AdnWwEsDJOu09GKantf-S9Naiy-BGlZ8W2b4stqbQg-3XoPhlZ0cFDccaIsJSWhvcE4&_nc_zt=23&_nc_ht=scontent-del2-1.xx&_nc_gid=mWGiLvDqXlUa_0P6_Mqu4A&oh=00_AfQVZ5m3le59IN6r4hjSRTFwhkM-f0wSx87otQaorTycOg&oe=687160B5',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },
  {
    url: 'https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/490778149_23964222153182797_5441650466363907850_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=60OYf9DFA8kQ7kNvwHoSyKX&_nc_oc=AdmkVjdqWgQ7kCJsVNFFXvFpTQnkVL5V9VT8R55yHe19MFP0ZZqYZgLtHSkf61LnyYg&_nc_zt=23&_nc_ht=scontent-del2-3.xx&_nc_gid=mWGiLvDqXlUa_0P6_Mqu4A&oh=00_AfQ4y-GtMNiEt1ZcJtAV21zRsGoWbHPmhEOll5auHsN9rQ&oe=68714EB5',
    alt: 'Holi Festival',
    tag: 'Holi Celebration',
    link: '/events/holi'
  },

  // ... more images
];

export default function EventsPage() {
  return (
    <div className="py-12 bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* --------------------hero Image section---------------------------- */}
      <section>

      </section>

      {/* --------------------glallery section -------------------- */}
      <section>
        <div className="w-full">
        <h1 className="text-4xl font-bold text-center mb-12">Cimage at a Glance</h1>
        <BentoGrid images={events} />
      </div>
      </section>
      <StudentForm/>
      
    </div>
  );
}
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,          // ← keep or remove as you like
//   experimental: {},               // ← any other flags

//   images: {
//     /** 
//      * 1. Use `domains` for the *exact* hosts you know you’ll hit.
//      * 2. Don’t put comments or duplicates inside the array – they break JSON parsing.
//      */
//     domains: [
//       "raw.githubusercontent.com",
//       "avatars.githubusercontent.com",
//       "scontent-del2-3.xx.fbcdn.net",
//       "scontent-del1-2.xx.fbcdn.net",
//       "scontent.xx.fbcdn.net",
//       "platform-lookaside.fbsbx.com",
//       'images.unsplash.com',
//       'scontent-del2-3.xx.fbcdn.net',
//       'scontent.fpat1-1.fna.fbcdn.net',
//       'scontent.xx.fbcdn.net',
//       'www.facebook.com',
//       "catalystcollege.in",
//       "plus.unsplash.com",
//       "lh3.googleusercontent.com",
//       "cdn.prod.website-files.com",
//       "media.npr.org",
//       "via.placeholder.com",
//       "admissions.cimagepatna.com",
//       "encrypted-tbn0.gstatic.com",
//       "static.theprint.in",
//       "c8.alamy.com",
//       "i.ytimg.com",
//       "media.cricheroes.in",
//       "images.remotePatterns",
//       "careermahakumbh.com",
//       "drive.google.com",
      
//     ],

//     /**
//      * (Optional) Catch future Facebook variants with `remotePatterns`.
//      * Each entry supports simple wildcards (`*`).
//      * If you add this block you can often shrink the `domains` list.
//      */
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "*.fbcdn.net",
//         pathname: "/**"
//       },
//       {
//         protocol: "https",
//         hostname: "platform-lookaside.fbsbx.com",
//         pathname: "/**"
//       }
//     ]
//   }
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {},

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "scontent-del2-3.xx.fbcdn.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "scontent-del1-2.xx.fbcdn.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "scontent.xx.fbcdn.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "scontent.fpat1-1.fna.fbcdn.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "catalystcollege.in",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "media.npr.org",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "admissions.cimagepatna.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "static.theprint.in",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "c8.alamy.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "media.cricheroes.in",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "careermahakumbh.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**"
      },
      // catch all fbcdn fallback
      {
        protocol: "https",
        hostname: "*.fbcdn.net",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;

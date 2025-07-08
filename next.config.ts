import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,          // ← keep or remove as you like
  experimental: {},               // ← any other flags

  images: {
    /** 
     * 1. Use `domains` for the *exact* hosts you know you’ll hit.
     * 2. Don’t put comments or duplicates inside the array – they break JSON parsing.
     */
    domains: [
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
      "scontent-del2-3.xx.fbcdn.net",
      "scontent-del1-2.xx.fbcdn.net",
      "scontent.xx.fbcdn.net",
      "platform-lookaside.fbsbx.com",
      'images.unsplash.com',
      'scontent-del2-3.xx.fbcdn.net',
      'scontent.fpat1-1.fna.fbcdn.net',
      'scontent.xx.fbcdn.net',
       'www.facebook.com',
       "catalystcollege.in",
       "plus.unsplash.com",
       "lh3.googleusercontent.com",
       "cdn.prod.website-files.com",
       "media.npr.org" 
    ],

    /**
     * (Optional) Catch future Facebook variants with `remotePatterns`.
     * Each entry supports simple wildcards (`*`).
     * If you add this block you can often shrink the `domains` list.
     */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.fbcdn.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;

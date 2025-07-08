// app/components/Footer.tsx            (or /src/components/Footer.tsx)
import Image from 'next/image';
import Link from 'next/link';

type SimpleLink = { label: string; href: string };

interface NavSection {
  title: string;
  links: SimpleLink[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Client Portal', href: '#' },
      { label: 'Resources', href: '#' },
    ],
  },
  {
    title: 'Platforms',
    links: [
      { label: 'Hubspot', href: '#' },
      { label: 'Integration Services', href: '#' },
      { label: 'Marketing Glossary', href: '#' },
      { label: 'UIPath', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Portfolio', href: '#' },
      { label: 'Events', href: '#' },
    ],
  },
  {
    title: 'Additional',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Sitemap', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'News', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="tracking-wide bg-slate-100 px-8 sm:px-12 pt-12 pb-6">
      {/* Top grid */}
      <div className="grid min-[1200px]:grid-cols-3 gap-12 xl:gap-16">
        {/* Brand & summary */}
        <div className="min-[1200px]:max-w-sm max-w-lg w-full">
          <Link href="#">
            <Image
              src="https://readymadeui.com/readymadeui.svg"
              alt="ReadymadeUI logo"
              width={144}
              height={40}
              priority
              className="w-36 h-auto"
            />
          </Link>

          <p className="mt-6 text-slate-600 leading-relaxed text-sm">
            ReadymadeUI is a library of pre-designed UI components built for
            Tailwind CSS. It offers a collection of versatile and ready-to-use
            components.
          </p>

          {/* Socials */}
          <ul className="mt-6 flex space-x-5">
            {['facebook', 'linkedin', 'instagram', 'code'].map((name) => (
              <li key={name}>
                <Link href="#">
                  <span className="sr-only">{name}</span>
                  {/* Keep your inline SVGs—omitted here for brevity */}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation columns */}
        <div className="min-[1200px]:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {NAV_SECTIONS.map((section) => (
            <nav key={section.title} className="max-lg:min-w-[140px]">
              <h4 className="text-slate-900 font-semibold text-base">
                {section.title}
              </h4>
              <ul className="mt-6 space-y-4">
                {section.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="hover:text-slate-900 text-slate-600 text-sm font-normal"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-10 mb-6 border-gray-300" />

      {/* Bottom bar */}
      <div className="flex flex-wrap max-md:flex-col gap-4">
        <ul className="md:flex md:space-x-6 max-md:space-y-2">
          {['Terms of Service', 'Privacy Policy', 'Security'].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="hover:text-slate-900 text-slate-600 text-sm font-normal"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-slate-600 text-sm md:ml-auto">
          © ReadymadeUI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

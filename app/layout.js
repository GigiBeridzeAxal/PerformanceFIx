import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "./globals.css";

import("intl-tel-input/styles");
import("react-toastify/dist/ReactToastify.css");

const Provider = dynamic(() => import("./service/Provider"));

const montserratSans = localFont({
  src: "./fonts/Montserrat.ttf",
  variable: "--font-montserrat-sans",
  weight: "100 900",
});
const montserratMono = localFont({
  src: "./fonts/Montserrat.ttf",
  variable: "--font-montserrat-mono",
  weight: "100 900",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_POST_URL}/api/details/meta/${process.env.NEXT_PUBLIC_SITE_ID}`,
      { cache: "force-cache" }
    );

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();

    const faviconAddress = data?.site_fav
      ? `${process.env.NEXT_PUBLIC_CMS_URL}api/uploads/${data.site_fav}`
      : "/favicon.ico";

    return {
      title: data?.site_title || "Pura+ | Ortopedia Fisioterapia Salud Belleza",
      description:
        data?.site_desc ||
        "ortopedia cuidado pie rehabilitacion fitness medias varices salud belleza",
      icons: {
        icon: faviconAddress,
      },
    };
  } catch (error) {
    // Log more detailed errors
    console.error("Error fetching metadata:", error);

    return {
      title: "Pura+ | Ortopedia Fisioterapia Salud Belleza",
      description: "Error fetching metadata.",
      icons: {
        icon: "/favicon.ico",
      },
    };
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.webp"
        />

        <link
          rel="preconnect"
          href="https://avexim.com"
        />
        <link
          rel="preconnect"
          href="https://admin.avexim.com"
        />
        <link
          rel="preconnect"
          href="https://api.avexim.com"
        />

        {/* Optionally, add dns-prefetch */}
        <link
          rel="dns-prefetch"
          href="https://avexim.com"
        />
        <link
          rel="dns-prefetch"
          href="https://admin.avexim.com"
        />
        <link
          rel="dns-prefetch"
          href="https://api.avexim.com"
        />
      </head>
      <body
        className={`${montserratSans.variable} ${montserratMono.variable} antialiased overflow-x-hidden`}
      >
        <h1 className="absolute top-0 opacity-0">
          Pura+ | Ortopedia Fisioterapia Salud Belleza
        </h1>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

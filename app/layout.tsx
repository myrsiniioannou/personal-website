import Image from "next/image";
import "flowbite";
import { Outfit } from "next/font/google";
import Link from "next/link";

const font = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata = {
  title: "Myrsini Ioannou",
  description: "Portfolio website of Myrsini Ioannou",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className="overflow-hidden">
        <div className="h-screen w-screen box-border overflow-y-auto flex flex-col lg:flex-row lg:justify-center px-8 py-6 gap-x-24 selection:bg-neon selection:text-white">
          <div className="left lg:flex-1 box-border h-max-full">
            <div className="grid lg:grid-cols-2 h-full">
              <h1 className="font-bold text-3xl lg:text-5xl col-span-2">
                <Link href="/" className="flex justify-between w-full">
                  <span className="">MYRSINI</span> <span className="">IOANNOU</span>
                </Link>
              </h1>
              <p className="col-span-2 py-12">
                I work on AI, data, computational media and electronic music,
                focusing on real-tome procedures, NLP and generative art.
              </p>
              <div className="grid justify-items-start content-between -ml-2.5 lg:-ml-3">
                <div className="rotate-180 content-end">
                  <h2 className="flex font-bold text-xl lg:text-2xl [writing-mode:vertical-rl] pt-6">
                    hello@myrsiniioannou.com
                  </h2>
                </div>
                <div className="rotate-180">
                  <span className="flex font-bold text-xl lg:text-2xl rotate-90">
                    ©
                  </span>
                  <span className="flex font-bold text-xl lg:text-2xl [writing-mode:vertical-rl]">
                    2023
                  </span>
                </div>
              </div>
              <Image
                className="lg:place-self-end justify-self-end lg:h-full lg:w-full lg:min-w-[350px] w-[70vw] object-contain object-right-bottom"
                src="/portfolio/Cassandra/Cassandra 00.png"
                width={600}
                height={800}
                alt="Cassandra Cover Image"
              />
            </div>
          </div>

          <div className="right lg:flex-1 self-start box-border lg:h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

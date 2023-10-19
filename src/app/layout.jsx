import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "@/components/SigninButton/Providers";
import { AudioProvider } from "@/context/AudioProvider/AudioProvider";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Providers>
          <AudioProvider>
          <div className="main_container">
            <Navbar />
            {children}
          </div>
          </AudioProvider>
        </Providers>
      </body>
    </html>
  );
}

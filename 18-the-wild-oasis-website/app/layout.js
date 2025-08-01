import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} antialiased bg-primary-950 text-primary-300 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <div className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </div>
        </div>
      </body>
    </html>
  );
}

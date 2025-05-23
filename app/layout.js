import './globals.css';
import { inter, russo } from './fonts';
import NavbarWrapper from './components/NavbarWrapper';
import FooterWrapper from './components/FooterWrapper';

export const metadata = {
  title: 'TripSage - Your Personal Travel Assistant',
  description: 'Plan your perfect trip with TripSage. Get personalized travel recommendations, itineraries, and insights from our AI-powered travel assistant.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <NavbarWrapper />
        <main>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}

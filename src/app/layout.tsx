import '@/styles/globals.css';
import { ResponsiveProvider } from '@/context/ResponsiveProvider';
import vazirFont from '@/constant/localFonts';
import Navbar from './_/components/Navbar';
import Sidebar from './_/components/Sidebar';
import Footer from './_/components/Footer';

export const metadata = {
  title: 'پیشتاز تامین پاکزاد مهر',
  description: 'تامین تجهیز قطعات برقی، مکانیکی و هیدرولیکی',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body dir="rtl" suppressHydrationWarning={true} className={`${vazirFont.variable} font-sans`}>
        <ResponsiveProvider>
          <main className="flex h-screen flex-col">
            <Sidebar />
            <Navbar />
            <section className="flex-1">{children}</section>
            <Footer />
          </main>
        </ResponsiveProvider>
      </body>
    </html>
  );
}

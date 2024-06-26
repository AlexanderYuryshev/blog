import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Navbar } from '@/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Hello, Pinky',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <div style={{ minHeight: '100vh' }}>{children}</div>
                <Footer />
            </body>
        </html>
    );
}

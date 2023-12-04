import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Anson Ng | Game Developer',
    description: 'Portfolio of Anson Ng',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}

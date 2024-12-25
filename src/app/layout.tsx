import './globals.css';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="antialiased">
        <body className='my-2 max-w-md mx-auto'>{children}</body>
        </html>
    );
}
import "./globals.css";

// Root layout - delegates to [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

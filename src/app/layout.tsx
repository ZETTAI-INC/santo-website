import "./globals.css";

// Root layout - the [locale]/layout.tsx renders the <html> element
// so we just pass through children here.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

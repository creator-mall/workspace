import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Creator Mall",
};

interface Prop {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Prop) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}

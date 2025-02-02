// https://tailwindcss.com/docs/preflight
// this normalize.css is taken from https://unpkg.com/tailwindcss@3.4.15/src/css/preflight.css
import '~/styles/normalize.css';
// or use this one
// import 'modern-normalize/modern-normalize.css';

import '@hennge/ui-react/dist/style.css';
import "@fontsource-variable/noto-sans-jp";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{
        fontFamily: '"Noto Sans JP Variable"'
      }}>{children}</body>
    </html>
  );
}

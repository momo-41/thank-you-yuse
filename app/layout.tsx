import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yusei's Graduate web",
  description:
    "ゆせさんご卒業おめでとうございます！寂しくなったらこれ見て元気出してくださいね。私たちはいつでも陰ながら応援しています！",
  icons: {
    icon: "/favicon-yuse.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

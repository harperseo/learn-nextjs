import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../public/styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "loading",
  },
  description: "The best movies on the best",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

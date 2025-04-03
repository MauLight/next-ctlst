import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Ctlst Screenwriter",
    description: "The only companion a screenwriter needs.",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

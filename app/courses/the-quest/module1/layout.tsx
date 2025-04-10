import SideMenu from "@/app/components/common/side-menu";
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
        <main>
            <section className="relative pt-[60px]">
                {children}
                <SideMenu />
            </section>
        </main>
    );
}

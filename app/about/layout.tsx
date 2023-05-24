import Link from "next/link";

export default function AutoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>
        <h1>About us</h1>
        {children}
        <ul className="about-links">
            <li> <Link href="/about/contacts">Contacts</Link> </li>
            <li> <Link href="/about/team">Team</Link> </li>
        </ul>
    </div>
}
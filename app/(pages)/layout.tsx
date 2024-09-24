import MiddleContent from "../components/MiddleContent"

export default function MainPagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <MiddleContent>
            {children}
        </MiddleContent>
    )
}
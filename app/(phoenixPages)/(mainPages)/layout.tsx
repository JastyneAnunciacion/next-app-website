import MiddleContent from "@/app/components/MiddleContent"

export default function MainPagesLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
        <MiddleContent>
            {children}
        </MiddleContent>
    )
}
import PageIllustration from '@/components/PageIllustration'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="grow">
            <PageIllustration />
            {children}
        </main>
    )
}

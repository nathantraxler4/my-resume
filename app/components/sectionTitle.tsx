import { pageMargin } from '@/app/style'

export default function SectionTitle({ title }: { title: string }) {
    return (
        <div className={`border-b-4 ${pageMargin}`}>
            <p className="font-bold text-left text-2xl">
                {title}
            </p>
        </div>
    )
}

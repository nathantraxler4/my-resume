import { pageMargin } from '@/app/style'

export default function SectionHeader({ left, right }: { left: string, right: string }) {
    return (
        <div className={`flex flex-row justify-between ${pageMargin}`}>
            <div className="flex flex-col">
                <p className="font-bold text-left text-xl">
                    {left}
                </p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-right text-xl">
                    {right}
                </p>
            </div>
        </div>
    )
}

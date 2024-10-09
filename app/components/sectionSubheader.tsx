import { pageMargin } from '@/app/style'

export default function SectionSubheader({ left, right }: { left: string, right: string }) {
    return (
        <div className={`flex flex-row justify-between ${pageMargin}`}>
            <div className="flex flex-col">
                <p className="font-bold text-left text-l">
                    {left}
                </p>
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-right text-l">
                    {right}
                </p>
            </div>
        </div>
    )
}
import { pageMargin } from '@/app/style'

export default function Bullets({ bullets }: { bullets: string[] } ) {
    return (
        <div className={`${pageMargin}`}>
            <ul className={"mx-8"}>
                {bullets.map((bullet) => (
                    <li key={bullet} className="text-l list-disc">{bullet}</li>
                ))}
            </ul>
        </div>
    )
}


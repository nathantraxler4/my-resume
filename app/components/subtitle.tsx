export default function Subtitle({ subtitle }: { subtitle: string }) {
    return (
        <div className="">
            <p className="font-bold text-center text-xl">
                {subtitle}
            </p>
        </div>
    )
}
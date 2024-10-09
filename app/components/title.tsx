export default function Title({ title }: { title: string }) {
    return (
        <div className="">
            <p className="font-bold text-center text-4xl">
                {title}
            </p>
        </div>
    )
}
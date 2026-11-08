export default function NewsSkeleton() {
    return (
        <div className="space-y-6">
            {[1, 2, 3].map((item) => (
                <div
                    key={item}
                    className="animate-pulse rounded-3xl bg-white p-8 shadow-lg"
                >
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="h-8 w-2/3 rounded-xl bg-slate-200" />
                        <div className="h-6 w-24 rounded-full bg-slate-200" />
                    </div>
                    <div className="space-y-3">
                        <div className="h-4 w-full rounded bg-slate-200" />
                        <div className="h-4 w-5/6 rounded bg-slate-200" />
                        <div className="h-4 w-4/6 rounded bg-slate-200" />
                    </div>
                </div>
            ))}
        </div>
    );
}

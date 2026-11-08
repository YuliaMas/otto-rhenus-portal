import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({
                                       currentPage,
                                       totalPages,
                                       onPageChange,
                                   }: Props) {
    if (totalPages <= 1) return null;

    function getPages(): (number | "...")[] {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        if (currentPage <= 3) {
            return [1, 2, 3, 4, "...", totalPages];
        }

        if (currentPage >= totalPages - 2) {
            return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        }

        return [
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages,
        ];
    }

    return (
        <nav
            aria-label="Pagination"
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
            <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
                <ChevronLeft size={20} />
            </button>

            {getPages().map((page, index) =>
                page === "..." ? (
                    <span
                        key={`dots-${index}`}
                        className="px-2 text-slate-400 select-none"
                    >
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        className={`h-10 min-w-[2.5rem] rounded-xl px-3 font-semibold transition ${
                            currentPage === page
                                ? "bg-[#002b87] text-white shadow-md"
                                : "bg-white text-slate-700 shadow-sm hover:bg-slate-200"
                        }`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
                <ChevronRight size={20} />
            </button>
        </nav>
    );
}

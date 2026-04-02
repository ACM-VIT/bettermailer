export const EMAIL_ACTION_ICON_PATHS = [
    "M8 2l1.5 4.5H14l-3.75 2.7 1.5 4.5L8 11.2l-3.75 2.5 1.5-4.5L2 6.5h4.5z",
    "M5 5l6 6M11 5l-6 6",
    "M3 4h10M4 4v9h8V4",
    "M8 4v4l2 2",
];

export interface EmailRowProps {
    sender: string;
    subject: string;
    snippet: string;
    time: string;
    active?: boolean;
}

export default function EmailRow({ sender, subject, snippet, time, active = false }: EmailRowProps) {
    return (
        <div
            className={`group flex items-center gap-3 px-5 py-3 border-b border-gray-100 cursor-pointer ${active ? "bg-blue-50" : "hover:bg-gray-50"}`}
        >
            {/* Checkbox */}
            <input
                type="checkbox"
                className="size-4 rounded border-gray-300 accent-gray-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => e.stopPropagation()}
            />

            {/* Sender */}
            <span className="w-36 shrink-0 text-sm font-medium text-gray-800 truncate">{sender}</span>

            {/* Subject + snippet */}
            <div className="flex-1 min-w-0 flex items-baseline gap-1.5 overflow-hidden">
                <span className="text-sm font-medium text-gray-800 truncate shrink-0 max-w-[45%]">{subject}</span>
                <span className="text-sm text-gray-400 truncate">{snippet}</span>
            </div>

            {/* Time / action icons */}
            <div className="shrink-0 flex items-center gap-1.5">
                <div className="hidden group-hover:flex items-center gap-1">
                    {EMAIL_ACTION_ICON_PATHS.map((d, i) => (
                        <button
                            key={i}
                            className="size-6 flex items-center justify-center rounded text-gray-400 hover:bg-gray-200 hover:text-gray-700"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d={d} />
                            </svg>
                        </button>
                    ))}
                </div>
                <span className="text-xs text-gray-400 group-hover:hidden">{time}</span>
            </div>
        </div>
    );
}

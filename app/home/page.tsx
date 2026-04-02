"use client";

export default function Home() {
    return (
        <div className="flex h-screen w-screen overflow-hidden bg-white text-gray-900 font-sans">
            {/* ── LEFT SIDEBAR ─────────────────────────────────────────── */}
            <aside className="flex flex-col w-64 shrink-0 border-r border-gray-200 bg-gray-50 overflow-hidden">

                {/* Profile */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200">
                    <div className="size-9 rounded-full bg-gray-300 shrink-0" />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">Sushant N.</p>
                        <p className="text-xs text-gray-500 truncate">sushant@example.com</p>
                    </div>
                    <button className="size-7 flex items-center justify-center rounded text-gray-400 hover:bg-gray-200 shrink-0">
                        <svg className="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 8h10M8 3v10" />
                        </svg>
                    </button>
                </div>

                {/* Search */}
                <div className="px-3 py-2 border-b border-gray-200">
                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3 py-1.5">
                        <svg className="size-3.5 text-gray-400 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="6.5" cy="6.5" r="4.5" />
                            <path d="M10 10l3 3" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 text-xs bg-transparent outline-none placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* Nav sections — scrollable */}
                <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-4">

                    {/* Views */}
                    <section>
                        <p className="px-2 mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Views</p>
                        <ul className="space-y-0.5">
                            {[
                                { label: "Inbox", badge: "99+", active: true },
                                { label: "GitHub", badge: "21", active: false },
                                { label: "Calendar", badge: null, active: false },
                                { label: "Labels", badge: "4", active: false },
                                { label: "Promotions", badge: "12", active: false },
                                { label: "Social", badge: "3", active: false },
                            ].map(({ label, badge, active }) => (
                                <li key={label}>
                                    <button
                                        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${active
                                            ? "bg-gray-200 font-medium text-gray-900"
                                            : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        <span className="size-4 rounded bg-gray-300 shrink-0" />
                                        <span className="flex-1 text-left truncate">{label}</span>
                                        {badge && (
                                            <span className="text-[10px] font-medium text-gray-500 bg-gray-200 rounded-full px-1.5 py-0.5 leading-none shrink-0">
                                                {badge}
                                            </span>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Mail */}
                    <section>
                        <p className="px-2 mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Mail</p>
                        <ul className="space-y-0.5">
                            {["All Mail", "Sent", "Drafts", "Spam", "Trash"].map((label) => (
                                <li key={label}>
                                    <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                                        <span className="size-4 rounded bg-gray-300 shrink-0" />
                                        <span className="flex-1 text-left truncate">{label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>
                </nav>
            </aside>

            {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
            <main className="flex flex-col flex-1 min-w-0 relative">

                {/* Header */}
                <header className="flex items-center justify-between px-5 py-3 border-b border-gray-200 shrink-0">
                    <div className="flex items-center gap-2">
                        <span className="size-5 rounded bg-gray-300" />
                        <h1 className="text-base font-semibold">Inbox</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="flex items-center gap-1.5 text-xs border border-gray-200 rounded-md px-2.5 py-1.5 hover:bg-gray-50">
                            <span className="size-3 rounded-full border border-gray-400" />
                            Auto label
                        </button>
                        {(["M4 6h8M4 10h8", "M4 4h8v8H4z", "M8 4a4 4 0 100 8 4 4 0 000-8z"] as const).map((d, i) => (
                            <button
                                key={i}
                                className="size-7 flex items-center justify-center rounded text-gray-500 hover:bg-gray-100"
                            >
                                <svg className="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d={d} />
                                </svg>
                            </button>
                        ))}
                    </div>
                </header>

                {/* Filter chips */}
                <div className="flex items-center flex-wrap gap-2 px-5 py-2.5 border-b border-gray-200 shrink-0">
                    {["Categories", "Labels", "Is unread", "Show archived", "Hide calendar events"].map((chip) => (
                        <span
                            key={chip}
                            className="flex items-center gap-1 text-xs border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100 cursor-pointer select-none"
                        >
                            {chip}
                            <svg className="size-3 text-gray-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4l8 8M12 4l-8 8" />
                            </svg>
                        </span>
                    ))}
                    <button className="text-xs text-blue-600 hover:underline px-1">+ Filter</button>
                </div>

                {/* Email list — independently scrollable */}
                <div className="flex-1 overflow-y-auto">

                    <GroupHeader label="Today" />

                    <EmailRow sender="GitHub" subject="Your pull request was merged" snippet="bettermailer-fork · opened 2 hours ago by sushant" time="10:24 AM" />
                    <EmailRow sender="Vercel" subject="Deployment succeeded" snippet="Your latest push to main is now live on Vercel." time="9:47 AM" active />
                    <EmailRow sender="Notion" subject="Weekly digest" snippet="Here's what happened in your workspace this week." time="8:02 AM" />

                    <GroupHeader label="Yesterday" />

                    <EmailRow sender="UPES University" subject="Important: fee deadline reminder" snippet="Dear student, please note that the last date for fee payment is…" time="Yesterday" />
                    <EmailRow sender="Google" subject="New sign-in on Chrome" snippet="We noticed a new sign-in to your Google Account." time="Yesterday" />
                    <EmailRow sender="Stripe" subject="Your invoice is ready" snippet="Invoice #0042 for $29.00 is now available in your dashboard." time="Yesterday" />
                </div>
            </main>
        </div>
    );
}

/* ── SUB-COMPONENTS ──────────────────────────────────────────────── */

function GroupHeader({ label }: { label: string }) {
    return (
        <div className="px-5 py-1.5 text-[11px] font-semibold text-gray-400 bg-gray-50 border-b border-gray-100">
            {label}
        </div>
    );
}

interface EmailRowProps {
    sender: string;
    subject: string;
    snippet: string;
    time: string;
    active?: boolean;
}

function EmailRow({ sender, subject, snippet, time, active = false }: EmailRowProps) {
    return (
        <div
            className={`group flex items-center gap-3 px-5 py-3 border-b border-gray-100 cursor-pointer ${active ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
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
                    {(["M8 2l1.5 4.5H14l-3.75 2.7 1.5 4.5L8 11.2l-3.75 2.5 1.5-4.5L2 6.5h4.5z", "M5 5l6 6M11 5l-6 6", "M3 4h10M4 4v9h8V4", "M8 4v4l2 2"] as const).map((d, i) => (
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

"use client";

import Link from "next/link";

import ComposeDock from "../../components/ComposeDock";

const MAIL_FOLDERS = [
  { label: "Inbox", href: "/home" },
  { label: "All Mail", href: "/all-mail" },
  { label: "Sent", href: "/sent" },
  { label: "Drafts", href: "/drafts", active: true },
  { label: "Spam", href: "/spam" },
  { label: "Trash", href: "/trash" },
];

const FILTER_CHIPS = [
  "Waiting for review",
  "Needs edits",
  "Personal",
  "Recruiters",
];

const DRAFT_GROUPS = [
  {
    label: "Today",
    drafts: [
      {
        recipient: "Aman Sharma",
        subject: "Follow-up on product demo",
        preview:
          "I wanted to share the revised talking points before tomorrow's discussion.",
        updatedAt: "11:18 AM",
        note: "Last edited 8 minutes ago",
      },
      {
        recipient: "Hiring Team",
        subject: "Thank you after the interview",
        preview:
          "Thank you for the thoughtful conversation today. I enjoyed learning more about the role and team.",
        updatedAt: "9:42 AM",
        note: "Ready to send after one final review",
      },
    ],
  },
  {
    label: "This Week",
    drafts: [
      {
        recipient: "Design Review Group",
        subject: "Meeting notes and next steps",
        preview:
          "Sharing the summary of our discussion along with the proposed timeline for the next milestone.",
        updatedAt: "Thursday",
        note: "Needs one attachment",
      },
      {
        recipient: "HR Department",
        subject: "Leave request clarification",
        preview:
          "I am writing to clarify the dates mentioned in my earlier leave application.",
        updatedAt: "Tuesday",
        note: "Waiting for your final wording",
      },
    ],
  },
];

function DraftRow({
  recipient,
  subject,
  preview,
  updatedAt,
  note,
}: {
  recipient: string;
  subject: string;
  preview: string;
  updatedAt: string;
  note: string;
}) {
  return (
    <div className="group flex items-start gap-4 border-b border-gray-100 px-5 py-4 transition hover:bg-gray-50">
      <div className="mt-1 size-4 shrink-0 rounded border border-gray-300" />

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="truncate text-sm font-semibold text-gray-800">
            {recipient}
          </p>
          <span className="shrink-0 rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-600">
            Draft
          </span>
        </div>

        <div className="mt-1 flex items-baseline gap-2">
          <p className="truncate text-sm font-medium text-gray-700">{subject}</p>
          <p className="truncate text-sm text-gray-400">{preview}</p>
        </div>

        <p className="mt-2 text-xs text-gray-400">{note}</p>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-xs font-medium text-gray-500">{updatedAt}</p>
        <button className="mt-3 rounded-full border border-gray-200 px-3 py-1 text-[11px] font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-700">
          Open draft
        </button>
      </div>
    </div>
  );
}

export default function DraftsPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white font-sans text-gray-900">
      <aside className="flex w-64 shrink-0 flex-col overflow-hidden border-r border-gray-200 bg-gray-50">
        <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-4">
          <div className="size-9 shrink-0 rounded-full bg-gray-300" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">Sushant N.</p>
            <p className="truncate text-xs text-gray-500">sushant@example.com</p>
          </div>
        </div>

        <div className="border-b border-gray-200 px-3 py-2">
          <ComposeDock />
        </div>

        <div className="border-b border-gray-200 px-3 py-2">
          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5">
            <svg
              className="size-3.5 shrink-0 text-gray-400"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="6.5" cy="6.5" r="4.5" />
              <path d="M10 10l3 3" />
            </svg>
            <input
              type="text"
              placeholder="Search drafts"
              className="flex-1 bg-transparent text-xs outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-4">
          <section>
            <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Mail
            </p>
            <ul className="space-y-0.5">
              {MAIL_FOLDERS.map(({ label, href, active }) => {
                const className = `flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm ${
                  active
                    ? "bg-gray-200 font-medium text-gray-900"
                    : "text-gray-600 hover:bg-gray-100"
                }`;

                return (
                  <li key={label}>
                    <Link href={href} className={className}>
                      <span className="size-4 shrink-0 rounded bg-gray-300" />
                      <span className="flex-1 truncate text-left">{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </nav>

        <div className="flex justify-end border-t border-gray-200 px-3 py-2">
          <button className="flex size-7 items-center justify-center rounded text-gray-400 hover:bg-gray-200">
            <svg
              className="size-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="12" height="12" rx="2" />
              <path d="M6 6.5a2 2 0 1 1 2 2v1" strokeLinecap="round" />
              <circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </button>
        </div>
      </aside>

      <main className="relative flex min-w-0 flex-1 flex-col bg-white">
        <header className="flex shrink-0 items-center gap-3 border-b border-gray-200 px-5 py-3">
          <div className="flex shrink-0 items-center gap-2">
            <span className="size-5 rounded bg-gray-300" />
            <div>
              <h1 className="text-base font-semibold">Drafts</h1>
              <p className="text-xs text-gray-400">
                A calm workspace for unfinished emails and next-send notes.
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-center rounded-md border border-gray-200 bg-gray-100 px-3 py-1.5">
            <svg
              className="size-3.5 shrink-0 text-gray-400"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="6.5" cy="6.5" r="4.5" />
              <path d="M10 10l3 3" />
            </svg>
            <input
              type="text"
              placeholder="Search draft emails..."
              className="flex-1 bg-transparent text-xs outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
              {DRAFT_GROUPS.reduce((count, group) => count + group.drafts.length, 0)} drafts
            </span>
            <Link
              href="/home"
              className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Back to Inbox
            </Link>
          </div>
        </header>

        <div className="flex shrink-0 items-center gap-2 border-b border-gray-200 px-5 py-2.5">
          {FILTER_CHIPS.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto">
          {DRAFT_GROUPS.map((group) => (
            <section key={group.label}>
              <div className="border-b border-gray-100 bg-gray-50 px-5 py-1.5 text-[11px] font-semibold text-gray-400">
                {group.label}
              </div>
              {group.drafts.map((draft) => (
                <DraftRow key={`${group.label}-${draft.subject}`} {...draft} />
              ))}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

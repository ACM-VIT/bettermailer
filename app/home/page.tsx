"use client";

import Link from "next/link";

import ComposeDock from "../../components/ComposeDock";
import GroupHeader from "../../components/GroupHeader";
import EmailRow from "../../components/EmailRow";

const VIEWS = [
  { label: "Inbox", badge: "99+", active: true },
  { label: "GitHub", badge: "21", active: false },
  { label: "Calendar", badge: null, active: false },
  { label: "Labels", badge: "4", active: false },
  { label: "Promotions", badge: "12", active: false },
  { label: "Social", badge: "3", active: false },
];

const MAIL_FOLDERS = [
  { label: "All Mail" },
  { label: "Sent" },
  { label: "Drafts", href: "/drafts" },
  { label: "Spam" },
  { label: "Trash" },
];

const FILTER_CHIPS = [
  "Categories",
  "Labels",
  "Is unread",
  "Show archived",
  "Hide calendar events",
];

interface Email {
  sender: string;
  subject: string;
  snippet: string;
  time: string;
  active?: boolean;
}

const EMAIL_GROUPS: { label: string; emails: Email[] }[] = [
  {
    label: "Today",
    emails: [
      {
        sender: "GitHub",
        subject: "Your pull request was merged",
        snippet: "bettermailer-fork · opened 2 hours ago by sushant",
        time: "10:24 AM",
      },
      {
        sender: "Vercel",
        subject: "Deployment succeeded",
        snippet: "Your latest push to main is now live on Vercel.",
        time: "9:47 AM",
        active: true,
      },
      {
        sender: "Notion",
        subject: "Weekly digest",
        snippet: "Here's what happened in your workspace this week.",
        time: "8:02 AM",
      },
    ],
  },
  {
    label: "Yesterday",
    emails: [
      {
        sender: "UPES University",
        subject: "Important: fee deadline reminder",
        snippet: "Dear student, please note that the last date for fee payment is…",
        time: "Yesterday",
      },
      {
        sender: "Google",
        subject: "New sign-in on Chrome",
        snippet: "We noticed a new sign-in to your Google Account.",
        time: "Yesterday",
      },
      {
        sender: "Stripe",
        subject: "Your invoice is ready",
        snippet: "Invoice #0042 for $29.00 is now available in your dashboard.",
        time: "Yesterday",
      },
    ],
  },
];

export default function Home() {
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
              placeholder="Search"
              className="flex-1 bg-transparent text-xs outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-4">
          <section>
            <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Views
            </p>
            <ul className="space-y-0.5">
              {VIEWS.map(({ label, badge, active }) => (
                <li key={label}>
                  <button
                    className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm ${
                      active
                        ? "bg-gray-200 font-medium text-gray-900"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="size-4 shrink-0 rounded bg-gray-300" />
                    <span className="flex-1 truncate text-left">{label}</span>
                    {badge ? (
                      <span className="shrink-0 rounded-full bg-gray-200 px-1.5 py-0.5 text-[10px] font-medium leading-none text-gray-500">
                        {badge}
                      </span>
                    ) : null}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Mail
            </p>
            <ul className="space-y-0.5">
              {MAIL_FOLDERS.map(({ label }) => (
                <li key={label}>
                  {label === "Drafts" ? (
                    <Link
                      href="/drafts"
                      className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      <span className="size-4 shrink-0 rounded bg-gray-300" />
                      <span className="flex-1 truncate text-left">{label}</span>
                    </Link>
                  ) : (
                    <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100">
                      <span className="size-4 shrink-0 rounded bg-gray-300" />
                      <span className="flex-1 truncate text-left">{label}</span>
                    </button>
                  )}
                </li>
              ))}
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

      <main className="relative flex min-w-0 flex-1 flex-col">
        <header className="flex shrink-0 items-center gap-3 border-b border-gray-200 px-5 py-3">
          <div className="flex shrink-0 items-center gap-2">
            <span className="size-5 rounded bg-gray-300" />
            <h1 className="text-base font-semibold">Inbox</h1>
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
              placeholder="Search inbox..."
              className="flex-1 bg-transparent text-xs outline-none placeholder:text-gray-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="white flex size-7 shrink-0 items-center justify-center rounded-full border border-gray-200 text-[10px] font-semibold hover:bg-gray-50">
              AI
            </button>
            <button className="flex items-center gap-1.5 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs hover:bg-gray-50">
              <span className="size-3 rounded-full border border-gray-400" />
              Auto label
            </button>
            <button className="flex items-center gap-1.5 rounded-md border border-gray-200 px-2.5 py-1.5 text-xs hover:bg-gray-50">
              <svg
                className="size-3.5 text-gray-500"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 4h10M3 8h10M3 12h6" />
                <path d="M12 10v4M10 12h4" />
              </svg>
              Add tag
            </button>
            <button className="flex size-7 items-center justify-center rounded text-gray-500 hover:bg-gray-100">
              <svg
                className="size-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 6h8M4 10h8" />
              </svg>
            </button>
            <button className="flex size-7 items-center justify-center rounded text-gray-500 hover:bg-gray-100">
              <svg
                className="size-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 4h8v8H4z" />
              </svg>
            </button>
            <button className="flex size-7 items-center justify-center rounded text-gray-500 hover:bg-gray-100">
              <svg
                className="size-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            </button>
          </div>
        </header>

        <div className="flex shrink-0 flex-wrap items-center gap-2 border-b border-gray-200 px-5 py-2.5">
          {FILTER_CHIPS.map((chip) => (
            <span
              key={chip}
              className="flex cursor-pointer select-none items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-xs hover:bg-gray-100"
            >
              {chip}
              <svg
                className="size-3 text-gray-400"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </span>
          ))}
          <button className="px-1 text-xs text-blue-600 hover:underline">
            + Filter
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {EMAIL_GROUPS.map(({ label, emails }) => (
            <div key={label}>
              <GroupHeader label={label} />
              {emails.map((email) => (
                <EmailRow key={`${email.sender}-${email.subject}`} {...email} />
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

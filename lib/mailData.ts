export type MailboxKey = "inbox" | "sent" | "all-mail";

export interface AIInsight {
  summary: string;
  importance: number;
  dates: string[];
  label: "Low" | "Medium" | "High";
}

export interface Email {
  id: number;
  group: string;
  sender: string;
  subject: string;
  snippet: string;
  time: string;
  color: string;
  fromEmail: string;
  body: string;
  ai: AIInsight;
  direction: "received" | "sent";
  toName?: string;
  toEmail?: string;
  receivedBy?: string;
}

export const ACCOUNTS = [
  {
    id: 0,
    name: "Sushant N.",
    email: "sushant@example.com",
    initials: "SN",
    gradient: "linear-gradient(135deg,#2d5be3,#7c3aed)",
    unread: 99,
  },
  {
    id: 1,
    name: "Sushant Work",
    email: "sushant.n@company.io",
    initials: "SW",
    gradient: "linear-gradient(135deg,#0f766e,#0891b2)",
    unread: 5,
  },
  {
    id: 2,
    name: "S. Nair",
    email: "s.nair.personal@gmail.com",
    initials: "SP",
    gradient: "linear-gradient(135deg,#b45309,#d97706)",
    unread: 0,
  },
] as const;

export const VIEWS = [
  { label: "Inbox", badge: "99+" },
  { label: "GitHub", badge: "21" },
  { label: "Calendar", badge: null },
  { label: "Labels", badge: "4" },
  { label: "Promotions", badge: "12" },
  { label: "Social", badge: "3" },
] as const;

export const FILTER_CHIPS = [
  "Categories",
  "Labels",
  "Is unread",
  "Show archived",
  "Hide calendar events",
] as const;

export const MAILBOX_META: Record<
  MailboxKey,
  { label: string; description: string; href: string }
> = {
  inbox: {
    label: "Inbox",
    description: "Priority mail waiting for you",
    href: "/home",
  },
  sent: {
    label: "Sent",
    description: "Messages you have already sent",
    href: "/sent",
  },
  "all-mail": {
    label: "All Mail",
    description: "All received mail across your accounts",
    href: "/all-mail",
  },
};

export const INBOX_EMAILS: Email[] = [
  {
    id: 1,
    group: "Today",
    sender: "GitHub",
    subject: "Your pull request was merged",
    snippet: "bettermailer-fork opened 2 hours ago by sushant",
    time: "10:24 AM",
    color: "#24292e",
    fromEmail: "noreply@github.com",
    receivedBy: "sushant.n@company.io",
    body: `<p>Hi Sushant,</p><p>Your pull request <strong>#47 - feat: AI summary tooltip</strong> in <code>bettermailer-fork</code> has been successfully merged into <code>main</code>.</p><p>The changes are now live and will be deployed in the next release cycle. Thanks for your contribution.</p><p>- The GitHub Team</p>`,
    direction: "received",
    ai: {
      summary:
        "GitHub confirms your pull request #47 was merged into main on bettermailer-fork.",
      importance: 45,
      dates: [],
      label: "Low",
    },
  },
  {
    id: 2,
    group: "Today",
    sender: "Vercel",
    subject: "Deployment succeeded",
    snippet: "Your latest push to main is now live on Vercel.",
    time: "9:47 AM",
    color: "#000000",
    fromEmail: "notifications@vercel.com",
    receivedBy: "sushant.n@company.io",
    body: `<p>Hello Sushant,</p><p>Your deployment to <strong>bettermailer.vercel.app</strong> succeeded at <strong>9:47 AM today</strong>.</p><p>Build duration: 43s. Region: iad1. Branch: main.</p>`,
    direction: "received",
    ai: {
      summary:
        "Vercel reports a successful deployment of your project to production at 9:47 AM today.",
      importance: 55,
      dates: ["Deployed: Today, 9:47 AM"],
      label: "Medium",
    },
  },
  {
    id: 3,
    group: "Today",
    sender: "Notion",
    subject: "Weekly digest",
    snippet: "Here's what happened in your workspace this week.",
    time: "8:02 AM",
    color: "#000000",
    fromEmail: "mail@notion.so",
    receivedBy: "sushant@example.com",
    body: `<p>Hi Sushant,</p><p>3 pages updated and 2 comments were added by teammates.</p><p>Week of Apr 1-7, 2026.</p>`,
    direction: "received",
    ai: {
      summary:
        "Notion weekly digest showing 3 page updates and 2 new comments from your workspace.",
      importance: 20,
      dates: ["Week of: Apr 1-7, 2026"],
      label: "Low",
    },
  },
  {
    id: 4,
    group: "Yesterday",
    sender: "UPES University",
    subject: "Important: fee deadline reminder",
    snippet: "Please note that the last date for fee payment is approaching.",
    time: "Yesterday",
    color: "#8b1a1a",
    fromEmail: "fees@upes.ac.in",
    receivedBy: "s.nair.personal@gmail.com",
    body: `<p>Dear Student,</p><p>The <strong>last date for fee payment is April 10, 2026</strong>. Late payments incur a penalty of <strong>Rs.500 per day</strong>.</p><p>Please log in to the student portal to complete your payment.</p>`,
    direction: "received",
    ai: {
      summary:
        "UPES University fee payment deadline is April 10, 2026, with a daily late penalty.",
      importance: 92,
      dates: ["Fee deadline: April 10, 2026", "Late penalty: Rs.500/day"],
      label: "High",
    },
  },
  {
    id: 5,
    group: "Yesterday",
    sender: "Google",
    subject: "New sign-in on Chrome",
    snippet: "We noticed a new sign-in to your Google Account.",
    time: "Yesterday",
    color: "#4285f4",
    fromEmail: "no-reply@accounts.google.com",
    receivedBy: "sushant@example.com",
    body: `<p>Hi Sushant,</p><p>New sign-in detected: Chrome on Windows 11, Madurai, Tamil Nadu, April 3, 2026 at 4:12 PM IST.</p>`,
    direction: "received",
    ai: {
      summary:
        "Google security alert for a new Chrome sign-in from Madurai on April 3, 2026.",
      importance: 75,
      dates: ["Sign-in: April 3, 2026 at 4:12 PM IST"],
      label: "High",
    },
  },
  {
    id: 6,
    group: "Yesterday",
    sender: "Stripe",
    subject: "Your invoice is ready",
    snippet: "Invoice #0042 for $29.00 is now available in your dashboard.",
    time: "Yesterday",
    color: "#635bff",
    fromEmail: "receipts@stripe.com",
    receivedBy: "sushant.n@company.io",
    body: `<p>Hi Sushant,</p><p>Invoice <strong>#0042</strong> for <strong>$29.00</strong> is ready. Billing period: March 1-31, 2026. Due date: April 15, 2026.</p>`,
    direction: "received",
    ai: {
      summary:
        "Stripe invoice #0042 for $29.00 is ready and due on April 15, 2026.",
      importance: 60,
      dates: ["Billing period: Mar 1-31, 2026", "Due date: April 15, 2026"],
      label: "Medium",
    },
  },
];

export const ALL_MAIL_EMAILS: Email[] = [
  ...INBOX_EMAILS,
  {
    id: 7,
    group: "Earlier",
    sender: "Figma",
    subject: "Comment thread resolved",
    snippet: "Riya marked the dashboard polish thread as resolved.",
    time: "Mar 30",
    color: "#111111",
    fromEmail: "notifications@figma.com",
    receivedBy: "sushant@example.com",
    body: `<p>Hi Sushant,</p><p>Riya resolved the comment thread on <strong>Bettermail Landing Refresh</strong>.</p><p>The file is ready for the next review pass.</p>`,
    direction: "received",
    ai: {
      summary:
        "Figma reports that the dashboard polish comment thread was resolved by Riya.",
      importance: 28,
      dates: ["Resolved: March 30, 2026"],
      label: "Low",
    },
  },
  {
    id: 8,
    group: "Earlier",
    sender: "Linear",
    subject: "Issue assigned to you",
    snippet: "BM-118 Improve sent mailbox filters was assigned to you.",
    time: "Mar 28",
    color: "#4f46e5",
    fromEmail: "notifications@linear.app",
    receivedBy: "sushant.n@company.io",
    body: `<p>Hello Sushant,</p><p><strong>BM-118</strong> has been assigned to you: Improve sent mailbox filters.</p><p>Priority: Medium. Sprint: April polish.</p>`,
    direction: "received",
    ai: {
      summary:
        "Linear assigned BM-118 to you for sent mailbox filter improvements.",
      importance: 48,
      dates: ["Assigned: March 28, 2026"],
      label: "Medium",
    },
  },
];

export const SENT_EMAILS: Email[] = [
  {
    id: 101,
    group: "Today",
    sender: "Riya Shah",
    subject: "Re: Bettermail homepage revisions",
    snippet: "I pushed the mailbox spacing cleanup and the empty state copy.",
    time: "11:18 AM",
    color: "#c2410c",
    fromEmail: "sushant@example.com",
    toName: "Riya Shah",
    toEmail: "riya@studio.dev",
    body: `<p>Hi Riya,</p><p>I pushed the mailbox spacing cleanup and updated the empty state copy for the homepage.</p><p>Please review the hover state on desktop when you get a chance.</p><p>Thanks,<br/>Sushant</p>`,
    direction: "sent",
    ai: {
      summary:
        "You sent Riya an update about homepage spacing cleanup and the hover-state review.",
      importance: 40,
      dates: [],
      label: "Low",
    },
  },
  {
    id: 102,
    group: "Yesterday",
    sender: "Aman Verma",
    subject: "Interview availability",
    snippet: "Wednesday after 2 PM IST works for me.",
    time: "Yesterday",
    color: "#0f766e",
    fromEmail: "sushant@example.com",
    toName: "Aman Verma",
    toEmail: "aman.verma@example.com",
    body: `<p>Hi Aman,</p><p>Wednesday after 2 PM IST works for me. Please send over the meeting link once the slot is confirmed.</p><p>Regards,<br/>Sushant</p>`,
    direction: "sent",
    ai: {
      summary:
        "You confirmed interview availability for Wednesday after 2 PM IST.",
      importance: 58,
      dates: ["Availability: Wednesday after 2 PM IST"],
      label: "Medium",
    },
  },
  {
    id: 103,
    group: "Earlier",
    sender: "Product Team",
    subject: "Template approval for release emails",
    snippet: "Sharing the final template copy for your sign-off.",
    time: "Mar 29",
    color: "#1d4ed8",
    fromEmail: "sushant.n@company.io",
    toName: "Product Team",
    toEmail: "product@company.io",
    body: `<p>Hello team,</p><p>Sharing the final template copy for the release emails. I adjusted the CTA wording and shortened the intro paragraph.</p><p>If there are no objections, I will mark this ready for launch.</p><p>- Sushant</p>`,
    direction: "sent",
    ai: {
      summary:
        "You shared the final release email template copy with the product team for approval.",
      importance: 63,
      dates: ["Sent: March 29, 2026"],
      label: "Medium",
    },
  },
];

export function getMailboxEmails(mailbox: MailboxKey): Email[] {
  if (mailbox === "sent") return SENT_EMAILS;
  if (mailbox === "all-mail") return ALL_MAIL_EMAILS;
  return INBOX_EMAILS;
}

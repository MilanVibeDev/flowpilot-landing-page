export default function Icon({ name, size = 20, strokeWidth = 1.8 }) {
  const paths = {
    arrowRight: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    arrowDown: <><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    play: <path d="m9 7 8 5-8 5Z" />,
    sparkle: <><path d="m12 3 1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9Z" /><path d="m18.5 15 .6 2 1.9.5-1.9.6-.6 1.9-.6-1.9-1.9-.6 1.9-.5Z" /></>,
    messageOff: <><path d="M8 19c-1.3.4-2.7.8-4 1l1-3.2A8 8 0 0 1 3 11a8.8 8.8 0 0 1 .7-3.5" /><path d="M6.4 4.3A10 10 0 0 1 12 3c5 0 9 3.6 9 8 0 1.5-.5 3-1.4 4.2" /><path d="m3 3 18 18" /></>,
    layers: <><path d="m12 3-9 5 9 5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15 9-2 4-4 2 2-4Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.7 5.7 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 1S18 1 15 2.5a13.4 13.4 0 0 0-7 0C5 1 3.9 1 3.9 1a5.4 5.4 0 0 0-.2 2A5.7 5.7 0 0 0 2.2 7c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></>,
    slack: <><path d="M9 3a2 2 0 0 0-2 2v4H5a2 2 0 1 0 0 4h4Z" /><path d="M15 21a2 2 0 0 0 2-2v-4h2a2 2 0 1 0 0-4h-4Z" /><path d="M21 9a2 2 0 0 0-2-2h-4V5a2 2 0 1 0-4 0v4Z" /><path d="M3 15a2 2 0 0 0 2 2h4v2a2 2 0 1 0 4 0v-4Z" /></>,
    notion: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 16V8l8 8V8" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7Z" />,
    trend: <><path d="m3 17 6-6 4 4 8-9" /><path d="M15 6h6v6" /></>,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" /></>,
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name] || paths.sparkle}
    </svg>
  )
}

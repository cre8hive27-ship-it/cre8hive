import { useEffect, useState } from "react";
import { X } from "lucide-react";

// TODO: replace with the real WhatsApp number (international format, no +)
const WHATSAPP_NUMBER = "234XXXXXXXXXX";
const MESSAGE =
  "Hi! I found your portfolio and I'm interested in discussing a project. I'd like to learn more about your web development, AI automation, and Vibe Coding services.";

const HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
const BUBBLE_DISMISS_KEY = "wa_bubble_dismissed";

export function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(BUBBLE_DISMISS_KEY) === "1") return;
    const t = window.setTimeout(() => setShowBubble(true), 8000);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    setShowBubble(false);
    try {
      sessionStorage.setItem(BUBBLE_DISMISS_KEY, "1");
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {showBubble && (
        <div
          role="status"
          className="relative max-w-[16rem] animate-fade-in rounded-2xl rounded-br-sm border border-border bg-card px-4 py-3 pr-9 text-sm text-foreground shadow-[var(--shadow-lift,0_10px_30px_-10px_rgba(0,0,0,0.2))]"
        >
          <p className="leading-snug">
            👋 Need a website, AI automation, or app? Let&apos;s chat!
          </p>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss chat bubble"
            className="absolute right-1.5 top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      <a
        href={HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        title="Chat with me on WhatsApp"
        className="group relative inline-flex items-center"
      >
        {/* Hover label */}
        <span
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:inline-block"
        >
          Chat with me on WhatsApp
        </span>

        {/* Pulse ring */}
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-75 animate-ping"
        />

        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:scale-105 hover:bg-[#20BA5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]">
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.688.244-1.045 0-.244-1.505-.976-1.706-1.048zm-2.828 6.322c-1.646 0-3.276-.416-4.706-1.232L7 23.5l1.263-3.42a9.4 9.4 0 0 1-1.36-4.88C6.902 10.036 11.155 5.9 16.404 5.9s9.5 4.136 9.5 9.303c0 5.166-4.25 9.324-9.622 9.324zm0-20.42C10.058 3.108 5 8.078 5 14.194c0 2.006.552 3.98 1.598 5.71L5 25l5.31-1.545a11.62 11.62 0 0 0 5.66 1.446h.007C22.334 24.9 27.4 19.93 27.4 13.813c0-2.966-1.185-5.755-3.336-7.85a11.375 11.375 0 0 0-7.79-3.856z" />
          </svg>
        </span>
      </a>
    </div>
  );
}

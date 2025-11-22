export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-[11px]">
          Built with TypeScript, Next.js, and a mild obsession with data
          quality.
        </p>
      </div>
    </footer>
  );
}

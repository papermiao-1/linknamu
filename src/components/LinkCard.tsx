type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-4 text-center text-[15px] font-medium shadow-[var(--glass-shadow)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--glass-bg-hover)] active:translate-y-0"
    >
      {title}
    </a>
  );
}

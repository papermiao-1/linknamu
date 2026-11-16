type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  const ring =
    "h-28 w-28 rounded-full ring-4 ring-white/70 shadow-[0_12px_32px_-8px_rgba(120,70,40,0.45)]";

  return (
    <header className="flex flex-col items-center text-center">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className={`${ring} object-cover`}
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className={`${ring} flex items-center justify-center bg-gradient-to-br from-orange-300 to-rose-400 text-4xl font-semibold text-white`}
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-sm leading-relaxed text-muted">{bio}</p>
    </header>
  );
}

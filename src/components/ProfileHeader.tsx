type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className="h-32 w-32 rounded-full object-cover"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-emerald-300 to-teal-600 text-5xl font-semibold text-white"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}

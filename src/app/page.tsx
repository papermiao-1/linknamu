import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// 더미 데이터: 실제 내용은 나중에 교체
const profile = {
  name: "김며냐",
  bio: "강해지는 게 목표인 냥냥이",
  imageUrl: "/cat.webp",
};

const links = [
  { id: "instagram", title: "Instagram", url: "https://www.instagram.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "brunch", title: "brunch", url: "https://brunch.co.kr/" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 py-16 sm:py-24">
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        imageUrl={profile.imageUrl}
      />
      <ul className="mt-12 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}

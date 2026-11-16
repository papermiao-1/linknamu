import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// 더미 데이터: 실제 내용은 나중에 교체
const profile = {
  name: "김명재",
  bio: "강해지는 게 목표인 기획자",
};

const links = [
  { id: "instagram", title: "Instagram", url: "https://www.instagram.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "brunch", title: "brunch", url: "https://brunch.co.kr/" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 py-12">
      <ProfileHeader name={profile.name} bio={profile.bio} />
      <ul className="mt-10 flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}

import Link from "next/link";

export type CountryType = {
  id?: number;
  code?: string;
  name: string;
  emoji: string;
  continent?: {
    id: number;
    name: string;
  };
};

type CountryProps = CountryType & {
  link: string;
};

export default function CountryCardSmall({ name, emoji, link }: CountryProps) {
  return (
    <Link
      href={link}
      className="flex flex-col items-center p-1 w-20 border rounded-md"
    >
      <h2>{name}</h2>
      <p>{emoji}</p>
    </Link>
  );
}

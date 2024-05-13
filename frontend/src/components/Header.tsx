import Link from "next/link";

export default function Header() {
  return (
    <header
      className="header bg-[#F76C6C] p-4 gap-2 flex flex-col items-center
    "
    >
      <h1 className="text-3xl font-bold">Checkpoint : frontend</h1>
      <Link href="/" className="text-2xl font-semibold">
        Countries
      </Link>
    </header>
  );
}

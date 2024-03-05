import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Husky Fans</h1>
      <div >
        <Link
          href="/home"
          className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}

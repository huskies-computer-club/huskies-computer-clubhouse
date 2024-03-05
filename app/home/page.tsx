import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/utils/cn";


export default async function DashboardPage() {
    const { userId } = auth();

    if (!userId) {
        redirect("/");
    }

    const user = await clerkClient.users.getUser(userId);

    return (
        <>
            {user && (
                <>
                    <h1 className="text-3xl font-semibold">
                        👋 Hi, {user.firstName || `Stranger`}
                    </h1>
                    <h2 className="mt-16 mb-4 text-3xl font-semibold">
                       You have added to the raffle! 🎟🎫🎰💸 
                    </h2>
                    <p>The winner will receive an email to pick up the price.</p>
                </>
            )}
        </>
    );
}

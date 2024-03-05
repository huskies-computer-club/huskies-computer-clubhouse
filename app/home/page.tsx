import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default async function DashboardPage() {
    const { userId } = auth();

    if (!userId) {
        redirect("/");
    }

    const user = await clerkClient.users.getUser(userId);

    return (
        <div>
            {user && (
                <>
                    <h1 className="text-3xl font-semibold">
                        👋 Hi, {user.firstName || `Stranger`}
                    </h1>
                    <h2 className="mt-16 mb-4 text-3xl font-semibold">
                        You have been added to the raffle! 🎟🎫🎰💸
                    </h2>
                    <p>The winner will receive an email to pick up the price.</p>
                </>
            )}
            {/* <BackgroundBeams /> */}
        </div>
    );
}

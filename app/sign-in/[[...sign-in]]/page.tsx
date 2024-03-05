import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center py-24">
            <h1>HELLO HUSKY</h1>
            <SignIn />
        </div>
    );
}

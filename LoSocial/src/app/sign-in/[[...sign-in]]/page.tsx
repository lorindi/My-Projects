import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-96px)] w-full">
      <SignIn />
    </div>
  );
}

import Image from "next/image";
import Btn from "./components/buttons/Buttons";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Btn type="button" variant="transparent" text="Explore" link="/explore" />
      <Btn type="button" variant="filled" text="Explore" link="/explore" />
      <Btn type="button" variant="outlined" text="Explore" link="/explore" />

    </main>
  );
}

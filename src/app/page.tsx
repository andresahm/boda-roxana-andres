import { SeatingFlow } from "@/components/SeatingFlow";
import { WeddingFooter, WeddingHeader } from "@/components/WeddingHeader";

export default function Home() {
  return (
    <>
      <WeddingHeader />
      <main className="flex-1">
        <SeatingFlow />
      </main>
      <WeddingFooter />
    </>
  );
}

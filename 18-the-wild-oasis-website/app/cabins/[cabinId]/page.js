import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import { getCabin, getCabins } from "@/app/_lib/data-services";
import { Suspense } from "react";

// export const metadata = {
//   title: "Cabin",
// };

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);
  return (
    <main className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reservation {cabin.name} today. Pay on arrival
        </h2>

        <Suspense>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </main>
  );
}

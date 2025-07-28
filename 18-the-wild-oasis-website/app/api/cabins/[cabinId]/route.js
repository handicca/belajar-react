import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-services";

export async function GET(request, { params }) {
  try {
    const { cabinId } = await params;
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}

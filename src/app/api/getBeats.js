export async function getBeats() {
  try {
    const res = await fetch("http://localhost:8080/api/get_beats", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
}

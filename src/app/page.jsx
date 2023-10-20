import HeaderPage from "./header/page";
import RecordsPage from "./records/page";
import TracksPage from "./tracks/page";

export default function Home() {
  return (
    <div>
      <HeaderPage/>
      <TracksPage/>
      <RecordsPage/>
    </div>
  )
}

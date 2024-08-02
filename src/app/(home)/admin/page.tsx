import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin page | talllorenc",
  description: "Talllorenc base",
  openGraph: {
    title: "Admin page | talllorenc",
    description: "Talllorenc base",
    url: "/admin",
    siteName: "talllorenc",
    locale: "en",
    type: "website",
  },
};

const AdminPage = () => {
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage
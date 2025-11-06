// app/book/page.js  (App Router)
import BookConsultation from "./BookConsultation";

export const metadata = {
  title: "Book a Consultation | Mears Law",
  alternates: { canonical: "https://mearslaw.ca/book" },
};

export default function Page() {
  return <BookConsultation />;
}

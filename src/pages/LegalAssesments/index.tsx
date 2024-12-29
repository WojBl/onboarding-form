import { useEffect } from "react";
import { LEGAL_ASSESMENTS_PAGE_ROUTE } from "../../consts/routes";

export default function LegalAssesments(): JSX.Element {
  useEffect(() => {
    localStorage.setItem(LEGAL_ASSESMENTS_PAGE_ROUTE, "ok");
  }, []);

  return (
    <div>
      <h1 className="text-4xl my-6 font-semibold">Legal Assesments</h1>
    </div>
  );
}

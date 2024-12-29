import { useEffect } from "react";
import { WORKPLACE_GUIDELINES_PAGE_ROUTE } from "../../consts/routes";

export default function WorkplaceGuidelines(): JSX.Element {
  useEffect(() => {
    localStorage.setItem(WORKPLACE_GUIDELINES_PAGE_ROUTE, "ok");
  }, []);

  return (
    <div>
      <h1 className="text-4xl my-6 font-semibold">Workplace Guidelines</h1>
    </div>
  );
}

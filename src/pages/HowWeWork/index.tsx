import { useEffect } from "react";
import { HOW_WE_WORK_PAGE_ROUTE } from "../../consts/routes";

export default function HowWeWork(): JSX.Element {
  useEffect(() => {
    localStorage.setItem(HOW_WE_WORK_PAGE_ROUTE, "ok");
  }, []);

  return (
    <div>
      <h1 className="text-4xl my-6 font-semibold">How we work</h1>
    </div>
  );
}

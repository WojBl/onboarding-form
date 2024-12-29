import { useEffect } from "react";
import { ABOUT_YOU_PAGE_ROUTE } from "../../consts/routes";

export default function AboutYou(): JSX.Element {
  useEffect(() => {
    localStorage.setItem(ABOUT_YOU_PAGE_ROUTE, "ok");
  }, []);

  return (
    <div>
      <h1 className="text-4xl my-6 font-semibold">About You</h1>
    </div>
  );
}

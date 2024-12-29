import { useEffect } from "react";
import { ABOUT_US_PAGE_ROUTE } from "../../consts/routes";

export default function AboutUs(): JSX.Element {
  useEffect(() => {
    localStorage.setItem(ABOUT_US_PAGE_ROUTE, "ok");
  }, []);

  return (
    <div>
      <h1 className="text-4xl my-6 font-semibold">About Techtorch</h1>
    </div>
  );
}

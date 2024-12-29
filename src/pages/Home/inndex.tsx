import { useNavigate } from "react-router";
import Button from "../../components/Button";
import ContentSection from "../../components/ContentSection";
import { useCallback } from "react";
import { ONBOARDING_DASHBOARD_PAGE_ROUTE } from "../../consts/routes";

export default function Home(): JSX.Element {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(ONBOARDING_DASHBOARD_PAGE_ROUTE);
  }, [navigate]);

  return (
    <div className="w-full">
      <h1 className="text-4xl my-6 font-semibold text-center">
        Welcome to Techtorch
      </h1>

      <ContentSection>
        {" "}
        <p className="mb-6">
          We’re absolutely delighted to have you join our team. At TechTorch, we
          are driven by a passion for innovation 💡 and a commitment to
          delivering exceptional value through our projects. Our mission is to
          foster a dynamic culture where talented individuals come together to
          collaborate 🤝, grow 📈, and achieve remarkable success 🏆.
        </p>
        <p className="mb-6">
          We believe in empowering our employees by providing clear processes,
          robust support, and abundant opportunities to thrive 🌱. Your journey
          with us is more than a role—it’s a chance to shape our future and make
          a meaningful impact.
        </p>
        <p className="mb-6">
          As you embark on this exciting new chapter, know that you are a vital
          part of our vision. We’re here to support you every step of the way,
          and we look forward to achieving great things together. Welcome
          aboard! 🎉
        </p>
        <p className="mb-6">
          Feel free to introduce yourself to the team using this Slack channel:
          techtorch-general, if Justyna hasn’t already done so. We’re eager to
          learn more about your goals and explore how we can support you in
          achieving them!
        </p>
      </ContentSection>

      <p className="my-6">
        The Employee Handbook serves as your guide to understanding TechTorch’s
        values, policies, and expectations. This document is a reference to help
        you navigate your role, align with our company’s objectives, and succeed
        in your day-to-day work. It’s also a living document that evolves with
        our growth, so keep an eye out for updates.
      </p>

      <p className="mb-6">Pro Tips for Using the Handbook:</p>

      <ul className="list-disc mx-5">
        <li>
          <b>Bookmark It:</b> Save the digital version of the handbook to your
          browser or device for quick access.
        </li>
        <li>
          <b>Ask Questions:</b> If you’re unsure about any policy or guideline,
          your manager or the HR team is here to help.
        </li>

        <li>
          <b>Collaborate: </b> Share your thoughts or questions during team
          meetings or one-on-ones to ensure clarity and alignment.
        </li>
      </ul>

      <div className="my-12 flex justify-center">
        <Button label="Start your journey at Techtorch" onClick={handleClick} />
      </div>
    </div>
  );
}

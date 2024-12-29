import { useNavigate } from "react-router";
import Button from "../../components/Button";
import ContentSection from "../../components/ContentSection";
import { useCallback } from "react";
import {
  ABOUT_US_PAGE_ROUTE,
  ABOUT_YOU_PAGE_ROUTE,
  HOW_WE_WORK_PAGE_ROUTE,
  LEGAL_ASSESMENTS_PAGE_ROUTE,
  WORKPLACE_GUIDELINES_PAGE_ROUTE,
} from "../../consts/routes";
import LearningSection from "../../components/LearningSection";

export default function OnboardingDashboard(): JSX.Element {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold my-6">Employee Onboarding</h1>
      <hr className="mb-6" />

      <p className="mb-6">
        Please go through every section to finish this step
      </p>

      <LearningSection
        title="About Techtorch"
        description="TechTorch is a pioneering services firm dedicated to transforming
          technology for modern private equity-backed portfolio companies. By
          combining insightful business thought leaders with the top 2% of
          technical talent and the support of an AI-enabled platform, TechTorch
          enables customers to achieve their time to value faster."
        route={ABOUT_US_PAGE_ROUTE}
      />

      <LearningSection
        title="How we work"
        description="Agile serves as the foundation of our project management approach,
          designed for projects that require adaptability, iterative
          development, and close collaboration with clients. This methodology
          allows our teams to respond effectively to changes while ensuring
          steady progress and delivering high-quality results."
        route={HOW_WE_WORK_PAGE_ROUTE}
      />

      <LearningSection
        title="Workplace Guidelines"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        route={WORKPLACE_GUIDELINES_PAGE_ROUTE}
      />

      <LearningSection
        title="Legal Assesments"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        route={LEGAL_ASSESMENTS_PAGE_ROUTE}
      />

      <LearningSection
        title="About you"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        route={ABOUT_YOU_PAGE_ROUTE}
      />
    </div>
  );
}

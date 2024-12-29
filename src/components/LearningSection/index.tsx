import { useNavigate } from "react-router";
import Button from "../Button";
import { useCallback, useMemo } from "react";
import ContentSection from "../ContentSection";

type Props = {
  title: string;
  description: string;
  route: string;
};

export default function LearningSection({
  title,
  description,
  route,
}: Props): JSX.Element {
  const navigate = useNavigate();

  const navigateTo = useCallback(
    (route: string) => () => {
      navigate(route);
    },
    [navigate]
  );

  const isCompleted = useMemo(() => localStorage.getItem(route) === 'ok', []);

  return (
    <ContentSection className={`mb-4 ${isCompleted ? 'bg-green-01' : ''}`}> 
      <h2 className="text-l font-semibold">{title}</h2>
      <p className="my-4">{description}</p>
      <Button label="Explore" onClick={navigateTo(route)} />
    </ContentSection>
  );
}

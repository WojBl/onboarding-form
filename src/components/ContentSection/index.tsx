type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentSection({ children, className = '' }: Props): JSX.Element {
  return (
    <section className={`rounded p-4 bg-main-blue-03 w-full border border-main-blue-02 ${className}`}>
      {children}
    </section>
  );
}

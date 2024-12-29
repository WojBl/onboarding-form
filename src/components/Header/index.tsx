import Techtorchlogo from '../../assets/icons/logo-techtorch-white.svg';

export default function Header(): JSX.Element {
  return (
    <header className="w-full h-[72px] bg-red fixed top-0 bg-main-blue-01 flex justify-between p-4">
      <img src={Techtorchlogo} alt="logo" />
    </header>
  );
}

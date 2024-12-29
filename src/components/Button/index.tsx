type Props = {
    label: string;
    className?: string;
    onClick?: () => void
}

export default function Button({ label, className, onClick = () => {}}: Props): JSX.Element {
    return <button className={`py-2 px-4 text-white rounded bg-main-blue-02 ${className}`} onClick={onClick}>{label}</button>
}
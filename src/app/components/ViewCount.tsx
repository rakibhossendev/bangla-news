import { IoEyeOutline } from "react-icons/io5";

interface ViewCountProps {
    views?: number;
    className?: string;
}

export default function ViewCount({ views = 0, className = "" }: ViewCountProps) {
    return (
        <span
            title="কতজন এই খবরটি খুলেছেন"
            className={`inline-flex items-center gap-1 ${className}`}
        >
            <IoEyeOutline aria-hidden="true" />
            {views.toLocaleString("bn-BD")}
        </span>
    );
}

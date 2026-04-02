export default function GroupHeader({ label }: { label: string }) {
    return (
        <div className="px-5 py-1.5 text-[11px] font-semibold text-gray-400 bg-gray-50 border-b border-gray-100">
            {label}
        </div>
    );
}

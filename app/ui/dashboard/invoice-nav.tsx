import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const links = ['Dine In', 'Take Out', 'Delivery'];

export default function InvoiceNav() {
  const searchParams = useSearchParams();
  const selectedMeal = searchParams.get('invoice');

  return (
    <section className="flex bg-slate-200 text-xs justify-between py-0.5 mt-5 border-[2px] rounded-full">
      {links.map((link, index) => {
        const isSelected = selectedMeal === link.toLowerCase();
        return (
          <Link
            key={link}
            href={`?invoice=${link.toLowerCase()}`}
            className={clsx(
              'flex w-44 h-8 text-slate-400 items-center justify-center gap-2 p-0 text-[12px] font-medium md:w-48 md:h-10 md:text-[14px]',
              isSelected && 'text-slate-600 bg-slate-50 rounded-full shadow-md'
            )}
          >
            {link}
          </Link>
        );
      })}
    </section>
  );
}

import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { lusitana } from "../fonts";
import Link from "next/link";

export default function Invoice() {
  return (
    <div className="relative">
      <Link href='/dashboard' className="fixed bottom-0 right-2 left-2 flex items-center justify-between mt-3 p-4 bg-black text-white rounded-full">
        <div className="flex items-center gap-1">
          <ShoppingBagIcon className="w-7 mb-0.5" />
          <span className="pl-1 text-xl">$200</span>
          <span className="text-xs mt-0.5 text-slate-400">3 Items</span>
        </div>
        <span className={`${lusitana.className} text-xl`}>Process Invoice</span>
      </Link>
    </div>
  );
}

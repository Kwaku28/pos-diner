import { UserCircleIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";

export default function Profile() {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 mt-2 p-1 rounded-full flex items-center justify-center border-[0.5px]">
        <BellIcon className="hover:text-blue-600" />
      </div>
      <div className="flex items-center justify-center w-10 font-medium">
        <UserCircleIcon className="hover:text-blue-600" />
      </div>
    </div>
  );
}

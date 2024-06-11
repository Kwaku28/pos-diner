import { UserCircleIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";

export default function Profile() {
  return (
    <div className="flex gap-3">
      <div className="flex items-center justify-center font-medium">
        <BellIcon className="w-6 hover:text-blue-600" />
      </div>
      <div className="flex items-center justify-center font-medium">
        <UserCircleIcon className="w-9 hover:text-blue-600" />
      </div>
    </div>
  );
}

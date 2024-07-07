import { lusitana } from "../../fonts";
import FoodCards from "./cards";

export default function Meals() {
  return (
    <div className="mt-2">
      <h2 className={`${lusitana.className} mb-2 text-xl font-bold md:text-2xl`}>Select Menu</h2>
      <div className="flex max-h-80 overflow-y-auto">
        <FoodCards />
      </div>
    </div>
  );
}

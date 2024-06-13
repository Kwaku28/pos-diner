import { lusitana } from "../../fonts";
import FoodCards from "./cards";

export default function Meals() {
  return (
    <div className="mt-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Menu</h2>
      <div>
        <FoodCards />
      </div>
    </div>
  );
}

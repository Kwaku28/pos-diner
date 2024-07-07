import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const foodArray = [
  {
    image: "/Spanish-Tortilla.jpg",
    name: "Food 1",
    price: 9.99,
  },
  {
    image: "/Spanish-Tortilla.jpg",
    name: "Food 2",
    price: 12.99,
  },
  {
    image: "/Spanish-Tortilla.jpg",
    name: "Food 3",
    price: 12.99,
  },
];

export default function InvoiceCard() {
  return (
    <div className="grid grid-cols-1 gap-4 max-h-52 overflow-y-auto">
      {foodArray.map((food, index) => (
        <div key={index} className="pb-2 bg-white border-b">
          <div className="flex">
            <div>
              <Image
                src={food.image}
                alt={food.name}
                width={170}
                height={30}
                className="object-fill h-22 rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-between w-full pl-3">
              <h2 className="text-xl font-semibold">{food.name}</h2>
              <div className="flex justify-between items-center">
                <span className="text-lg text-green-900 font-semibold">${food.price}</span>
                <div className="flex items-center gap-5 bg-slate-200 rounded-full">
                  <button className="m-1 bg-white rounded-full">
                    <MinusIcon className="w-9 p-1" />
                  </button>
                  <span className="text-lg">2</span>
                  <button className="m-1 bg-white rounded-full">
                    <PlusIcon className="w-9 p-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

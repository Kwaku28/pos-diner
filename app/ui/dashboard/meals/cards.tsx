import Image from "next/image";

const foodArray = [
  {
    image: '/Spanish-Tortilla.jpg',
    name: 'Food 1',
    description: 'Description of Food 1',
    totalSold: 10,
    price: 9.99,
  },
  {
    image: '/Spanish-Tortilla.jpg',
    name: 'Food 2',
    description: 'Description of Food 2',
    totalSold: 5,
    price: 12.99,
  },
  {
    image: '/Spanish-Tortilla.jpg',
    name: 'Food 3',
    description: 'Description of Food 3',
    totalSold: 5,
    price: 12.99,
  },
  {
    image: '/Spanish-Tortilla.jpg',
    name: 'Food 4',
    description: 'Description of Food 4',
    totalSold: 5,
    price: 12.99,
  },
  {
    image: '/Spanish-Tortilla.jpg',
    name: 'Food 5',
    description: 'Description of Food 5',
    totalSold: 5,
    price: 12.99,
  },
  {
    image: '/Spanish-Tortilla.jpg',
    name: 'Food 6',
    description: 'Description of Food 6',
    totalSold: 5,
    price: 12.99,
  },
];

export default function FoodCards() {
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {foodArray.map((food, index) => (
        <div key={index} className='p-1 bg-white shadow-md rounded-md'>
          <div className='flex flex-col justify-between'>
            <div>
            <Image src={food.image} alt={food.name} width={200} height={50} className='object-fill h-32 rounded-md' />
            </div>
            <div className='flex flex-col justify-between'>
              <div>
                <h2 className='text-xl font-semibold'>{food.name}</h2>
                <p className='text-sm text-slate-600'>{food.description}</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-lg font-semibold'>${food.price}</p>
                <p className='text-sm font-semibold text-slate-400'>{food.totalSold} sold</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

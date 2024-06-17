export default function RecentOrders() {
  return (
    <div className="bg-white">
      <h2 className="text-md mb-1 font-bold">Recent Orders</h2>
      <ul className="flex gap-3">
        <li className="flex flex-col w-40 h-24 border-[1px] p-2 justify-around items-start rounded-lg shadow-md md:w-48">
          <div className="flex justify-between w-full">
            <h3 className="text-sm font-bold">Lawrence</h3>
            <span className="text-sm text-slate-400">#1234</span>
          </div>
          <div className="flex mb-3 text-slate-400 text-xs gap-2">
            <span>3 Items</span>
            <span>Table 4</span>
          </div>
          <p className="bg-green-600 text-white text-sm font-medium px-2 rounded-lg">
            Completed
          </p>
        </li>
        <li className="flex flex-col w-40 h-25 border-[1px] p-2 justify-around items-start rounded-lg shadow-md md:w-48">
          <div className="flex justify-between w-full">
            <h3 className="text-sm font-bold">Lawrence</h3>
            <span className="text-sm text-slate-400">#1234</span>
          </div>
          <div className="flex mb-3 text-slate-400 text-xs gap-2">
            <span>3 Items</span>
            <span>Table 4</span>
          </div>
          <p className="bg-orange-400 text-white text-sm px-2 rounded-lg">
            Pending
          </p>
        </li>
      </ul>
    </div>
  );
}

import Meals from "@/app/ui/dashboard/meals/meals";
import MealsNav from "@/app/ui/dashboard/meals/meals-nav";
import RecentOrders from "@/app/ui/dashboard/recent-orders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Dashboard() {
  return (
    <main>
      <RecentOrders />
      <MealsNav />
      <Meals />
    </main>
  );
}

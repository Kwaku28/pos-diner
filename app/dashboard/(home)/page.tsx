import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

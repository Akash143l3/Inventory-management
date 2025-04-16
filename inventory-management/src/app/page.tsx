import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import DashboardStats from "../components/DashboardStats";

export default function Home() {
  return (
    <div className="space-y-6 px-6 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>

      <DashboardStats />

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <Link href="/products">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-4">
                Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Manage your product catalog</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="default">View Products</Button>
            </CardFooter>
          </Card>
        </Link>

        <Link href="/inventory">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-4">
                Inventory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Track your stock levels</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="default">Manage Inventory</Button>
            </CardFooter>
          </Card>
        </Link>

        <Link href="/orders">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold mb-4">
                Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">View and process customer orders</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="default">View Orders</Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
}

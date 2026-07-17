import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Card from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";
import Badge from "@/components/ui/Badge";

import {
  Wallet,
  PiggyBank,
  Plane,
  BookOpen,
  TrendingUp,
  CalendarDays,
  CloudSun,
  Quote,
} from "lucide-react";

const summary = [
  {
    title: "Balance",
    value: "Rp 5.000.000",
    icon: Wallet,
  },
  {
    title: "Savings",
    value: "Rp 2.300.000",
    icon: PiggyBank,
  },
  {
    title: "Australia Fund",
    value: "Rp 1.500.000",
    icon: Plane,
  },
  {
    title: "Study",
    value: "45%",
    icon: BookOpen,
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Summary */}
      <div className="grid grid-cols-4 gap-6">
        {summary.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500">{item.title}</p>

                  <h2 className="mt-2 text-3xl font-black">
                    {item.value}
                  </h2>
                </div>

                <div className="rounded-2xl bg-emerald-100 p-4">
                  <Icon
                    className="text-emerald-600"
                    size={24}
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Middle */}
      <div className="mt-8 grid grid-cols-3 gap-6">
        {/* Expense */}
        <Card className="col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">
              Monthly Expense
            </h3>

            <Badge color="blue">
              July
            </Badge>
          </div>

          <div className="mt-10 flex h-72 items-end justify-between gap-4">
            {[45, 70, 55, 90, 65, 80, 60].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex flex-1 flex-col items-center"
                >
                  <div
                    className="w-full rounded-xl bg-gradient-to-t from-emerald-500 to-green-300"
                    style={{
                      height: `${height}%`,
                    }}
                  />

                  <span className="mt-3 text-sm text-slate-400">
                    {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][index]}
                  </span>
                </div>
              )
            )}
          </div>
        </Card>

        {/* Dream */}
        <Card>
          <Badge>Dream Fun</Badge>

          <h2 className="mt-4 text-2xl font-bold">
            Australia 🇦🇺
          </h2>

          <p className="mt-2 text-slate-500">
            Target 2029
          </p>

          <div className="mt-8">
            <Progress
              value={72}
              showLabel
              size="lg"
            />
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex justify-between">
              <span>Passport</span>

              <span>✅</span>
            </div>

            <div className="flex justify-between">
              <span>IELTS</span>

              <span>🔄</span>
            </div>

            <div className="flex justify-between">
              <span>Visa</span>

              <span>⬜</span>
            </div>

            <div className="flex justify-between">
              <span>Flight</span>

              <span>⬜</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom */}
      <div className="mt-8 grid grid-cols-3 gap-6">
        <Card>
          <div className="flex items-center gap-3">
            <TrendingUp className="text-emerald-600" />

            <h3 className="text-xl font-bold">
              Recent Transactions
            </h3>
          </div>

          <div className="mt-6 space-y-4">
            <Item
              title="Coffee"
              amount="-Rp 30.000"
            />

            <Item
              title="Fuel"
              amount="-Rp 100.000"
            />

            <Item
              title="Salary"
              amount="+Rp 4.700.000"
            />
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <CalendarDays className="text-blue-600" />

            <h3 className="text-xl font-bold">
              Today's Planner
            </h3>
          </div>

          <div className="mt-6 space-y-4">
            <Task text="Meeting Vendor" />
            <Task text="Finish Dashboard UI" />
            <Task text="Study IELTS" />
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <CloudSun className="text-yellow-500" />

            <h3 className="text-xl font-bold">
              Daily Inspiration
            </h3>
          </div>

          <Quote
            className="mt-6 text-emerald-500"
            size={32}
          />

          <p className="mt-4 leading-8 text-slate-600">
            Small progress every day is still progress.
            Stay consistent and your future self will thank you.
          </p>
        </Card>
      </div>
    </DashboardLayout>
  );
}

function Item({
  title,
  amount,
}: {
  title: string;
  amount: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
      <span>{title}</span>

      <span className="font-semibold">
        {amount}
      </span>
    </div>
  );
}

function Task({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
      <div className="h-3 w-3 rounded-full bg-emerald-500" />

      <span>{text}</span>
    </div>
  );
}
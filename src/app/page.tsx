import Dashboard from "@/components/dashboard"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import type { meal } from '@prisma/client';
import db from "@/db";

export default async function Home() {
  const meals = await db.meal.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dashboard />
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
      {meals.map((meal: meal) => <span key={meal.id}>{meal.name}</span>)}
    </main>
  )
}

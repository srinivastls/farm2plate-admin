import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">

        {/* Left */}

        <div className="hidden flex-1 lg:block">

          <h1 className="text-6xl font-black text-green-700">
            Farm2Plate
          </h1>

          <h2 className="mt-6 text-4xl font-bold">
            Admin Portal
          </h2>

          <p className="mt-6 max-w-lg text-lg text-slate-600">
            Manage products, orders, customers,
            categories, delivery partners and analytics
            from one secure dashboard.
          </p>

        </div>

        {/* Right */}

        <LoginForm />

      </div>

    </div>
  );
}
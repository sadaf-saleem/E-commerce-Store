export default function Login() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-md border dark:bg-slate-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-md border dark:bg-slate-800"
        />

        <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-blue-500">
          Login
        </button>
      </form>
    </div>
  );
}

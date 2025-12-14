export default function Signup() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>

      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 border rounded-md dark:bg-slate-800" />
        <input type="email" placeholder="Email" className="p-3 border rounded-md dark:bg-slate-800" />
        <input type="password" placeholder="Password" className="p-3 border rounded-md dark:bg-slate-800" />

        <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-blue-500">
          Create Account
        </button>
      </form>
    </div>
  );
}

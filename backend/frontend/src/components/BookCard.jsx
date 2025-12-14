export default function BookCard({ item }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow hover:shadow-lg duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
      <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
        {item.category}
      </p>

      <p className="mt-2 font-bold text-blue-600">
        Price: {item.price === 0 ? "Free" : `${item.price} PKR`}
      </p>
    </div>
  );
}

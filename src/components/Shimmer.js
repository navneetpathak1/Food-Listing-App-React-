const ShimmerCard = () => {
  return (
    <div className="w-64 h-72 bg-white rounded-lg shadow-md p-4 animate-pulse">
      <div className="w-full h-32 bg-gray-300 rounded"></div>
      <div className="mt-4 h-4 bg-gray-300 rounded"></div>
      <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};

const ShimmerUI = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <ShimmerCard key={i} />
        ))}
    </div>
  );
};

export default ShimmerUI;

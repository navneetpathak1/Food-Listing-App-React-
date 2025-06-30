import "../../index.css"


const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img shimmer"></div>
      <div className="shimmer-title shimmer"></div>
      <div className="shimmer-text shimmer"></div>
      <div className="shimmer-text shimmer"></div>
    </div>
  );
};

const ShimmerUI = () => {
  return (
    <div className="shimmer-container">
      {Array(12).fill("").map((_, i) => <ShimmerCard key={i} />)}
    </div>
  );
};

export default ShimmerUI;

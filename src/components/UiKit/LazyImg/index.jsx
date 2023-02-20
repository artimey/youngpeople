export const LazyImg = (props) => {
  const handleLoad = () => {};
  return <img {...props} loading="lazy" onLoad={handleLoad} />;
};

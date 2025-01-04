const Skeleton = (props) => {
  return (
    <div
      className={`${props.className} rounded-md bg-gray-300 animate-pulse`}
    ></div>
  );
};

export default Skeleton;

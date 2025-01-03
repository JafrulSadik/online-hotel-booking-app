const Field = ({ children, error }) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
      {!!error && (
        <div role="alert" className="text-red-400 text-left">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Field;

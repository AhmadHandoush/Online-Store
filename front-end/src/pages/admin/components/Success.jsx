function Success({ message }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center left-60">
      <div className="px-2 m-auto bg-green-500 flex justify-center items-center rounded h-12 shadow-lg">
        <p className="text-white font-bold">{message}</p>
      </div>
    </div>
  );
}

export default Success;

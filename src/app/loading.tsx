function loading() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#000"
          className="motion-reduce:hidden animate-spin text-5xl font-bold text-pink-600"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke-width="10"
            stroke-dasharray="210 70"
            stroke-linecap="round"
          ></circle>
        </svg>
        <div className="mt-3 text-4xl font-bold">Loading</div>
        <div className="text-xl font-medium">Please Wait...</div>
      </div>
    </>
  );
}

export default loading;

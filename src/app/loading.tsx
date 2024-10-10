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
          aria-labelledby="loadingTitle"
          role="img"
        >
          <title id="loadingTitle">Loading animation</title>
          <circle
            cx="50"
            cy="50"
            r="45"
            strokeWidth="10"
            strokeDasharray="210 70"
            strokeLinecap="round"
          ></circle>
        </svg>
        <div className="mt-3 text-4xl font-bold">Loading</div>
        <div className="text-xl font-medium">Please Wait...</div>
      </div>
    </>
  );
}

export default loading;
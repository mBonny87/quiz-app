export const InputSearch = () => {
  return (
    <div className="flex h-14 w-60 min-w-36 gap-3 rounded-lg border border-solid border-slate-400 bg-white p-3">
      <span className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M14.3534 13.6467L11.7927 11.086C12.6487 10.0707 13.1667 8.762 13.1667 7.33333C13.1667 4.11667 10.55 1.5 7.33333 1.5C4.11667 1.5 1.5 4.11667 1.5 7.33333C1.5 10.55 4.11667 13.1667 7.33333 13.1667C8.762 13.1667 10.0707 12.6487 11.086 11.7927L13.6466 14.3533C13.744 14.4507 13.872 14.5 14 14.5C14.128 14.5 14.256 14.4513 14.3534 14.3533C14.5487 14.1587 14.5487 13.842 14.3534 13.6467ZM2.5 7.33333C2.5 4.668 4.668 2.5 7.33333 2.5C9.99867 2.5 12.1667 4.668 12.1667 7.33333C12.1667 9.99867 9.99867 12.1667 7.33333 12.1667C4.668 12.1667 2.5 9.99867 2.5 7.33333Z"
            fill="#94A3B8"
          />
        </svg>
      </span>
      <input
        type="text"
        id="website-admin"
        className="self-end focus-visible:outline-none"
        placeholder="Search..."
      ></input>
    </div>
  );
};

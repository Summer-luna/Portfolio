import { data } from "../../public/data/data";

export const Email = () => {
  return (
    <div className="flex flex-col items-center relative font-mono text-base tracking-wide after:mt-5 after:content[''] after:w-[1px] after:h-24 after:bg-light-slate after:block after:mx-auto">
      <a
        href={`mailto:${data.email}`}
        className="mt-5 p-2 vertical-text text-xs tracking-widest hover:-translate-y-1 transition-transform hover:text-green"
      >
        {data.email}
      </a>
    </div>
  );
};

import { Icon } from "./icon";
import { data } from "../../public/data/data";

export const Social = () => {
  return (
    <ul className="flex flex-col items-center after:content[''] after:w-[1px] after:h-24 after:bg-light-slate after:block after:mx-auto">
      {data &&
        data?.social.map(({ name, url }, index) => {
          return (
            <li key={index} className="last-of-type:mb-5 ">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="p-2 block hover:-translate-y-1 focus:text-green w-full  hover:text-green focus:text-green transition-transform"
              >
                <Icon name={name} />
              </a>
            </li>
          );
        })}
    </ul>
  );
};

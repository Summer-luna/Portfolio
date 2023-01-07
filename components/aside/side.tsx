import { Social } from "./socail";
import { Email } from "./email";

export const Side = (props: { orientation: string }) => {
  const sideStyle =
    props.orientation == "left"
      ? "left-10 right-auto"
      : "right-10 left-auto";

  return (
    <div
      className={`fixed hidden w-10 bottom-0 left-10 z-10 md:block opacity-0 ${sideStyle} animate-fadeDown`}
      style={{animationDelay: `2000ms` }}
    >
      {props.orientation === "left" ? <Social /> : <Email />}
    </div>
  );
};

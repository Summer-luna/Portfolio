import { Header } from "./header";
import { ScriptProps } from "next/script";
import { Side } from "../aside/side";
import {Footer} from "./footer";

export const Layout = ({ children }: ScriptProps) => {
  return (
    <div id='root' className="grid-cols-1">
      <div className="grid grid-cols-1 min-h-full">
          <Header />
          <Side orientation="left" />
          <Side orientation="right" />
          <main>{children}</main>
          <Footer />
      </div>
    </div>
  );
};

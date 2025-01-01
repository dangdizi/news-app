import type { mainProps } from "@/types/main";
import { LeftColumn } from "./LeftColumn";

export const Main = ({ children }: mainProps) => {
  return (
    <main className="py-10 w-full flex items-center justify-center bg-gray-100">
      <div className="w-11/12 grid grid-cols-10 gap-4">
              <div className="col-span-2">
                  <LeftColumn/>
              </div>
        <div className="col-span-8 shadow rounded p-4 bg-white">{children}</div>
      </div>
    </main>
  );
};

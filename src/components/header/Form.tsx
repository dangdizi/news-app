"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

export const Form = () => {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // chặn load lại trang

    // lấy giá trị từ form khi submit
    const params = new FormData(ref.current as HTMLFormElement);
    
    const keywords = params.get("keywords");
    
    if (keywords) {

      router.push(`/search/${keywords}`);
    }
    
  };
  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className="shadow-lg w-3/5 h-10 flex items-center"
    >
      <input
        name="keywords"
        placeholder="Enter your keyword..."
        className="flex-1 max-w-full w-full h-11 shadow-none outline-none px-4 duration-150 focus:shadow-white"
      />
      <button
        className="px-8 h-11 bg-blue-600 text-white duration-150 hover:bg-blue- rounded-e"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

import Link from "next/link";

export const LeftColumn = () => {
  return (
    <nav className="bg-white rounded shadow p-4 sticky top-0">
      <label className="block text-xl font-semibold uppercase text-gray-500">
        Categories
      </label>
      <ul className="mt-4 text-gray-500 w-full">
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            AI in Healthcare
          </Link>
        </li>
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            AI Algorithms
          </Link>
        </li>
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            MRI Basics
          </Link>
        </li>
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            Tumor Detection
          </Link>
        </li>
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            Patient Stories
          </Link>
        </li>
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            Medical Innovations
          </Link>
        </li>
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            Clinical Trials
          </Link>
        </li>
      </ul>

      <label className="block text-xl font-semibold uppercase text-gray-500 mt-6">
        MY MENU
      </label>
      <ul className="mt-4 text-gray-500 w-full">
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            Home Page
          </Link>
        </li>
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            Recent post
          </Link>
        </li>
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            Ethics & Privacy
          </Link>
        </li>
        <li>
          <Link
            className="leading-10 block w-full h-full duration-150 hover:bg-gray-200 px-2 border-l-2 hover:pl-4"
            href={"#"}
          >
            FAQs
          </Link>
        </li>
      </ul>
    </nav>
  );
};

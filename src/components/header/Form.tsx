export const Form = () => {
    return (
        <form className="shadow-lg w-3/5 h-10 flex items-center">
            <input placeholder="Enter your keyword..." className="flex-1 max-w-full w-full h-11 shadow-none outline-none px-4 duration-150 focus:shadow-white" />
            <button className="px-8 h-11 bg-blue-600 text-white duration-150 hover:bg-blue- rounded-e" type="submit">Search</button>
        </form>
    )
}

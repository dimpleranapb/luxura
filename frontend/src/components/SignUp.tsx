
export default function signUp() {
  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">Login</p>
        <hr  className=" border-none h-[1.5px] w-8 bg-gray-800"/>
      </div>
      <input type="text"  className="w-full px-3 py-2 border border-gray-800" placeholder="Name" required />
      <input type="email"  className="w-full px-3 py-2 border border-gray-800" placeholder="Email" required />
      <input type="password"  className="w-full px-3 py-2 border border-gray-800" placeholder="password" required />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        <p className="cursor-pointer">Create an account</p>

      </div>
      <button className="bg-black text-white py-2  px-8 mt-2">Sign Up</button>

    </form>
  );
}

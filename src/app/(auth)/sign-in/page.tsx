'use client'

export default function SignInPage(){
    const handleSignIn = () => {

    }


    return (
        <section className="container mx-auto mt-10 flex justify-center px-4">
            <div className="w-full max-w-md">

                <h1 className="mb-8 text-center text-2xl font-bold">
                    সাইন আপ
                </h1>

                <form
                    onSubmit={handleSignIn}
                    className="flex flex-col gap-5"
                >
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            ইমেইল
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                            title="সঠিক ইমেইল দিন"
                            className="rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-red-700 focus:ring-1 focus:ring-red-700"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium">
                            পাসওয়ার্ড
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            required
                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                            title="পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং অন্তত ১টি letter ও ১টি number থাকতে হবে"
                            className="rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-red-700 focus:ring-1 focus:ring-red-700"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-2 rounded-md bg-red-700 py-2.5 font-medium text-white transition hover:bg-red-800"
                    >
                        সাইন আপ
                    </button>

                </form>
            </div>
        </section>
    )
}
'use client'

import { signUp } from "@/lib/auth-client";

import { useRouter } from "next/navigation";

interface SignUpDataType {
    name: string;
    email: string;
    password: string;
    callbackURL: string;
    image: string;

}

export default function SignUp() {
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const getFormData = new FormData(e.currentTarget);
        const getUserData = Object.fromEntries(getFormData.entries()) as unknown as SignUpDataType;


        const { data, error } = await signUp.email({
            name: getUserData.name,
            email: getUserData.email,
            password: getUserData.password,
            image: getUserData.image,
            callbackURL: "/"
        })

        if (error) {
            console.log("Signup error:", error);
            return;
        }

        router.push("/");
    }

    return (

        <section className="container mx-auto mt-10 flex justify-center px-4">
            
            <div className="w-full max-w-md">
                <h1 className="mb-8 text-center text-2xl font-bold">সাইন আপ</h1>
                <form onSubmit={handleSignUp} className="flex flex-col gap-5">

                
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium">নাম</label>
                        <input id="name" type="text" name="name" required pattern="^[A-Za-z\u0980-\u09FF ]{2,50}$" title="নাম ২ থেকে ৫০ অক্ষরের মধ্যে হতে হবে" className="rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"/>
                    </div>

            
                    <div className="flex flex-col gap-2">
                        <label htmlFor="image" className="text-sm font-medium">Image URL</label>
                        <input id="image" type="url" name="image" placeholder="https://example.com/image.jpg" className="rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500"/>
                    </div>

                
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
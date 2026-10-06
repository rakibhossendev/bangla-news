'use client'

import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

interface SignInDataType {
    email: string;
    password: string;
    callbackURL: string
}

export default function SignInPage() {
    const router = useRouter();
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const getUserData = Object.fromEntries(formData.entries()) as unknown as SignInDataType;

        const { error } = await signIn.email({
            email: getUserData.email,
            password: getUserData.password,
            callbackURL: "/",
        })

        if (error) {
            alert(error.message);
            return
        }

        router.push("/");


    }

    const handleGoogleSignIn = async () => {
        const response = await signIn.social({
            provider: "google"
        })
    }
    const handleGithubSignIn = async () => {
        const response = await signIn.social({
            provider: "github",
        })
    }

    return (
        <section className="container mx-auto mt-10 flex justify-center px-4">

            <div className="w-full max-w-md">
                <h1 className="mb-8 text-center text-2xl font-bold">সাইন আপ</h1>
                <form onSubmit={handleSignIn} className="flex flex-col gap-5">

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium">ইমেইল</label>
                        <input id="email" type="email" name="email" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" title="সঠিক ইমেইল দিন" className="rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-red-700 focus:ring-1 focus:ring-red-700" />
                    </div>


                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium">পাসওয়ার্ড</label>
                        <input id="password" type="password" name="password" required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" title="পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং অন্তত ১টি letter ও ১টি number থাকতে হবে" className="rounded-md border border-gray-300 px-3 py-2 outline-none transition focus:border-red-700 focus:ring-1 focus:ring-red-700" />
                    </div>


                    <button type="submit" className="mt-2 rounded-md bg-red-700 py-2.5 font-medium text-white transition hover:bg-red-800">সাইন আপ</button>
                </form>

               
<div className="mt-5 flex flex-col items-center gap-4">

    {/* Or divider */}
    <div className="flex w-full items-center gap-3">
        <div className="h-px flex-1 bg-red-600" />

        <p className="text-sm font-medium text-red-600">
            Or
        </p>

        <div className="h-px flex-1 bg-red-600" />
    </div>

    {/* Social buttons */}
    <div className="flex items-center gap-3">
        <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-red-200 text-red-600 transition-all duration-200 hover:scale-105 hover:border-red-600 hover:bg-red-50"
        >
            <FaGoogle className="text-lg" />
        </button>

        <button
            onClick={handleGithubSignIn}
            type="button"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-red-200 text-red-500 transition-all duration-200 hover:scale-105 hover:border-red-500 hover:bg-red-50"
        >
            <FaGithub className="text-lg" />
        </button>
    </div>

</div>


            </div>
        </section>
    )
}
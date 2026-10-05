import { createAuthClient } from "better-auth/react";

export const authClinet = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL
})

export const {useSession,signIn,signUp,signOut} = authClinet
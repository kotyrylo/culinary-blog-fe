import 'server-only'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from 'react';

export const verifySession = cache(async () => {
    const cookie = (await cookies()).get('session')?.value;
    

    if (!cookie) {
        console.error('No cookie!');
        redirect('/');
    }

    return cookie
})
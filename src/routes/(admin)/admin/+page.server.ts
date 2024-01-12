import { db } from '$lib/server/config.ts';
import type { RequestEvent, Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }: RequestEvent): Promise<Object> {
    //const user = await db.getUserFromSession(cookies.get('sessionid'));
    //return { user };
    console.log(cookies.getAll());

    var correctCook = false;

    // Redirect to active session
    if (correctCook) {
        throw redirect(302, '/dashboard');
    }

    // Return the page
    return {
        data: "daatasss"
    };
}

/** @type {import('./$types').Actions} */
export const actions: Actions = {
    login: async ({ request }: RequestEvent) => {
        let form = await request.formData();
        let email: FormDataEntryValue | null = form.get("email");
        let password: FormDataEntryValue | null = form.get("password");

        // Wrong data
        if (email == null || password == null) {

            return {
                success: false,
                type: "wrong login",
                message: "stay here",
            }
        }

        // Try login
        console.log(email);
        console.log(password);

        return {
            success: true,
            type: "Correct login",
            message: "Direct to dashboard",
        }
    },

    reset: async ({ request }: RequestEvent) => {
        let form = await request.formData();
        let password: FormDataEntryValue | null = form.get("password");

        // Wrong data
        if (password == null) {

            return {
                success: false,
                type: "wrong login",
                message: "stay here",
            }
        }

        // Try reset
        console.log(password);

        return {
            success: true,
            type: "Correct login",
            message: "Direct to dashboard",
        }
    }
}
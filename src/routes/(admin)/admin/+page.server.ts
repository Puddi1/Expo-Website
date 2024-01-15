import { db } from '$lib/server/config.ts';
import type { RequestEvent, Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }: RequestEvent): Promise<Object> {
    //const user = await db.getUserFromSession(cookies.get('sessionid'));
    //return { user };
    //console.log(cookies.getAll());

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
import type { RequestEvent, Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';


export async function load({ cookies }: RequestEvent): Promise<Object> {
    throw redirect(302, '/');
}
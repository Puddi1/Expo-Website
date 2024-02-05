import type { RequestEvent } from "./$types";

type LoginRequestBody = {
    email: String | null,
    password: String,
}

export async function POST({ request }: RequestEvent): Promise<Response> {
    let reqBody = await request.json() as LoginRequestBody;
    let email: String | null = reqBody.email;
    let password: String | null = reqBody.password;

    var response = {
        success: false,
        type: "",
        message: "",
    }

    // Wrong data
    if (email == null || password == null) {
        response.type = "Login Error",
            response.message = "Logn has encountered an error. Retry. If it happens often contact support.";

        return new Response(JSON.stringify(response), {
            status: 400,
        });
    }

    // Login

    // Set cookie on success
    response = {
        success: true,
        type: "Login Success",
        message: "Redirecting to the dashboard",
    }
    return new Response(JSON.stringify(response), {
        status: 200,
    });
}
import type { RequestEvent } from "./$types";

type ResetRequestBody = {
    password: String,
}

export async function POST({ request }: RequestEvent): Promise<Response> {
    let reqBody = await request.json() as ResetRequestBody;
    let password: String | null = reqBody.password;

    var response = {
        success: false,
        type: "",
        message: "",
    }

    // Wrong data
    if (password == null) {
        response.type = "Reset Error";
        response.message = "stay here";

        return new Response(JSON.stringify(response), {
            status: 400,
        });
    }

    // Reset

    response = {
        success: true,
        type: "Reset Success",
        message: "Reset your password from you email and retry to log in",
    }
    return new Response(JSON.stringify(response), {
        status: 200,
    });
}
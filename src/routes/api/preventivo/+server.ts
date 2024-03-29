import { SMTP_SERVICE, SMTP_USERNAME, SMTP_PASSWORD, SMTP_PORT, SMTP_DESTINATION } from '$env/static/private';
import nodemailer from "nodemailer";

var trs = nodemailer.createTransport({
    service: SMTP_SERVICE,
    auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD,
    },
    secure: true,
    port: Number(SMTP_PORT),
});

export async function POST(req: any) {
    const reqParams = await req.request.json();

    let mailOptions = {
        to: SMTP_DESTINATION,
        subject:
            "Title: " + reqParams.title + " - " + "Email: " + reqParams.email,
        text: reqParams.comment,
    };

    const promiseSMTP = new Promise(async (resolve, reject) => {
        trs.sendMail(mailOptions, (err, info) => {
            if (err) {
                reject(err);
            }

            resolve(info);
        });
    });

    return await promiseSMTP
        .then((info) => {
            return new Response(JSON.stringify(info), {
                status: 200,
            });
        })
        .catch((err) => {
            return new Response(JSON.stringify({ statusText: err }), {
                status: 200,
            });
        });
}

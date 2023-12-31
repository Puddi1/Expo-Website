import "dotenv/config";
import nodemailer from "nodemailer";

var trs = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
    secure: true,
    port: Number(process.env.SMTP_PORT),
});

export async function POST(req: any) {
    const reqParams = await req.request.json();

    let mailOptions = {
        to: process.env.SMTP_DESTINATION,
        subject:
            "Title: " + reqParams.title + " - " + "Email: " + reqParams.email,
        text: reqParams.comment,
    };

    const promise = new Promise(async (resolve, reject) => {
        trs.sendMail(mailOptions, (err, info) => {
            if (err) {
                reject(err);
            }

            resolve(info);
        });
    });

    return await promise
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

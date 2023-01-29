import WebPush from "web-push";
import { FastifyInstance } from "fastify";
import { z } from "zod";

const publicKey =
  "BDuczYd1LKJ6k49Voga2ClwfYBSGnrh4jOkB-2q2jtNQZRTRVQyDzlcpoUCbj6GXbXK02VhS0qOFWhe2JlGykOk";
const privateKey = "ipaYTglZFyr1OM0lVNUy1o1wArmzwAaLh8EaLFQWVGg";

WebPush.setVapidDetails("http://localhost:3333", publicKey, privateKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get("/push/public_key", () => {
    return { publicKey };
  });

  app.post("/push/register", (request, reply) => {
    console.log(request.body);
    return reply.status(201).send();
  });

  app.post("/push/send", async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        }),
      }),
    });
    const { subscription } = sendPushBody.parse(request.body);

    setTimeout(() => {
      WebPush.sendNotification(subscription, "Hellow do bakend");
    }, 5000);

    return reply.status(201).send();
  });
}

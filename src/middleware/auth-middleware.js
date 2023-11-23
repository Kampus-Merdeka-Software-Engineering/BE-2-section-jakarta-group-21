import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export const authentication = async (req, res, next) => {
    const tokenHeader = req.get('Authorization');

    if (!tokenHeader) {
        res.status(401).json({
            errors: "Unauthorized"
        }).end();
    } else {
        const [bearer, token] = tokenHeader.split(' ');

        if (bearer !== 'Bearer') {
            res.status(401).json({
                errors: "Unauthorized"
            }).end();
        } else {

            const user = await prismaClient.user.findFirst({
                where: {
                    token: token
                }
            });
            if (!user) {
                res.status(401).json({
                    errors: "Unauthorized"
                }).end();
            } else {
                req.user = user;
                next();
            }
        }
    }
}
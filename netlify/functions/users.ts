import {Handler} from '@netlify/functions';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export const handler: Handler = async (event, context) => {
    console.log('Function `users` invoked');
    const users = await client.users.findMany();

    return {
        statusCode: 200,
        body: JSON.stringify(users),
    };
}

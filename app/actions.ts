// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
    const dbURL = process.env.DATABASE_URL;
    if (!dbURL) {
        throw new Error("DATABASE_URL is not set");
    } else {

        const postgresql = neon(process.env.DATABASE_URL!);
        const data = await postgresql`...`;
        return data;
    }
}
import { User } from "@/models/user-model";
import { dbConnect } from "@/services/dbConnection";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) =>  {
    await dbConnect()
    const {fname, lname, email, password} = await request.json()
    try {
        const hashedPassword = await bcryptjs.hash(password, 10);

        const userExist = await User.findOne({email});

        if(userExist){
            return new NextResponse(JSON.stringify({
                message : "User already exist with this email."
            }), {status : 400})
        }

        const newUser ={
            fname,
            lname,
            name : fname + " " + lname,
            email,
            password: hashedPassword,
            provider : "credentials"
        }

        await User.create(newUser);

        return new NextResponse(JSON.stringify({
            message : "User created successfully."
        }), {status : 201})
    } catch (err) {
        return new NextResponse(JSON.stringify({
            message : err.message
        }), {status : 500})
    }
}

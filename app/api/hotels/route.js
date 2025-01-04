import { Hotel } from "@/models/hotel-model";
import { User } from "@/models/user-model";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (request) =>  {
    const {email, name, location, images, price, rooms, bedrooms, beds, guests, description, path} = await request.json()
    
    try {

        const user = await User.findOne({email});

        if(!user){
            return new NextResponse(JSON.stringify({
                message : "User not found."
            }), {status : 404})
        }

        const userId = user._id.toString();


        const newHotel = {
            name,
            location,
            images,
            price,
            rooms,
            bedrooms,
            beds,
            guests,
            description,
            owner : userId
        }

        await Hotel.create(newHotel);

        revalidatePath(path)

        return new NextResponse(JSON.stringify({
            message : "Hotel created successfully."
        }), {status : 201})
    } catch (err) {
        return new NextResponse(JSON.stringify({
            message : err.message
        }), {status : 500})
    }
}

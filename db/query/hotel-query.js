import { Hotel } from "@/models/hotel-model"
import { dbConnect } from "@/services/dbConnection"

export const updateHotel = async (hotelId, updateData) => {
    await dbConnect()
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(hotelId, {...updateData})
        return updateHotel
    } catch (error) {
        throw new Error("Something went wrong while creating booking;")
    }
}

export const getHotels = async (pageNum, searchTerm, limitItem, sortType) => {

    const sort = sortType === "asc" ? 1 : -1;
    const limit = +limitItem || 8;
    const page = +pageNum || 1;
    const skip = (+page - 1) * +limit;
    const search = searchTerm || "";
    try {
        await dbConnect()
        const hotels = await Hotel.find({
            rooms : {$gt : 0}, 
            name : {$regex : search, $options : "i"}
        }).skip(skip).limit(limit).sort({createdAt : sort})

        const total = await Hotel.countDocuments({rooms : {$gt : 0}});
        const nextPage = page + 1 > Math.ceil(total / limit) ? null : page + 1;
        const previousPage = page - 1 < 1 ? null : page - 1;
        const currentPage = page;


        return {
            hotels,
            pagination : {
                totalPages : Math.ceil(total / limit),
                nextPage,
                previousPage,
                currentPage
            }
        }
    } catch (error) {
        throw new Error("Something went wrong while fetching hotels");     
    }
}


export const updateHotelByHotelId = async (hotelId, hotelData) => {
    await dbConnect()
    try {
        const hotel =await Hotel.findByIdAndUpdate(hotelId, {
            $set : {
                ...hotelData
            }
        });

        return hotel;
    }catch (err){
        throw new Error(err.message)
    }
}
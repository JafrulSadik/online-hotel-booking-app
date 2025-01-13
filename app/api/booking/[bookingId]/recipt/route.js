import PaymentReciptPDF from "@/components/pdf-generation/PaymentReciptPDF";
import { getBookingById } from "@/db/query";
import { renderToStream } from "@react-pdf/renderer";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) =>  {
    const {bookingId} = params
    try {
        const bookingDetails = await getBookingById(bookingId);

        if(bookingDetails === null) {
            return new NextResponse(JSON.stringify({
                message : "Booking not found"
            }, {status : 404}))
        }


        const pdfBytes = await renderToStream(<PaymentReciptPDF booking={bookingDetails}/>);

        return new Response(pdfBytes, {
            headers: { "content-type": "application/pdf" },
          });
    } catch (err) {
        return new NextResponse(JSON.stringify({
            message : err.message
        }), {status : 500})
    }
}

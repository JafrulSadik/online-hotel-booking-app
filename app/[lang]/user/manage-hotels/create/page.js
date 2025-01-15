
import CreateHotel from "@/components/create-hotel/CreateHotel";
import { auth } from "@/lib/auth/auth";

const CreateHotelPage = async ({params}) => {
  const session = await auth();
  const {lang} = params


  return (
    <div className="bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-8 relative">
          <CreateHotel session={session} lang={lang}/>
      </div>
    </div>
  )
}

export default CreateHotelPage

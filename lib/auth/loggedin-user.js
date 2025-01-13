import "server-only";

import { getUserByEmail } from "@/db/query";
import { auth } from "@/lib/auth/auth";


export async function getLoggedInUser() {
  const session = await auth();

    if (!session?.user) {
        return null
    } 
       
    const user = await getUserByEmail(session?.user?.email);
    
    if(!user){
        return null
    }

    return user
}
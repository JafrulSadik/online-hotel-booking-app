"use server"

import { redirect } from "next/navigation";

export const serverRedirect = (url) => {
    return redirect(url)
};
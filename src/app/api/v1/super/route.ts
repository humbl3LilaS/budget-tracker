import {NextResponse} from "next/server";

export const GET = (req: Request, res: Response) => {
    return NextResponse.json({hell: false})
}
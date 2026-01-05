import { verifySession } from "@/lib/dal";

export default async function Header () {
    const session = await verifySession();


    console.log(session)

    return (
        <header>
            <h1>Header</h1>
        </header>
    )
}
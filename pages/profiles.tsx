import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if(!session) {
        return {
            redirect: {
                destination: '/auth',
                permanemt: false,

            }
        }
    }
    return {
        props :{}
    }
}

const Profiles = ()=>{
    return (
        <div>
            <p className="text-white text-4xl">Profiles</p>
        </div>
    )
};

export default Profiles;

import { NextPageContext } from 'next';
import {getSession, signOut} from 'next-auth/react'
import useCurrentUser from '@/hooks/useCurrentUser';
import { redirect } from 'next/dist/server/api-utils';
import Navbar from '@/Components/Navbar';
import Billboard from '@/Components/Billboard';



export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if (!session) {
    return{
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}
export default function Home() {

  return (
    <>
     <Navbar />
     <Billboard />
    </>
  );
}

import { useSession } from "next-auth/react";
import Head from "next/head";
import Login from "@/components/Login";
export default function Home() {
  const { data: session } = useSession();

  if (!session) return <Login />;
  return (
    <>
      <Head>
        <title>Social</title>
      </Head>
      <h1 className="text-lg text-teal-300">testing tailwind</h1>
    </>
  );
}

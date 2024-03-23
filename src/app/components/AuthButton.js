'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
export default function AuthButton() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <div className="text-lg font-bold text-red-400">
        SIGN IN USING 3RD PARTY
      </div>
      <br />
      <button onClick={() => signIn()} className="bg-blue-500 text-white">
        Sign in
      </button>
    </>
  );
}

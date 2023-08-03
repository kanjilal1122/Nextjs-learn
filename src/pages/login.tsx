import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
const useUser = () => ({ user: "null", loading: "false" });
function login() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(()=>{
    if(!(user || loading)){
        router.push('/login')
    }
  },[user , loading])

  return <p>Redirecting......</p>;
}

export default login;

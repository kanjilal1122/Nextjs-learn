import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

function Page() {
  const router = useRouter();
  //console.log(router);

  return (
    <>
      <div>Page{router.query.slug}</div>
      <Button
        variant="contained"
        size="small"
        onClick={() => router.push("/blog")}
      >
        Click me for blog
      </Button>
    </>
  );
}

export default Page;

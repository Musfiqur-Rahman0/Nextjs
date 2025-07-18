"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import React from "react";

const page = () => {
  const router = useRouter();

  const handleSeeBlog = () => {
    router.push("/blog/teams");
  };

  return (
    <div>
      <p>Blog page here</p>
      <Button onClick={handleSeeBlog}>See blog </Button>
    </div>
  );
};

export default page;

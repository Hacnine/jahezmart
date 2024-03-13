import Link from "next/link";
import React from "react";

const Archived = () => {
  return (
    <div>
      Archived In Notification Folder.
      <Link href={"/account/dashboard"}>Notification.</Link>
    </div>
  );
};

export default Archived;

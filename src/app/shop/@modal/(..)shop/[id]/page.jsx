"use client";

import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Scrollbars from "react-custom-scrollbars-2";
import { useRouter } from "next/navigation";
import QuickView from "../../../../../components/common/ui/QuickView";

const Page = ({ params }) => {
  const [modalOpen, setModalOpen] = useState(true);
  const router = useRouter();
  const decodedString = decodeURIComponent(params.id);
  const keyValuePairs = decodedString.split("&");
  let productId;

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    if (key === "id") {
      productId = value;
      break;
    }
  }

  const handleClose = () =>{
    setModalOpen(false)
    router.back();
  }
  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="bg-white center md:p-10 p-4 center rounded-tr-[33px] rounded-bl-[33px] rounded"
        style={{ width: "90%", height: "90%" }}
      >
        <Scrollbars style={{ width: "100%", height: "100%" }}>
          <QuickView id={productId} modal={true} setModalOpen={setModalOpen}/>
        </Scrollbars>
      </div>
   </Modal>
  );
};

export default Page;

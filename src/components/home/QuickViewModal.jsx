"use client";
import React, { useEffect, useState } from "react";
import Preview from "@mui/icons-material/Preview";
import Modal from "@mui/material/Modal";
import { RiDeleteBack2Fill } from "react-icons/ri";

import QuickView from "../common/ui/QuickView";
import Scrollbars from "react-custom-scrollbars-2";
import { usePathname, useRouter } from "next/navigation";

const QuickViewModal = ({ preview, id, name }) => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  let pathName = usePathname();

  const [storePathName, setStorePathName] = useState([]);

  const addName = () => {
    setStorePathName((prevPreviousNames) => [pathName, ...prevPreviousNames]);
  };

  useEffect(() => {
    addName();
  }, [pathName]);
  const firstPathName = storePathName.slice(-1);

  const handlePreview = () => {
    setModalOpen(!modalOpen);
    // console.log("lastPathName:", lastPathName);
    const queryString = `/id=${id}&&name=${encodeURIComponent(name)}`;
    const newUrl = `/shop/product${queryString}`;
    window.history.replaceState(null, "", newUrl);

    if (modalOpen) {
      window.history.replaceState(null, "", firstPathName);
    }
  };

  const updateQuery = () => {
    console.log(pathName)
    // setModalOpen(true)
    if (pathName === "/shop") {
      const queryString = `/id=${id}&&name=${name}`;
      router.push(`/shop${queryString}`);
    } else {
      handlePreview();
    }
  };
  return (
    <>
      {preview ? (
        <button
          className=" opacity-0   group-hover:opacity-100  z-10 group-hover:w-fit group-hover:px-2 w-1  bg-orangeRed/70 hover:bg-orangeRed py-1 font-semibold text-white text-xs transition-color duration-300 rounded-tl-full rounded-tr-full"
          onClick={handlePreview}
        >
          <Preview />
        </button>
      ) : (
        <button
          className="w-full opacity-0 bg-orange-500  group-hover:opacity-100 absolute bottom-0 py-2 font-semibold text-white text-xs transition-color duration-300 rounded-bl-3xl rounded-tr-3xl "
          onClick={updateQuery}
        >
          Quick View
        </button>
      )}
      <Modal
        open={modalOpen}
        onClose={handlePreview}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <>
          
          <div
            className="bg-white center md:p-10 p-4 rounded-tr-[33px] rounded-bl-[33px] rounded-tl  relative"
            style={{ width: "90%", height: "90%" }}
          >
            <button onClick={handlePreview} className="absolute left-0 top-0">
              <RiDeleteBack2Fill className=" text-sm rounded-br-2xl w-9 h-7 p-1 bg-colorRed text-white" />
            </button>
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              <QuickView id={id} modal={true} setModalOpen={setModalOpen}/>
            </Scrollbars>
          </div>
        </>
      </Modal>
    </>
  );
};

export default QuickViewModal;

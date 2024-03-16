import { FaCircleCheck } from "react-icons/fa6";
export default function ThankYou() {


    return (
        <main>
            <h1 className="text-xl grid place-content-center min-h-screen center flex-col">
                <FaCircleCheck className=" text-[60px] text-green-600"/>
                Thank you for your feedback!
            </h1>
        </main>
    )
}
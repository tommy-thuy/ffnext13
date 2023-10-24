import { Metadata } from "next";

import RegisterForm from "./RegisterForm";


export const metadata: Metadata = {
  title: "Movie Friends | Register",
};

export default Register;


function Register() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <RegisterForm />
    </div>
  );
}

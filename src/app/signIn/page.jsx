"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const SignIn = () => {
  const [loading,setLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
 try{
   const {email,password} =  Object.fromEntries(
      new FormData(e.target)
    )

    const {data,error} = await authClient.signIn.email({
      email,
      password,
    })
    if(error){
      alert(error.message);
      return;
    }
    alert("Login Successful")
    router.push("/")
}
catch(err){
  console.error(err)
  alert("Something went wrong")
}
finally{
  setLoading(false)
}
   
    
  }

  return (
    <div className="flex items-center justify-center bg-black/50 min-h-[60vh] p-10 md:p-20">
      <Form className="w-full max-w-110 bg-[#30302E] p-6 md:p-12 rounded-2xl" onSubmit={handleSubmit}>
        <Fieldset>
          <Fieldset.Legend className="text-white text-2xl text-center mb-2">
            <TbLayoutDashboardFilled />
          </Fieldset.Legend>
          <Description className="text-center text-white text-2xl ">
           Welcome Back 
            <p className="text-sm text-white/70 pt-1">Login to your TilesGallery account</p>    
          </Description>
  
          <FieldGroup className="">
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-white/70">Email Address</Label>
              <Input
                className={
                  "bg-black/50 border border-gray-700 text-white rounded-lg"
                }
                placeholder="Enter your email"
              />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="text-white/70">Password</Label>
              <Input
                className={
                  "bg-black/50 border border-gray-700 text-white rounded-lg"
                }
                placeholder="Enter your password"
              />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button
              variant="outline"
              className={"w-full text-white rounded-xl hover:bg-black/50"}
              type="submit"
              isDisabled={loading}
            >
              {loading ? "Logging in..." :"Login to Account"}  
            </Button>
          </Fieldset.Actions>
        </Fieldset>
        <div className="mt-5 text-center space-y-2">
          <p className="text-center text-gray-400 text-sm">— or —</p>
          <Button
            variant="outline"
            className={"w-full text-white rounded-xl hover:bg-black/50"}
            type="submit"
          >
            <FcGoogle />
            Continue with Google
          </Button>
          <span className="text-center text-sm text-gray-300">
            Don't have an account?{" "}
            <Link
              className="text-primary border-b border-primary"
              href={"signUp"}
            >
              Register here
            </Link>
          </span>
        </div>
      </Form>
    </div>
  );
};
export default SignIn;

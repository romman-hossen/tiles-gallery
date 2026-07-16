"use client";
import { useRouter } from "next/navigation";

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
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const SignUp = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    // console.log(obj,"this is form data ")
    const { data, error } = await authClient.signUp.email({
      email: obj.email,
      password: obj.password,
      name: obj.name,
      image: obj.photoUrl,
    });
    if (error) {
      alert(error.message || "Signup failed");
      return;
    }
    if (data) {
      showToast.success("SignUp sucessfull", {
        duration: 4000,
        progress: true,
        position: "top-center",
        transition: "bounceIn",
        icon: "",
        sound: true,
      });
      router.push("/signIn");
    }
  };
  const handleGoogleLogin = async () =>{
    await authClient.signIn.social({
    provider: "google",
  });
  }
  return (
    <div className="flex items-center justify-center bg-black/50 min-h-[60vh] p-10 md:p-20">
      <Form
        onSubmit={handleSubmit}
        className="w-full max-w-110 bg-[#30302E] p-6 md:p-10 rounded-2xl"
      >
        <Fieldset>
          <Fieldset.Legend className="text-white text-2xl text-center mb-2">
            <TbLayoutDashboardFilled />
          </Fieldset.Legend>
          <Description className="text-center text-white text-2xl ">
            Create Account
          </Description>
          <FieldGroup className="">
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }

                return null;
              }}
            >
              <Label className="text-white/70">Full Name</Label>
              <Input
                className={
                  "bg-black/50 border border-gray-700 text-white rounded-lg"
                }
                placeholder="Your name"
              />
              <FieldError />
            </TextField>
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
                placeholder="you@example.com"
              />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="photoUrl"
              validate={(value) => {
                if (!value || value.trim().length === 0) {
                  return "Photo URL is required";
                }
                if (value.length < 10) {
                  return "URL is too short";
                }
                return null;
              }}
            >
              <Label className="text-white/70">Photo URL</Label>
              <Input
                className={
                  "bg-black/50 border border-gray-700 text-white rounded-lg"
                }
                placeholder="https://example.com/photo.jpg"
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
            >
              Create Account
            </Button>
          </Fieldset.Actions>
        </Fieldset>
        <div className="mt-5 text-center space-y-2">
          <p className="text-center text-gray-400 text-sm">— or —</p>
          <Button
            variant="outline"
            className={"w-full text-white rounded-xl hover:bg-black/50"}
            type="submit"
            onClick={handleGoogleLogin}
          >
            <FcGoogle />
            Continue with Google
          </Button>
          <span className="text-center text-sm text-gray-300">
            Already have an account?{" "}
            <Link
              className="text-primary border-b border-primary"
              href={"signIn"}
            >
              Login here
            </Link>
          </span>
        </div>
      </Form>
    </div>
  );
};
export default SignUp;

"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { IoIosSunny } from "react-icons/io";
import Image from "next/image";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const rawData = Object.fromEntries(formData.entries());

      const userData = {
        email: rawData.email?.toString().trim(),
        password: rawData.password?.toString(),
      };

      const { data, error } = await authClient.signIn.email(userData);

      if (error) {
        toast.error(error.message || "Login failed!");
      } else {
        toast.success("Account login successfully!");
      }
    } catch (err) {
      toast("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 flex flex-col justify-center items-center bg-linear-to-r from-yellow-100 via-orange-100 to-yellow-200">
      <Container>
        <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-md">

          {/* Header */}
          <div className="mb-10 flex flex-col items-center space-y-3">
            <div className="bg-linear-to-br from-amber-300 via-orange-400 to-sky-400 w-14 h-14 flex items-center justify-center rounded-xl text-white">
              <IoIosSunny className="text-4xl" />
            </div>
            <div className="text-center">
              <h3 className="text-[#0C2842] text-2xl lg:text-3xl font-bold">
                Join SunCart
              </h3>
              <p className="text-[#6B7280] text-sm">
                Create your account in seconds
              </p>
            </div>
          </div>

          {/* Form */}
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

            {/* Email */}
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="you@summer.com" />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField isRequired name="password" type="password">
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Min 8 chars, include uppercase & number
              </Description>
              <FieldError />
            </TextField>

            {/* Actions */}
            <div className="flex flex-col gap-4 mt-2">

              {/* Register Button */}
              <Button
                type="submit"
                isDisabled={loading}
                className="w-full py-3 rounded-2xl font-semibold text-white 
                bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 
                shadow-md hover:opacity-90 active:scale-[0.98] transition-all"
              >
                {loading ? "Login..." : "login"}
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm text-gray-400">OR</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Google Button */}
              <Button
                type="button"
                className="w-full py-3 rounded-2xl font-medium 
                bg-[#f5f1e6] text-gray-700 border border-gray-200 
                hover:bg-[#ece6d8] transition-all flex items-center justify-center gap-2"
              >
                <Image
                  width={20}
                  height={20}
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                  priority
                />
                Continue with Google
              </Button>

              {/* Login */}
              <p className="text-[#6B7280] font-medium text-sm text-center">
                Already have an account?{" "}
                <Link href="/login" className="text-[#fd7933]">
                  Login
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default SignUpPage;
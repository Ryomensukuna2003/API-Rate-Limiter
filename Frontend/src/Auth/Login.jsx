import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../store/authStore";

export default function Login({ className, ...props }) {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      if (response.status === 200) {
        login(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div>
      <Card className="bg-black border-0 w-full">
        <CardHeader>
          <CardTitle className="text-white">Login to your account</CardTitle>
          <CardDescription className="text-white/70">
            Enter your email below to login
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-black">
          <form onSubmit={handleSubmit} className="">
            <div className="grid p-4 border border-white">
              <Label htmlFor="email" className="pb-4 text-white/70">
                username
              </Label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full bg-black text-xl  text-white border-0 outline-none focus:outline-none focus:ring-0 focus:border-none"
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid p-4 border border-white border-t-0 relative">
              <Label htmlFor="password" className="pb-4 text-white/70 ">
                password
              </Label>
              <input
                id="password"
                type="password"
                name="password"
                className="w-full bg-black  text-xl  text-white border-0 outline-none focus:outline-none focus:ring-0 focus:border-none"
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className={"w-full py-10 "}>Submit</Button>
            <div className="flex mt-4 text-center justify-end text-sm text-white">
              Press enter to continue
            </div>
            <div className="flex mt-4 text-center justify-end text-sm text-white">
              Don't have an account? &nbsp;
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

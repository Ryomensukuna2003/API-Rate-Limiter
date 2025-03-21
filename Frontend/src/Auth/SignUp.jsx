import { cn } from "@/lib/utils";
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
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp({ className, ...props }) {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      SetName(value);
    } else if (name === "email") {
      SetEmail(value);
    } else {
      SetPassword(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name,email, password);
    const response = await axios.post(
      "http://localhost:3000/signup",
      {
        name: name,
        email: email,
        password: password,
      }
    );
    console.log(response);
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>SignUp to your account</CardTitle>
          <CardDescription>
            Enter your email below to SignUp to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Bingus"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  SignUp
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

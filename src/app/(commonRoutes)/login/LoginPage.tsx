"use client";

import LoginForm from "@/components/forms/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { User2 } from "lucide-react";

interface BackgroundVariant {
  background: string[];
}

interface BackgroundVariants {
  login: BackgroundVariant;
  register: BackgroundVariant;
}

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Updated to use Tailwind CSS variables that are defined in your global.css
  const backgroundVariants: BackgroundVariants = {
    login: {
      background: [
        "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
        "linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)",
      ],
    },
    register: {
      background: [
        "linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)",
        "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
      ],
    },
  } as const;

  const handleTabChange = (value: string) => {
    if (value === "login" || value === "register") {
      setActiveTab(value);
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background */}
      <motion.div
        key={activeTab}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          background: backgroundVariants[activeTab].background,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />

      {/* Animated Side Illustration */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: activeTab === "login" ? 0 : 100,
          opacity: activeTab === "login" ? 0.2 : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="var(--primary)"
            d="M40.7,-70.4C53.1,-62.5,64.1,-52.8,70.6,-41.2C77.1,-29.6,79.1,-16.1,77.4,-3.7C75.7,8.8,70.3,20.2,63.3,30.4C56.3,40.6,47.8,49.6,37.6,57.4C27.4,65.2,15.6,71.8,1.3,70.6C-13.1,69.4,-29.1,60.4,-43.2,51.1C-57.3,41.8,-69.5,32.2,-75.1,20.1C-80.7,8,-79.6,-6.6,-74.1,-19.4C-68.6,-32.2,-58.6,-43.2,-47.1,-51.4C-35.6,-59.6,-22.6,-65.1,-8.8,-62.8C5.1,-60.5,28.3,-50.4,40.7,-70.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* Login */}
      <motion.div
        className="relative z-10 w-100"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mx-auto mb-5 text-center">
          Login To Manage Your Portfolio
        </h1>

        <Tabs
          defaultValue="login"
          className="w-full"
          value={activeTab}
          onValueChange={handleTabChange}
        >
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          <AnimatePresence mode="sync">
            {activeTab === "login" && (
              <TabsContent key="login-content" value="login" asChild>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <User2 className="h-5 w-5 text-primary" />
                        <CardTitle>Login to Your Account</CardTitle>
                      </div>
                      <CardDescription>
                        Access your portfolio management account to manage your
                        data.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <LoginForm />
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            )}
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;

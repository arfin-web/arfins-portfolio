"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    SentIcon,
    UserIcon,
    Mail01Icon,
    Message01Icon,
    Loading03Icon,
    Tick01Icon,
    AlertCircleIcon
} from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export default function ContactForm() {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                form.current as HTMLFormElement,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
                } as any
            )
            .then(
                () => {
                    setStatus("success");
                    form.current?.reset();
                    setTimeout(() => setStatus("idle"), 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus("error");
                    setErrorMessage("Something went wrong. Please try again.");
                    setTimeout(() => setStatus("idle"), 5000);
                },
            );
    };

    return (
        <div className="relative group/form">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover/form:opacity-100 transition duration-1000 group-hover/form:duration-200" />

            <div className="relative bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2 px-1">
                                <HugeiconsIcon icon={UserIcon} size={16} className="text-primary" />
                                Full Name
                            </label>
                            <Input
                                type="text"
                                name="user_name"
                                placeholder="John Doe"
                                required
                                className="bg-background/50 border-border/40 focus:border-primary/50 transition-all duration-300"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium flex items-center gap-2 px-1">
                                <HugeiconsIcon icon={Mail01Icon} size={16} className="text-primary" />
                                Email Address
                            </label>
                            <Input
                                type="email"
                                name="user_email"
                                placeholder="john@example.com"
                                required
                                className="bg-background/50 border-border/40 focus:border-primary/50 transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-2 px-1">
                            <HugeiconsIcon icon={Message01Icon} size={16} className="text-primary" />
                            Message
                        </label>
                        <Textarea
                            name="message"
                            placeholder="Tell me about your project..."
                            required
                            className="min-h-32 bg-background/50 border-border/40 focus:border-primary/50 transition-all duration-300"
                        />
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        disabled={status === "loading"}
                        className={cn(
                            "w-full rounded-xl transition-all duration-500 overflow-hidden",
                            status === "success" && "bg-emerald-500 hover:bg-emerald-600",
                            status === "error" && "bg-destructive hover:bg-destructive/90"
                        )}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {status === "idle" && (
                                <>
                                    Send Message
                                    <HugeiconsIcon icon={SentIcon} size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                            {status === "loading" && (
                                <>
                                    Sending...
                                    <HugeiconsIcon icon={Loading03Icon} size={18} className="animate-spin" />
                                </>
                            )}
                            {status === "success" && (
                                <>
                                    Message Sent!
                                    <HugeiconsIcon icon={Tick01Icon} size={18} />
                                </>
                            )}
                            {status === "error" && (
                                <>
                                    Failed to Send
                                    <HugeiconsIcon icon={AlertCircleIcon} size={18} />
                                </>
                            )}
                        </span>
                    </Button>

                    {status === "error" && (
                        <p className="text-destructive text-xs text-center animate-in fade-in slide-in-from-top-1">
                            {errorMessage}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};
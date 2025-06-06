"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-cormorant text-2xl font-semibold tracking-tight text-[#93E1D8] ">
            Zunhee
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/gallery">Thư viện</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/private">Cá nhân</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden sm:inline-flex text-[#93E1D8] hover:text-[#FFA69E] font-medium transition-colors"
          >
            Login
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-medium text-[#93E1D8] transition-colors hover:text-[#FFA69E] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#93E1D8] after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto p-4">
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>

            <div className="mt-20 flex flex-col items-center gap-10 text-2xl">
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className="font-cormorant transition-colors text-[#93E1D8] hover:text-[#FFA69E]"
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="font-cormorant transition-colors text-[#93E1D8] hover:text-[#FFA69E]"
              >
                Blog
              </Link>
              <Link
                href="/private"
                onClick={() => setIsOpen(false)}
                className="font-cormorant transition-colors text-[#93E1D8] hover:text-[#FFA69E]"
              >
                Private
              </Link>
              <Button
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-[#93E1D8] text-white hover:bg-[#93E1D8]/90"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
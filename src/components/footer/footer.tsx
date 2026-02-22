"use client";

import React from "react";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center justify-center gap-4 border-t border-border px-4 py-6">
      
      {/* Social Icons Centered */}
      <SocialMediaButtons />

      {/* Copyright */}
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        © {year} {config.author}. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;
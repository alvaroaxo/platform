// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import React from "react";
import { ToasterProvider } from "@/app/providers/ToasterProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemeProvider
      attribute='class'
      defaultTheme='light'
      themes={['dark', 'light']}
      >
        <ToasterProvider />
        { children }
      </NextThemeProvider>
    </NextUIProvider>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "@/app/providers";
import { Footer, Navbar } from '@/components/layout';
import { beVietnamPro as font } from "@/app/styles/fonts";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { ClientOnly } from "@/components/client-only";
import { LoginModal } from "@/components/modals/login-modal";
import { RegisterModal } from "@/components/modals/register-modal";

export const metadata: Metadata = {
  title: "Gifti",
  description: "Gifti",
}

export default async function RootLayout({ children }: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={ font.className }>
        <Providers>
          <ClientOnly>
            <LoginModal />
            <RegisterModal />
          </ClientOnly>
          <Navbar currentUser={ currentUser }/>
          <main className="pb-20">
            { children }
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}

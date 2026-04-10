import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://lantian.pro"),
  title: "蓝天云 - 免费云服务器 | 公益云计算平台",
  description: "蓝天云公益项目提供免费云服务器、游戏服务器托管、虚拟主机等服务。支持Minecraft、饥荒等游戏开服，稳定可靠，快速部署。",
  keywords: [
    "蓝天云",
    "免费云服务器",
    "公益云",
    "游戏服务器",
    "Minecraft服务器",
    "虚拟主机",
    "云计算",
    "服务器托管",
  ],
  alternates: {
    canonical: "https://lantian.pro",
  },
  openGraph: {
    title: "蓝天云 - 蓝天云公益项目",
    description:
      "新一代服务商，提供云产品与更多服务，比如LXC、免费虚拟主机、免费云服务器与专业级云服务",
    url: "https://lantian.pro",
    siteName: "蓝天云 - 蓝天云公益项目",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "蓝天云 - 蓝天云公益项目",
    description: "新一代服务商，提供云产品与更多服务，比如LXC、免费虚拟主机、免费云服务器与专业级云服务",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "蓝天云",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${GeistSans.variable} ${GeistMono.variable} dark`}>
      <body className={`${GeistSans.className} dark`}>{children}</body>
    </html>
  )
}

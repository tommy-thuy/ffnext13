import { cn } from "@/helpers/helper"
import React from "react"

function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("w-[1300px] max-w-full px-4 mx-auto", className)}>
      {children}
    </div>
  )
}

export default Container

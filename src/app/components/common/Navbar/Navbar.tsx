"use client"

import { Broadcast } from "phosphor-react"

export default function Navbar() {

  return (
    <div>
      <div>
        <div className="flex items-center gap-2">
          <Broadcast fontSize={32} />
          <p className="text-lg">Broadcast</p>
        </div>
      </div>
    </div>
  )

}
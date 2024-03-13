import Link from 'next/link'
import React from 'react'

const Notification = () => {
  return (
    <div>
      "Notification"
      <Link className=' text-colorRed line-below' href={"/account/dashboard/archived"}>Archived.</Link>
    </div>
  )
}

export default Notification

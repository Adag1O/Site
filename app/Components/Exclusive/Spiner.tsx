"use client"
import { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    async function getLoader() {
      const { ring2 } = await import('ldrs')
      ring2.register()
    }
    getLoader()
  }, [])
  return <l-ring-2 size="15"stroke="2.3"stroke-length="0.45"bg-opacity="0.1"speed="0.8"color="white" ></l-ring-2>
}
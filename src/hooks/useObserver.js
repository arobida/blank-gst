import { useState, useEffect } from "react"
const useObserver = (target, root) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting !== isIntersecting) {
          setIntersecting(entry.isIntersecting)
        }
      },
      {
        rootMargin: "0px",
        root: root.current,
      }
    )
    if (target.current) {
      observer.observe(target.current)
    }
    return () => {
      observer.unobserve(target.current)
    }
  }, [])

  return isIntersecting
}
export default useObserver

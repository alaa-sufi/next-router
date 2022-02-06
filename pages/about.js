import { useRouter } from "next/router"

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
    // router.replace("/product");
  }
  return (
    <>
      <div>about</div>
      <button onClick={handleClick}>
      place order
    </button>
    </>
  )
}

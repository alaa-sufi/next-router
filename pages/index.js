import Link from "next/Link"
import {useRouter} from "next/router"
export default function Home() {
  const router = useRouter();
  const handleClick=()=>{
    router.push("/product");
  }
  return (<div>
    <h1>home</h1>
    <Link href="/about">
      <a>about</a>
    </Link>
    {" | "}
    <Link href="/product">
      <a>products</a>
    </Link>
    <br/>
    <button onClick={handleClick}>
      place order
    </button>
  </div>)
}

import Link from "next/Link"
export default function Product() {
    return (
      <>
      <h1>product</h1>
      <ul>
        <li><Link href="product/1"><a>product1</a></Link></li>
        <li><Link href="product/2"><a>product2</a></Link></li>
        <li><Link href="product/3" replace><a>product3</a></Link></li>
        <p>when we add replace make history return to first home or new tab</p>
      </ul>
      </>
    )
  }
  
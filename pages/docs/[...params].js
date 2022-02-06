import {useRouter} from "next/router"
export default function Docs() {
    const router = useRouter();
    const {params} = router.query;
    console.log(params)
    return (
        <>
    <div>Docs page </div>
        <p>if i want render docd also rename to 
            [[...params]].js
            </p>
            </>
        )
  }
  
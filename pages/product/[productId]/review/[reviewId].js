import {useRouter} from "next/router"
export default function ReviewDetails() {
    const router = useRouter();
    const {productId , reviewId} = router.query;
    return <div>ReviewDetails {reviewId} for {productId}</div>;
  }
  
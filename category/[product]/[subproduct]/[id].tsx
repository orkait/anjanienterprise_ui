import CategoryLayout from "@/components/CategoryLayout";
import { useRouter } from "next/router";

const SubProductPage = () => {
    const router = useRouter();

    return (
        <CategoryLayout>
            Sub Product Page {router.query.id}
        </CategoryLayout>
    )
}

export default SubProductPage
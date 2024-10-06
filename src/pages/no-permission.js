import { Button } from "@/components/base";
import { useRouter } from "next/router";
import { ROUTER } from "@/constants";

export default function Share() {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="mb-5">You have no permission</div>
        <Button onPress={() => router.replace(ROUTER.HOME)}>Go to Home</Button>
      </div>
    </div>
  );
}

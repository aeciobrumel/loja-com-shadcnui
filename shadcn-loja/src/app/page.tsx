import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TabsSkeleton } from "@/components/products/skeleton";
import { ProductsTap } from "@/components/products/tab";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

const Page = () => {
  return (

    <div className="w-full max-w-4xl mx-auto">
      <Header></Header>
      <div className="mx-3">
        <Suspense fallback={<TabsSkeleton />}>
          <ProductsTap />
        </Suspense>
      </div>
      <Footer></Footer>
    </div>

  );

}

export default Page;
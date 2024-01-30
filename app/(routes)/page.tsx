import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import getBillboardsList from "@/actions/get-billboards-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  console.log("ppp", products);

  const billboards = await getBillboardsList();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {billboards.map((billboard) => {
          return <Billboard key={billboard.id} data={billboard} />;
        })}

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;

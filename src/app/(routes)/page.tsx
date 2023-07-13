import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import ProductList from '@/components/product-list';
import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container';

export default async function Home() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('070d8749-7ba7-4777-929b-4385095843a6');
  return (
    <Container>
      <div className="space-y10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col hap-y-8 px-4 sm:px-6 lg:px-8 ">
          <ProductList items={products} title="Featured Products" />
        </div>
      </div>
    </Container>
  );
}

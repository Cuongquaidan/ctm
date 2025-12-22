import CartButton from '@/components/ui/button/CartButton';
import WishListButton from '@/components/ui/button/WishListButton';
import { ProductT } from '@/types/common.types';

interface BoxOptionProps {
  product: ProductT;
}

function BoxOption({ product }: BoxOptionProps) {
  return (
    <ul className="option">
      <CartButton product={product}></CartButton>
      <li>
        <WishListButton productId={product.id} />
      </li>
    </ul>
  )
}

export default BoxOption
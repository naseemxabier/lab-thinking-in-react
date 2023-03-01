import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>

        {products.map((item) => (
          <ProductRow item={item} key={item.id} />
        ))}
      </table>
    </div>
  )
}
export default ProductTable;
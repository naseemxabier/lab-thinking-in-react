function ProductRow({item}) {


    return (
       
            <tbody>
            <tr>
            {item.inStock ? <th>{item.name}</th> : <th style ={{color:"red"}}>{item.name}</th>}
                
                <th>{item.price}</th>
            </tr>
            </tbody>

        )

}
export default ProductRow
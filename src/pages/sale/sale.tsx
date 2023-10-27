import SaleProduct from "./saleProduct";
import SaleDetial from "./saleDetail";
type Props = {};

export default function sale({}: Props) {
  return (<div style={{backgroundColor:"#d3d3d3", height:"100vh", display:"flex", paddingTop:"1rem"}}>
    <div style={{ flex: 3, marginTop: 10 }}><SaleProduct/></div>
    <div style={{flex: 1}}><SaleDetial/></div>
  </div>
  )
}

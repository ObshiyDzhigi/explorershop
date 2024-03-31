import React, {useState} from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch.js";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/cartReducer.js";
const Product = () => {
    const { id } = useParams();
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
    const dispatch = useDispatch()
    // Check if data is null or undefined
    if (loading || data === null || data === undefined) {
        return "loading";
    }

    return (
        <div className='product'>
            <>
                <div className="left">
                    <div className="images">
                        <img src={`http://localhost:1337${data.attributes?.img?.data.attributes?.url}`} alt="" onClick={() => setSelectedImg("img")} />
                        <img src={`http://localhost:1337${data.attributes?.img2?.data.attributes?.url}`} alt="" onClick={() => setSelectedImg('img2')} />
                    </div>
                    <div className="mainImg">
                        {/* Check if data.attributes[selectedImg] is not null or undefined */}
                        <img src={`http://localhost:1337${data.attributes?.[selectedImg]?.data.attributes?.url}`} alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>{data.attributes?.title}</h1>
                    <span className='price'>{data.attributes.price}</span>
                    <p>{data.attributes?.desc}</p>
                    <div className="quantity">
                        <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                        {quantity}
                        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                    </div>
                    <button className="add" onClick={()=>dispatch(addToCart({
                        id:data.id,
                        title:data.attributes.title,
                        desc:data.attributes.desc,
                        price:data.attributes.price,
                        img:data.attributes.img.data.attributes.url,
                        quantity,
                    }))}>
                        <AddShoppingCartIcon /> ADD TO CART
                    </button>
                    <div className="links">
                        <div className="item">
                            <FavoriteBorderIcon />ADD TO WISH LIST
                        </div>
                        <div className="item">
                            <BalanceIcon />ADD TO COMPARE
                        </div>
                    </div>
                    <div className="info">
                        <span>Vendor: Polo</span>
                        <span>Product Type: T-Shirt</span>
                        <span>Tag: T-Shirt,Women,Top</span>
                    </div>
                    <hr />
                    <div className="info">
                        <span>DESCRIPTION</span>
                        <hr />
                        <span>ADDITIONAL INFORMATION</span>
                        <hr />
                        <span>FAQ</span>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Product;

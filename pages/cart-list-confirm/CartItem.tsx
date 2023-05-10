import React, { useState, useEffect } from "react";
import axios from 'axios';
import { CartType } from "@/types/CartType";
import { formatMoney } from "@/components/globalfunctions/formatMoney";
import Image from "next/image";
import style from "./CartItem.module.css";

export default function CartItem(
    props: {
        item: CartType,
        delCheck : boolean, 
        setDelCheck : any, 
        totalPrice : number, 
        setTotalPrice : any
    }) 
    {
    const [count, setCount] = useState(1);
    const minusCount = () => {
        if (count === 1) {
            alert("최소 수량은 1개입니다.");
            return;
        }
        setCount(count - 1);
    }
    const plusCount = () => {
        setCount(count + 1);
    }
    const delCart = () => {
        if (window.confirm("장바구니에서 삭제하시겠습니까?")) {
            console.log("---장바구니에서 삭제하는 로직---")
        } else {
            console.log("---삭제 취소---");
        }
    }
    useEffect(() => {
        console.log("props: ", props);
    }, [])
    return (
        <tr className={style.cartItemRow}>
            <td>
                <Image 
                src={props.item.image_url} width={120} height={100} alt="product image"/>
            </td>
            <td>
                <p>{props.item.name}</p>
            </td>
            <td>
                <button onClick={minusCount}>-</button>
                <span className={style.count}>{count}</span>
                <button onClick={plusCount}>+</button>

            </td>
            <td>
                <p>{formatMoney(props.item.price)}</p>
            </td>
            <td>
                <span>{formatMoney(props.item.price * count)}</span>
            </td>
            <td>
            <span className={style.cartDelBtn} onClick={delCart}>x</span>   
            </td>
    
        </tr>
    )
}
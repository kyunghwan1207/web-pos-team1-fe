import React from "react";
import Location from "@/components/Location";
import Header from "@/components/Header"
import Footer from "@/components/Footer";
import Link from "next/link";
import Button from "@/components/Button";
import Text from "@/components/Text";

export default function PointsLayout(props:{children:React.ReactNode}) {
    
    const buttons = [
        {
            src: "/images/dial.png", 
            alt: "enter the phone number", 
            text: "전화번호 입력",
            link: "/",
            onClick: () => console.log('btn 1')
        },
        {
            src: "/images/barcode.png", 
            alt: "scanning barcode", 
            text: "바코드 스캔",
            link: "/",
            onClick: () => console.log('btn 2')
        },
        {
            src: "/images/pointSensing.png", 
            alt: "sensing the point card", 
            text: "포인트카드 센싱",
            link: "/",
            onClick: () => console.log('btn 3')
        },
        {
            src: "/images/forbiden.png", 
            alt: "pass this step", 
            text: "적립 안함",
            link: "/ssgService",
            onClick: () => console.log('btn 4')
        }
    ];

    return (
        <div>
            <Header />
            <Location />
            {props.children}
            <Text text="신세계포인트 적립방법을 선택해 주세요" />
            <div
                style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gridGap: '82px', 
                    margin: '90px 180px 160px 180px' 
                    }}
            >
                {buttons.map((button, index) => (
                    <Link href={button.link} key={index}>
                        <Button 
                            key={index} 
                            src={button.src} 
                            alt={button.alt} 
                            text={button.text} 
                            onClick={button.onClick} 
                        />
                    </Link>
                ))}
            </div>
            {/* <Link href='/cart-list'> */}
                <Footer />
            {/* </Link> */}
        </div>
    )
}

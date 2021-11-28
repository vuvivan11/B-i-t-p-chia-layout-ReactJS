import React from "react";
import Card from "./card";

export default function ListCard() {
    return (
        <div>
            <h1 class="text-white text-center ">BEST SMARTPHONE</h1>
            <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
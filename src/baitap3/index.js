import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListCard from "./list-card";
import Footer from "./footer";

export default function Baitap3() {
    return (
        <div>
            <Header />
            <Carousel />
            <section id="smartphone" class="container-fluid pt-5 pb-5 bg-dark">
                <ListCard />
                <Footer />
            </section>
        </div>
    )
}
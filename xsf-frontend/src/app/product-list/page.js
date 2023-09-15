"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Card, Input, Button } from "antd";
import CustomCarousel from "../components/Carousel";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../context/store";
import Link from "next/link";

export default function page() {
  const { product } = useGlobalContext();
  const router = useRouter();

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setProductList(product);
  }, []);

  function onClickProduct(id) {
    router.push(`/product/${id}`);
  }
  function searchProduct(keyword) {
    const list = product.filter(
      (item) =>
        item.productName.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) || item.productCode.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    );
    setProductList(list);
  }
  return (
    <>
      <div className="px-10">
        <h1>Product list</h1>
        <div className="flex justify-end pb-2">
          <Link href="/product">
            <Button type="primary">Create Product</Button>
          </Link>
        </div>

        <Input
          className="rounded-[15px]"
          prefix={<SearchOutlined className="text-zinc-300" />}
          placeholder="Name, Catalogue, Code"
          onChange={(e) => searchProduct(e.target.value)}
        />
      </div>
      <div className="p-10">
        <Row gutter={[24, 24]}>
          {productList.map((item) => {
            return (
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} xl={{ span: 6 }} key={item.productName + item.productPrice + item.id}>
                <Card hoverable cover={<CustomCarousel></CustomCarousel>}>
                  <div onClick={() => onClickProduct(item.id)}>
                    <div className="text-md font-bold">{item.productName}</div>
                    <div className="text-xs text-zinc-300">{item.productCode}</div>
                    <div className="flex justify-end text-lg text-red-700 font-bold">{`฿${item.productPrice
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`}</div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { Col, Row, Card, Input } from "antd";
import CustomCarousel from "../components/Carousel";
import SearchOutlined from "@ant-design/icons/SearchOutlined";

export default function page() {
  const cols = [];
  for (let i = 0; i < 10; i++) {
    cols.push(
      <Col xs={{ span: 18 }} sm={{ span: 11 }} md={{ span: 7 }} xl={{ span: 5 }} key={i + "index"}>
        <Card hoverable cover={<CustomCarousel></CustomCarousel>}>
          <div>Content 1</div>
          <div>Content 2</div>
          <div>Content 3</div>
          <div>Content 4</div>
        </Card>
      </Col>
    );
  }

  return (
    <>
      <div className="px-10 pb-5">
        <h1>Product list</h1>
        <Input prefix={<SearchOutlined className="text-zinc-300" />} placeholder="Name, Catalogue, Code" />
      </div>
      <Row gutter={[16, 16]}>{cols}</Row>
    </>
  );
}

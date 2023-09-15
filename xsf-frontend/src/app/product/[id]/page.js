"use client";
import React, { useEffect, useState } from "react";
// import SearchOutlined from "@ant-design/icons/SearchOutlined";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, Input, Button, Space } from "antd";
import { Col, Row } from "antd";
import Link from "next/link";
const { Dragger } = Upload;
import { useGlobalContext } from "../../context/store";
import { useRouter } from "next/navigation";

export default function page({ params }) {
  const router = useRouter();
  const { product, setProduct } = useGlobalContext();
  const [imageCount, setImageCount] = useState(0);
  let editProduct = [...product];
  const pd = product.find((item) => item.id === parseInt(params.id));
  const [name, setName] = useState(pd?.productName);
  const [code, setCode] = useState(pd?.productCode);
  const [price, setPrice] = useState(parseInt(pd?.productPrice));

  function onChange(file) {
    const count = file.fileList.length | 0;
    setImageCount(count);
  }
  function onSubmit(event) {
    event.preventDefault();

    const index = product.findIndex((item) => item.id === parseInt(params.id));
    editProduct[index] = {
      id: pd.id,
      productName: name,
      productCode: code,
      productPrice: price,
    };
    setProduct(editProduct);
    router.push("/product-list");
  }
  return (
    <>
      <div className="px-10">
        <h1>Edit Product</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="p-10">
          <Row gutter={[24, 24]}>
            <Col xs={{ span: 22, offset: 1 }}>
              <h4>Upload Image</h4>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col xs={{ span: 22, offset: 1 }}>
              <Dragger name="fileUpload" multiple showUploadList={false} onChange={onChange} accept=".png, .jpg, .jpeg" beforeUpload={() => false} maxCount={6}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Drag & Drop of <span className="text-blue-400 underline">Choose file</span> to upload
                </p>
                <p className="ant-upload-hint">JPG, or PNG Maximum file size 50MB.</p>
              </Dragger>
            </Col>
          </Row>
          <Row gutter={[24, 48]}>
            <Col xs={{ span: 22, offset: 1 }}>
              <div className="flex justify-end text-sm text-zinc-300">Image upload ({imageCount}/6)</div>
            </Col>
          </Row>
          <Row gutter={[24, 24]} className="pb-5">
            <Col xs={{ span: 22, offset: 1 }}>
              <div className="text-md pb-1">Product name</div>
              <Input defaultValue={name} size="large" className="rounded-[15px]" placeholder="Product name" onChange={(e) => setName(e.target.value)} />
            </Col>
          </Row>
          <Row gutter={[24, 24]} className="pb-5">
            <Col xs={{ span: 22, offset: 1 }}>
              <div className="text-md pb-1">Code</div>
              <Input defaultValue={code} size="large" className="rounded-[15px]" placeholder="Code" onChange={(e) => setCode(e.target.value)} />
            </Col>
          </Row>
          <Row gutter={[24, 24]} className="pb-5">
            <Col xs={{ span: 22, offset: 1 }}>
              <div className="text-md pb-1">Price</div>
              <Input
                defaultValue={price}
                size="large"
                type="number"
                className="rounded-[15px]"
                placeholder="฿1,000"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
          </Row>
          <Row gutter={[24, 24]} className="py-5 ">
            <Col xs={{ span: 22, offset: 1 }} className="flex justify-center">
              <Space wrap>
                <Link href={"/product-list"}>
                  <Button size="large" shape="round" className="w-[120px] text-red-700">
                    ยกเลิก
                  </Button>
                </Link>

                <Button size="large" shape="round" type="primary" danger className="w-[120px]" htmlType="submit">
                  ยืนยัน
                </Button>
              </Space>
            </Col>
          </Row>
        </div>
      </form>
    </>
  );
}

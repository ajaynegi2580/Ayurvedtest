import React from "react";
import { Row, Col } from "rsuite";
export default function Cancellation() {
  return (
    <>
      <Row className="privacypolicycls">
        <Col md={2}></Col>
        <Col
          md={20}
          sm={20}
          xs={22}
          style={{
            marginTop: "50px",
          }}
        >
          <Row className="openighour" style={{ marginBottom: 20 }}>
            <Col md={2}></Col>
            <Col md={20} sm={22} xs={22}>
              <h3 style={{ marginTop: "50px", marginBottom: "20px" }}>
                Cancellation and Return Policy
              </h3>
              <h6 style={{ textAlign: "left" }}>
                Return means an action of giving back the product ordered at
                1AYURVEDA by the Patient.
              </h6>
              <div
                style={{ textAlign: "left", marginTop: 30, marginBottom: 80 }}
              >
                <p style={{ marginBottom: 20 }}>
                  The following situations may arise which may cause the action
                  of return of product & services: Service(s) charge fee example
                  appointment fess - will not be refunded in any case ,
                  situation or scenario. (before booking appointments please
                  read this carefully)
                </p>
                <ol>
                  <li>Product(s) delivered do not match your prescription;</li>
                  <li>
                    Product(s) delivered are past or near to its expiry date
                    (medicines with an expiry date of less than 03 months shall
                    be considered as near expiry);
                  </li>
                  <li>
                    Product(s) delivered were damaged in transit (do not to
                    accept any product which has a tampered seal): Note: If the
                    product that you have received is damaged, then do not
                    accept the delivery of that product. If after opening the
                    package you discover that the product is damaged, the same
                    may be returned for a refund.
                  </li>
                </ol>
                <p style={{ marginTop: 20, marginBottom: 20 }}>
                  Please note that we cannot promise a replacement for all
                  products as it will depend on the availability of the
                  particular product. If you receive a defective item, please
                  contact us at care1ayurveda@gmail.com with details of the
                  product and the defect. You can send the item you consider
                  defective. Upon receipt of the returned product, we will fully
                  examine it and notify you via e-mail, within a reasonable
                  period of time, whether you are entitled to a refund or a
                  replacement as a result of the defect. If you are entitled to
                  a replacement or refund, we will replace the product or refund
                  the purchase price. In the event of frivolous and unjustified
                  complaints regarding the quality and content of the products,
                  1AYURVEDA reserves the right to pursue necessary legal actions
                  against you and you will be solely liable for all costs
                  incurred by 1AYURVEDA in this regard.
                </p>
                <p>
                  The returns are subject to the below conditions:-
                  <ol>
                    <li>
                      Any wrong ordering of product doesn’t qualify for Return;
                    </li>
                    <li>
                      Batch number of the product being returned should match as
                      mentioned on the invoice;
                    </li>
                    <li>
                      Return requests arising due to change in prescription do
                      not qualify for Return;
                    </li>
                    <li>
                      Product being returned should only be in their original
                      manufacturer packaging i.e. with original price tags,
                      labels, bar-code and invoice; and Partially consumed
                      strips or products do not qualify for Return, only fully
                      unopened strips or products can be returned.
                    </li>
                  </ol>
                </p>
                <h6 style={{ marginTop: 20, marginBottom: 10 }}>
                  CANCELLATION POLICY
                </h6>
                <p>
                  Customer cancellation: The customer can cancel the order for
                  the product till we ship it. Orders once shipped cannot be
                  cancelled. The customer can cancel the order for medical test
                  till the collection of sample. An order can be classified as
                  Bulk Order if it meets with the below mentioned criteria,
                  which may not be exhaustive, viz:
                  <ol type="i">
                    <li>
                      Products ordered are not for self-consumption but for
                      commercial resale;
                    </li>
                    <li>
                      Multiple orders placed for same product at the same
                      address;
                    </li>
                    <li>
                      Bulk quantity of the same product ordered; iv. Invalid
                      address given in order details;
                    </li>
                    <li>
                      Any malpractice used to place the order. No cancellation
                      charges shall be levied for cancellation of an order in
                      accordance with the terms of this policy.
                    </li>
                  </ol>
                </p>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
}

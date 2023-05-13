import { Col, Row } from "antd";
import React from "react";
import { parseHTML } from "../../../utils/parseHTML";

export const ProjectEvents = ({ eventsText }) => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={12} className="ml-auto">
          {eventsText && (
            <div
              className="text-normal text-white mb-[5rem]"
              dangerouslySetInnerHTML={{ __html: parseHTML(eventsText) }}
            ></div>
          )}
        </Col>
      </Row>
    </div>
  );
};

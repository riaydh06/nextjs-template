import React from 'react';
import { Row, Col, Text, ROW_JUSTIFY } from '@components';

const NotFound = () => {
  return (
    <Row justify={ROW_JUSTIFY.CENTER}>
      <Col xs={12}>
        <Text p tid="NOT_FOUND.TITLE" className="h2" />
        <Text p tid="NOT_FOUND.SUB_TITLE" />
      </Col>
    </Row>
  );
};

export default NotFound;

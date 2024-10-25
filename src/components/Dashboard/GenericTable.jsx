import React from 'react';
import { Table } from 'antd';

const GenericTable = ({ columns, data }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="id" // Assuming each data item has a unique "id" field
      pagination={{ pageSize: 10 }} // You can customize pagination as needed
      scroll={{ x: true }} // Enables horizontal scrolling for large tables
    />
  );
};

export default GenericTable;

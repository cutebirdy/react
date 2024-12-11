

import React, { useState } from 'react';
import { Button,  Table } from 'antd';
import './table.css'
const columns = [
  {
    title: '姓名',
    width: '20%',
    dataIndex: 'name'
  }, {
    title: '年龄',
    width: '20%',
    dataIndex: 'age',
  }, {
    title: '住址',
    width: '40%',
    dataIndex: 'address'
  }, {
    title: '操作',
    width: '20%',
    dataIndex: 'operate',
    render: (text) => <a href={text} target="_blank" rel="noreferrer">查看</a>,

  }
];
const dataSource = Array.from({
  length: 23,
}).map((_, i) => ({
  key: i,
  name: `义坤${i}`,   //带变量的字符串
  age: 18,
  address: `西湖区湖底公园${i}号`,
  operate: 'https://www.aliyun.com'
}));
const MyTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    // <Flex gap="middle" vertical>
    //   <Flex align="center" gap="middle">
    //     <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
    //       Reload
    //     </Button>
    //     {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
    //   </Flex>
    //   <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
    // </Flex>
    <div className="table-container">
      <div className="button-container">
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
    </div>
  );
};


export default MyTable;
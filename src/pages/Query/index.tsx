import { lazy } from "react";
import  { useState } from 'react';

import { Layout, Input, Space, Typography, Empty, Slider, Form, Button, Checkbox } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const { Header, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;
const Container = lazy(() => import("../../common/Container"));

const Home = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = (value: any) => {
    setSearchQuery(value);
  };

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <Container>
      <Layout className="layout">
      <Header style={{ background: '#1890ff', padding: '0 20px' }}>
      <div className="logo" />
      <Title level={3} style={{ color: 'white', lineHeight: '64px', margin: 0 }}>
        Create a New Search
      </Title>
    </Header>
      <Content style={{ padding: '50px 50px' }}>
      <div className="site-layout-content">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="Query"
              name="query"
              rules={[{ required: true, message: 'Please input your a query!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Max number of results"
              name="max_results"
              rules={[{ required: false, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item
              label="P"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item> */}

            {/* <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item> */}

            <Form.Item name="has_website" valuePropName="checked">
              <Checkbox>Only include Results with website?</Checkbox>
            </Form.Item>

            <Form.Item name="has_number" valuePropName="checked">
              <Checkbox>Only include Results with phone number?</Checkbox>
            </Form.Item>

            <Form.Item name="has_email" valuePropName="checked">
              <Checkbox>Only include Results with email?</Checkbox>
            </Form.Item>


            <Form.Item label="Google Review Range" name="review">
              <Slider range min={0} max={5.0} defaultValue={[0,5]} step={0.05}/>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

          </Form>
        </div>
      </Content>
    </Layout>
    </Container>
  );
};

export default Home;

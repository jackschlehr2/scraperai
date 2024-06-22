// import IntroContent from "../../content/IntroContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";
import { Layout,  Space, Typography, Progress, Table } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

// const Contact = lazy(() => import("../../components/ContactForm"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
// const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
// const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const data = [
  {
    key: '1',
    name: 'Task 1',
    progress: 30,
    submitTime: '2024-06-01 12:00',
    completeTime: '2024-06-01 12:30',
    results: 150,
    link: 'https://example.com/data1',
  },
  {
    key: '2',
    name: 'Task 2',
    progress: 70,
    submitTime: '2024-06-02 13:00',
    completeTime: '2024-06-02 13:45',
    results: 200,
    link: 'https://example.com/data2',
  },
  {
    key: '3',
    name: 'Task 3',
    progress: 50,
    submitTime: '2024-06-03 14:00',
    completeTime: '2024-06-03 14:20',
    results: 100,
    link: 'https://example.com/data3',
  },
];

const columns = [
  {
    title: 'Task',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    render: (progress: any) => <Progress percent={progress} />,
  },
  {
    title: 'Submit Time',
    dataIndex: 'submitTime',
    key: 'submitTime',
  },
  {
    title: 'Complete Time',
    dataIndex: 'completeTime',
    key: 'completeTime',
  },
  {
    title: 'Number of Results',
    dataIndex: 'results',
    key: 'results',
  },
  {
    title: 'Link to Data',
    dataIndex: 'link',
    key: 'link',
    render: (link: any) => <a href={link} target="_blank" rel="noopener noreferrer">View Data</a>,
  },
];


const Scrape = () => {
  return (
    <Layout className="layout">
    <Header style={{ background: '#1890ff', padding: '0 20px' }}>
      <div className="logo" />
      <Title level={3} style={{ color: 'white', lineHeight: '64px', margin: 0 }}>
        Scrape Job Progress
      </Title>
    </Header>
    <Content style={{ padding: '50px 50px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Title level={4}>Tasks</Title>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Space>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2024 Created by Ant UED</Footer>
  </Layout>
  );
};

export default Scrape;



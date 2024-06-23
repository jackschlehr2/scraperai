import { Layout, Typography, Row, Col, Card, Statistic, Button, Alert } from 'antd';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from "../../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);


const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const Home = () => {
  const userDetails = {
    name: 'John Doe',
    accountLevel: 'Standard',
    totalSearches: 1000,
    searchesLeft: 150,
  };
    // Function to handle upgrade button click
    const handleUpgrade = () => {
      // Add logic to handle upgrade process, e.g., redirect to upgrade page
      console.log('Upgrade clicked');
    };
  
    // Function to handle manage plan button click
    const handleManagePlan = () => {
      // Add logic to manage plan, e.g., redirect to manage plan page
      console.log('Manage Plan clicked');
    };
  
  return (
    <Authenticator>
    <Layout className="layout">
    <Header style={{ background: '#1890ff', padding: '0 20px' }}>
      <div className="logo" />
      <Title level={3} style={{ color: 'white', lineHeight: '64px', margin: 0 }}>
        Account Details
      </Title>
    </Header>
    <Content style={{ padding: '50px 50px' }}>
      <div className="site-layout-content">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Name"
                value={userDetails.name}
                style={{ marginBottom: 16 }}
              />
              <Statistic
                title="Account Level"
                value={userDetails.accountLevel}
                style={{ marginBottom: 16 }}
              />
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic
                    title="Total Searches"
                    value={userDetails.totalSearches}
                    suffix=" searches"
                    style={{ marginBottom: 16 }}
                  />
                </Col>
                <Col span={12}>
                  <Statistic
                    title="Searches Left"
                    value={userDetails.searchesLeft}
                    suffix=" searches"
                    style={{ marginBottom: 16 }}
                  />
                </Col>
              </Row>
              {userDetails.searchesLeft === 0 && (
                <Alert
                  message="You have used all your searches for this period."
                  type="warning"
                  style={{ marginBottom: 16 }}
                />
              )}
              <Button
                type="primary"
                onClick={handleUpgrade}
                disabled={userDetails.searchesLeft > 0}
                style={{ marginRight: 10 }}
              >
                Upgrade to Next Plan
              </Button>
              <Button onClick={handleManagePlan}>
                Manage Plan
              </Button>
              {userDetails.searchesLeft > 0 && (
                <Text type="secondary" style={{ marginLeft: 10 }}>
                  (You have {userDetails.searchesLeft} searches left)
                </Text>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
  </Authenticator>
  );
};

export default Home;

import { Layout, Typography, Row, Col, Card, Statistic, Button, Alert, Spin } from 'antd';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from "../../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import { signOut } from "aws-amplify/auth"
import { getCurrentUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';

Amplify.configure(outputs);

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;


interface UserDetails {
  name: string | undefined;
  accountLevel: string | null;
  totalSearches: number | null;
  searchesLeft: number | null;
}

const initialUserDetails: UserDetails = {
  name: undefined,
  accountLevel: "standard",
  totalSearches: 1000,
  searchesLeft: 100,
};


const Home = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>(initialUserDetails);

   useEffect( () => {
    const fetchData = async()=> {
      const { username, userId, signInDetails } = await getUser();
      console.log(username, userId, signInDetails);
      setUserDetails({
        ... userDetails,
        name: signInDetails?.loginId
      });
    }
    fetchData()
   }, []);
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

    async function handleSignOut(){
      await signOut();
    } 

    async function getUser(){
       return await getCurrentUser();
    }
  

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
              { userDetails.name ? (  
                <Statistic
                  title="Name"
                  value={userDetails.name}
                  style={{ marginBottom: 16 }}
                />
              ) :  (
                <Spin />
              )}
              { userDetails.accountLevel ? (  
                <Statistic
                title="Account Level"
                value={userDetails.accountLevel}
                style={{ marginBottom: 16 }}
              />
              ) :  (
                <Spin />
              )}

               <Row gutter={16}>
                  <Col span={12}>
                    <title >Total Searches</title>
                    { userDetails.totalSearches ? (  
                    <Statistic
                      title="Total Searches"
                      value={userDetails.totalSearches}
                      suffix=" searches"
                      style={{ marginBottom: 16 }}
                    />) : (
                      <Spin />
                    )}

                  </Col>
                  <Col span={12}>
                    {userDetails.searchesLeft ? (                 
                    <Statistic
                      title="Searches Left"
                      value={userDetails.searchesLeft}
                      suffix=" searches"
                      style={{ marginBottom: 16 }}
                    />) : (
                      <Spin />
                    )}

                  </Col>
                </Row>
                {userDetails.searchesLeft === 0 && (
                  <Alert
                    message="You have used all your searches for this period. Upgrade your plan to continue using this month"
                    type="error"
                    style={{ marginBottom: 16 }}
                  />
                )}
                <Button
                  type="primary"
                  onClick={handleUpgrade}
                  style={{ marginRight: 10 }}
                >
                  Upgrade Plan
                </Button>
                <Button onClick={handleManagePlan}>
                  Manage Plan
                </Button>
                <Button onClick={handleSignOut}>
                  Sign Out
                </Button>
              
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

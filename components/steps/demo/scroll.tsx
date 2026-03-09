import React from 'react';
import { Steps } from 'antd';

const items = Array.from({ length: 8 }, (_, index) => ({
  title: `Step ${index + 1}`,
  content: `This is a long content for step ${index + 1}`,
}));

const App: React.FC = () => {
  return (
    <>
      <Steps current={2} scroll={{ x: 'max-content' }} items={items} />
      <br />
      <Steps current={2} scroll={{ x: 220, wrap: true }} items={items} />
    </>
  );
};

export default App;

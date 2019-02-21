import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background: #FAFAFA;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  border-radius: 0.25rem;
  margin: 1rem 0 0;
`;

const TabHeader = styled.div`
  width: 100%;
  background: #EEEEEE;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
`;

const TabContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
`;

const TabItem = styled.div`
  width: calc(${props => props.width}% - 0.5rem);
  padding: 0.25rem;
  margin: 0;
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
`;

export default function PropTable({ propDefinitions }) {
  return (
    <Container>
      <TabHeader>
        <TabItem width={25}>Property</TabItem>
        <TabItem width={12.5}>Type</TabItem>
        <TabItem width={12.5}>Required</TabItem>
        <TabItem width={15}>Default</TabItem>
        <TabItem width={15}>Options</TabItem>
        <TabItem width={20}>Description</TabItem>
      </TabHeader>

      {/* Table Content */}
      {propDefinitions.map(prop => {
        const { property, propType, required, description, defaultValue } = prop;

        const options = propType.name ? propType.name.split('|') : null;
        const enumType = options ? options.length > 1 : null;

        return (
          <TabContent>
            <TabItem width={25}>{property}</TabItem>
            <TabItem width={12.5}>{enumType ? 'string' : propType.name}</TabItem>
            <TabItem width={12.5}>{required ? 'true' : '-'}</TabItem>
            <TabItem width={15}>{defaultValue || '-'}</TabItem>
            {enumType ? (
              <TabItem width={15}>
                {options.map((o, index) => (
                  <div key={o} style={[index > 0 && styles.marginTop]}>
                    {typeof o === 'string' ? o.replace(/"/g, '').trim() : o}
                  </div>
                ))}
              </TabItem>
            ) : (
              <TabItem width={15}>-</TabItem>
            )}
            <TabItem width={20}>{description || '-'}</TabItem>
          </TabContent>
        );
      })}
    </Container>
  );
}

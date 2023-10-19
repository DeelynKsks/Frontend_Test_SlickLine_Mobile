// ChartsPage.jsx
import React from 'react';
import DataCharts from '../Components/DataCharts';

function ChartsPage({ route, navigation }) {
  const { data } = route.params;

  return (
    <DataCharts data={data} navigation={navigation} />
  );
}

export default ChartsPage;

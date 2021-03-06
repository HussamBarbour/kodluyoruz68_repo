import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {Card} from '../components';

import news_data from '../news_data.json';

function NewsList(props) {
  const renderNewsData = ({item}) => (
    <Card
      news={item}
      onClick={() => props.navigation.navigate('Detail', {selected_data: item})}
    />
  );

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={news_data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderNewsData}
        />
      </View>
    </SafeAreaView>
  );
}

export {NewsList};

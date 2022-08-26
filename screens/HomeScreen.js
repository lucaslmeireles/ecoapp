import * as React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import sanityClient from '../sanity';
import TopBar from '../components/TopBar';
import FeaturedCategory from '../components/FeaturedCategory';
import { FadeLoading } from 'react-native-fade-loading';
import fetchDataHome from '../data/fetchDataHome';

export const HomeScreen = () => {
  const idUnique = () => {
    return String(Math.floor(Math.random() * 1000));
  };
  const [featuredCategories, setFeaturedCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function fetchData() {
      const data = await fetchDataHome();
      setFeaturedCategories(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return loading ? (
    <FadeLoading
      primaryColor="gray"
      secondaryColor="lightgray"
      duration={5000}
      visible={loading}
      className="w-9 h-2"
    />
  ) : (
    <>
      <StatusBar backgroundColor="rgb(243, 244, 246)"></StatusBar>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <TopBar />
          {featuredCategories?.map((category) => {
            return (
              <FeaturedCategory
                key={category._id + idUnique()}
                id={category._id}
                name={category.name}
              />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

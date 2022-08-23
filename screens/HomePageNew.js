import * as React from 'react';
import { View, ScrollView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import sanityClient from '../sanity';
import TopBar from '../components/TopBar';
import FeaturedCategory from '../components/FeaturedCategory';
import LoadingScreen from './LoadingScreen';

export const HomePageNew = () => {
  const idUnique = () => {
    return String(Math.floor(Math.random() * 1000));
  };
  const [featuredCategories, setFeaturedCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "featured"] {
            ...,
            posts[]->{
                ...
            }
          }
          `,
      )
      .then((data) => {
        setFeaturedCategories(data);
        setLoading(false);
      })
      .catch((e) => e.message);
  }, [loading]);

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <StatusBar backgroundColor="rgb(243, 244, 246)"></StatusBar>
      <View style={{ flex: 1 }}>
        <TopBar />
        <ScrollView>
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

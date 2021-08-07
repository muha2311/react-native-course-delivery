import React, { useState,useEffect } from "react";
import { ActivityIndicator,FlatList,} from "react-native";
import { getAllRepos } from "../../services";
import { RepoCard, RepoHeader } from "../../components";
import styles from "./styles";



function Home() {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  
  const onLoad = async () => {
    const _data = await getAllRepos(page);
    setData([...data, ..._data]);
    setLoading(false);
  };

  useEffect(() => {
    onLoad();
  }, [page]);


const renderItem = (data) => {
    return (
      <RepoCard
        key={data.item.id}
        title={data.item.full_name}
        description={data.item.description}
        imageSrc={data.item.owner.avatar_url}
        numIssues={data.item.open_issues}
        providerName={data.item.owner.login}
        numStars={data.item.stargazers_count}
        numberOfLines={1}
      />
    );
  };

  const increasePageNumber = () => {
    setLoading(true);
    setPage((val) => val + 1);
  };
  return (
    <>
      <RepoHeader text={"All repositories"} />
      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReached={increasePageNumber}
        onEndReachedThreshold={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
      {loading && <ActivityIndicator />}
    </>
  );
}

export default Home;

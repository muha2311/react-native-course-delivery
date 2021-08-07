import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { RepoHeader, Section } from "../../components";
import DetailedInfo from "../../components/DetailedInfo";
import styles from "./styles";
import {limitTextLength} from "../../utils";
function RepoScreen({route}) {
    const {data}=route.params;
    const urlOpen=()=>{
        Linking.openURL(data.html_url);
    }
  return (
    <>
      <RepoHeader
        containerStyle={styles.header}
        text={data.full_name}
        textStyle={styles.headerText}
        imgSrc={data.owner.avatar_url}
      ></RepoHeader>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Section text={"Description"}>
          <Text style={styles.description}>{limitTextLength(250,data.description)}</Text>
          <Section
            text={"Additional Information"}
            containerStyle={{ borderBottomWidth: 0 }}
          >
            <View style={styles.flx}>
              <DetailedInfo
                text={"Stars"}
                number={data.stargazers_count}
                iconName={"star"}
                iconColor={"yellow"}
                numberStyle={{ color: "yellow" }}
              />
              <DetailedInfo text={"Issues"}
                number={data.open_issues}
                iconName={"alert"}
                iconColor={"red"}
                numberStyle={{ color: "red" }} />
            </View>
            <View style={styles.flx}>
              <DetailedInfo text={"Forks"}
                number={data.forks}
                iconName={"git-network"}
                iconColor={"green"}
                numberStyle={{ color: "green" }}/>
              <DetailedInfo text={"Watchers"}
                number={data.watchers}
                iconName={"md-eye"}
                iconColor={"#052959"}
                numberStyle={{ color: "#052959" }}/>
            </View>
          </Section>
        </Section>
        <Section text={"Repo Link"} containerStyle={{ borderBottomWidth: 0 }}>
          <TouchableOpacity style={styles.button} onPress={urlOpen}>
            <Text style={styles.buttonText}>{"Open Repo Link"}</Text>
          </TouchableOpacity>
        </Section>
      </ScrollView>
    </>
  );
}

export default RepoScreen;

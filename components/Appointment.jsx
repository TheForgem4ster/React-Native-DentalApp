import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Appointment = ({ user, diagnosis, active, time }) => {
  return (

    <GroupItem>
      <Avatar source={{
        uri: user.avatar
      }} />
      <View style={{ flex: 1 }}>
        <FullName>{user.fullname}</FullName>
        <GrayText>{diagnosis}</GrayText>
      </View>
      <GroupDate active={active}>{time}</GroupDate>
    </GroupItem>

  );
}

const GroupDate = styled.Text`
  background: ${props => (props.active ? "#2A86FF" : "#E9F5FF")};
  color: ${props => (props.active ? "#fff" : "#4294FF")};
  border-radius: 18px;
  font-weight: 800;
  font-size: 16px;
  width: 80px;
  height: 42px;
  text-align: center;
  line-height: 38px;
`

const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
`

const FullName = styled.Text`
  font-weight: 600;
  font-size: 18px
`

const Avatar = styled.Image`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  margin-right: 20px;
`

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #DCDCDC;
`

export default Appointment;
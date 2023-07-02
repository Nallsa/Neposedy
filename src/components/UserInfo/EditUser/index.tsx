import { FC, useEffect, useState } from 'react';
import {
  Container,
  InputContainer,
  InputUser,
  TextTitle,
  UserAvatar,
  WrapperElement,
} from './styles';
import {} from '@react-navigation/routers';

import { View, StyleSheet } from 'react-native';
import GoBackButton from '../../buttons/GoBackButton';
import Button from '../../buttons/Button';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const initialState: any = {
  userName: '',
  phone: '',
  email: '',
  dateBirth: '',
  gender: '',
};

const EditUser: FC = () => {
  const [userState, setUserState] = useState(initialState);

  return (
    <Container>
      <WrapperElement>
        <GoBackButton style={styles.GoBackButton} />

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TextTitle>Редактирование профиля</TextTitle>
        </View>
      </WrapperElement>

      <UserAvatar
        source={require('../../../../assets/demo/avatar.png')}
        imageStyle={{ borderRadius: 10 }}
      />

      <InputContainer>
        <View style={styles.inputWrapper}>
          <InputUser
            name='userName'
            placeholder={'Имя'}
            value={userState?.userName || ''}
            onChangeText={(text: React.ChangeEvent<HTMLInputElement>) =>
              setUserState({ ...userState, userName: text })
            }
          />
          {userState.userName != '' ? (
            <AntDesign
              name='close'
              size={22}
              color='black'
              style={styles.deleteValue}
              onPress={() => console.log('daa')}
            />
          ) : (
            <></>
          )}
        </View>
        <View style={styles.inputWrapper}>
          <InputUser
            name='phone'
            placeholder={'Phone'}
            value={userState?.phone || ''}
            onChangeText={(text: React.ChangeEvent<HTMLInputElement>) =>
              setUserState({ ...userState, phone: text })
            }
          />
          <FontAwesome5
            name='edit'
            size={18}
            color='black'
            style={styles.editPhone}
          />
        </View>
        <View style={styles.inputWrapper}>
          <InputUser
            name='email'
            placeholder={'Email'}
            value={userState?.email || ''}
            onChangeText={(text: React.ChangeEvent<HTMLInputElement>) =>
              setUserState({ ...userState, email: text })
            }
          />
          {userState.email != '' ? (
            <AntDesign
              name='close'
              size={22}
              color='black'
              style={styles.deleteValue}
              onPress={() => console.log('daa')}
            />
          ) : (
            <></>
          )}
        </View>
        <View style={styles.inputWrapper}>
          <InputUser
            name='dateBirth'
            placeholder={'Дата рождения'}
            value={userState?.dateBirth || ''}
            onChangeText={(text: React.ChangeEvent<HTMLInputElement>) =>
              setUserState({ ...userState, dateBirth: text })
            }
          />
          {userState.dateBirth != '' ? (
            <AntDesign
              name='close'
              size={22}
              color='black'
              style={styles.deleteValue}
              onPress={() => console.log('daa')}
            />
          ) : (
            <></>
          )}
        </View>
        <View style={styles.inputWrapper}>
          <InputUser
            name='gender'
            placeholder={'Пол'}
            value={userState?.gender || ''}
            onChangeText={(text: React.ChangeEvent<HTMLInputElement>) =>
              setUserState({ ...userState, gender: text })
            }
          />
          {userState.gender != '' ? (
            <AntDesign
              name='close'
              size={22}
              color='black'
              style={styles.deleteValue}
              onPress={() => console.log('daa')}
            />
          ) : (
            <></>
          )}
        </View>
      </InputContainer>
      <Button big style={{ marginTop: 30, width: 343 }}>
        Сохранить
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  GoBackButton: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    marginRight: 16,
  },
  inputWrapper: {
    width: 343,
    position: 'relative',
  },
  deleteValue: {
    position: 'absolute',
    right: 18,
    top: 14,
  },
  editPhone: {
    marginBottom: 40,
    padding: 0,
    marginLeft: 0,
    right: 16,
    top: 14,
    position: 'absolute',
  },
});

export default EditUser;

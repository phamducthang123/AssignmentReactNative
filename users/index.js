import React, { useState } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Switch,
  Modal,
  Button,
  TextInput,
  Picker,
  Alert,
  Platform
}
  from 'react-native';
import SubjectItem from './subject-item';
import InfoText from './info-text';
import { TrackingConfiguration } from 'expo/build/AR';
export default function Profile() {
  const userProfile = {
  
    comic: [
      {
        img: 'https://sachvui.com/cover/2016/doraemon.jpg',
        name: 'Draemon',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Fujiko F. Fujio",
        content: "Các câu chuyện trong Doraemon thường có một công thức chung, đó là xoay quanh những rắc rối hay xảy ra với cậu bé Nobita học lớp bốn, nhân vật chính thứ nhì của bộ truyện",
        status: true
      },
      {
        img: 'http://image.phimmoi.net/film/2296/poster.medium.jpg',
        name: 'Naruto',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Kishimoto Masashi",
        content: "Bối cảnh Naruto xảy ra vào mười hai năm trước khi câu chuyện chính thức bắt đầu, một con hồ ly chín đuôi đã tấn công Konohagakure. Nó là một con quái vật có sức mạnh khủng khiếp",
        status: false
      },
      {
        img: 'http://image.phimmoi.net/film/665/poster.medium.jpg',
        name: 'One Piece',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Eiichiro Oda",
        content: "One Piece là câu truyện kể về Luffy và các thuyền viên của mình. Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc sống của cậu bé thay đổi khi cậu vô tình có được sức mạnh có thể co dãn như cao su",
        status: true
      }, {
        img: 'http://image.phimmoi.net/film/2844/poster.medium.jpg',
        name: 'Dragon Ball',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Akira Toriyama",
        content: "Câu truyện kể về một cậu bé tên Songoku cùng nhóm bạn của mình tham gia những chuyến phiêu lưu tìm ngọc rồng, chống lại cái ác bảo vệ trái đất",
        status: true
      }, {
        img: 'http://image.phimmoi.net/film/2844/poster.medium.jpg',
        name: 'Dragon Ball',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Akira Toriyama",
        content: "Câu truyện kể về một cậu bé tên Songoku cùng nhóm bạn của mình tham gia những chuyến phiêu lưu tìm ngọc rồng, chống lại cái ác bảo vệ trái đất",
        status: true
      }, {
        img: 'http://image.phimmoi.net/film/2844/poster.medium.jpg',
        name: 'Dragon Ball',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Akira Toriyama",
        content: "Câu truyện kể về một cậu bé tên Songoku cùng nhóm bạn của mình tham gia những chuyến phiêu lưu tìm ngọc rồng, chống lại cái ác bảo vệ trái đất",
        status: true
      }, {
        img: 'http://image.phimmoi.net/film/2844/poster.medium.jpg',
        name: 'Dragon Ball',
        category: 'Thiếu nhi',
        chapters: '100',
        author: "Akira Toriyama",
        content: "Câu truyện kể về một cậu bé tên Songoku cùng nhóm bạn của mình tham gia những chuyến phiêu lưu tìm ngọc rồng, chống lại cái ác bảo vệ trái đất",
        status: true
      }
    ]
  };
 const info= {
name:"",
age:"",
}
  
  
 // Khai bao state + ham thay doi gia tri cua no
 const [showInfo, setShowInfo] = useState(true);
 // Chuyen viec su dung userprofile sang state, de khi user thay doi gia tri se render lai man hinh
 const [user, setUser] = useState(userProfile);
 const [ifo, setInfo] = useState(info);
 // Tao state kiem soat viec hien thi cua modal add subject
 const [showModal, setShowModal] = useState(true);
 const [showComic, setShowComic] = useState(false);
 // Khai bao ham thuc hien cong viec xoa
 const handleDeleteSubject = (name) => {
   // su dung let de co the gan gia tri moi
   let newSubjectList = user.comic;
   // filter ((item) => tra ve dieu kien ma item do se duoc xu ly)
   // sau khi filter xong (chay het vong lap voi dieu kien dua ra) -> tra ve mang moi co cac item thoa man dk

   newSubjectList = newSubjectList.filter((subject) => subject.name != name);
   userProfile.comic = newSubjectList;
   console.log(userProfile);

   setUser(userProfile);
 }
 const [inputUserName, setInputUserName] = useState('');
 const [inputUserAge, setInputUserAge] = useState('');
 const [pickerSubjectClass, setPickerSubjectClass] = useState("PT1111");

 const setDefaultValue = () => {
   setInputUserName('');
   setInputUserAge('');
setShowComic(false);
 }

 const setDefaultButton = () => {
 
setShowComic(false);
 }


 // Tao ham va xu ly viec add subject

 const handleAddUser = () => {
   info.name = inputUserName,
    info.email = inputUserAge,

     // };

     // let newSubjectList = user.comic;
     // newSubjectList.push(newSubject);
     // userProfile.comic = newSubjectList;

     setInfo(info);
     console.log(info);
   setShowModal(false);
   setDefaultValue();
 }
 return (
   <View >

   
     <View style={{flex:1,flexDirection:"column", marginTop :Platform.OS==='ios'?34:0}}   >
 <View style={{height:64}}>
       {showInfo ? <InfoText data={ifo} /> : null}
       <Text>--------------</Text>
       <Button
         title="Quay lại"
         onPress={() => {
           setShowModal(true);
         }}

       />
   
 
       
     
     </View>
        <View style={{ height: 500, backgroundColor: "white" }} >
          <FlatList
            data={user.comic} // mảng nhận vào để hiển thị danh sách
            renderItem={({ item }) => (
              <SubjectItem item={item} handleDelete={handleDeleteSubject} />
            )} // item ứng với {name: '', identity: '', className: ''}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
      <Modal visible={showModal}>
        <View style={styles.container}>
          <Text style={styles.title}>Thông tin người dùng</Text>
          <Text style={styles.chu}>Tên</Text>
          <TextInput style={styles.inputLabel} value={inputUserName} onChangeText={(value) => setInputUserName(value)} />
          <Text style={styles.chu}>Tuổi</Text>
          <TextInput keyboardType='number-pad' style={styles.inputLabel} value={inputUserAge} onChangeText={(value) => setInputUserAge(value)} />


          <TouchableHighlight
            disabled={showComic}
            style={style.submit}

            onPress={() => {
              if (inputUserAge == "" || inputUserAge == "") {

                Alert.alert(
                  'Bạn phải nhập đầy đủ thông tin')


              } else {
                if (inputUserAge < 18) {
                  setShowComic(true)
                  Alert.alert(
                    'Bạn chưa đủ tuổi !'
                  )
                  setDefaultButton();
                }

                else {
                  setShowModal(false);
                  setShowComic(false);

                  handleAddUser()
                }
              }

            }
            }
            underlayColor='#fff'>
            <Text style={style.submitText}>Vào đọc truyện</Text>
          </TouchableHighlight>

        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: Platform.OS === 'ios' ? 34 : 0
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    textAlign: "center",
    color: "#00bcd4",

  },
  inputLabel: {
    fontSize: 15,
    color: "#00bcd4",
    borderColor: "#00bcd4",
    borderWidth: 1,
    borderRadius: 10,
    margin: 8,
    height: 50,
    paddingLeft: 8

  },

  chu: {
    padding: 10,
    fontSize: 20,
    color: "#00bcd4",
    textAlign: "left"
  },

  bt: {
    color: "#00bcd4"

  }
});
const style = StyleSheet.create({
  profileContainer: {
    marginTop: 50

  },
  img: {},
  image: {
    width: 200,
    height: 200,
    borderRadius: 200
  }, submit: {
    overflow: 'hidden',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 5,
    padding: 10,
    backgroundColor: '#00bcd4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  },
});


const mystyles = StyleSheet.create({

  btnParent: {
    color: "#00bcd4",
    marginTop: 16,
    flexDirection: "row"

  },
  button: {

    margin: 8,
    justifyContent: "space-around"
  },

});

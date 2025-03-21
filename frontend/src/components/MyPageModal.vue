<script setup>
// import {useUserStore} from "@/stores/user";
import {defineEmits, onMounted, ref, watch} from "vue";
import axios from "axios";
import {useUserStore} from "@/stores/user";

// const userStore = useUserStore();
const emit = defineEmits(['closeModal']);

const username = ref('');
const id = ref('');
const email = ref('');
const errors = ref({
  username: ''
});

// 사용자 정보 불러오는 함수
const userStore = useUserStore();

const fetchUserInfo = async () => {
  try {
    const response = await axios.get('/auth/detail', {
      headers: {
        Authorization: `Bearer ${userStore.authToken}`,
      },
    });
    const userInfo = response.data.data;  // API 응답에서 userInfo를 가져옴
    console.log(userInfo);
    id.value = userInfo.userLoginId; // userLoginId -> id
    username.value = userInfo.userNickname; // userNickname -> username
    email.value = userInfo.userEmail; // userEmail -> email
  } catch (error) {
    console.error("사용자 정보 불러오기 실패", error);
  }
};

// 닉네임 유효성 검사
const validateUsername = () => {
  if (username.value.trim() === '') {
    errors.value.username = '사용자 이름을 입력해주세요';
    return false;
  } else {
    errors.value.username = '';
    return true;
  }
};

watch([username], () => {
  validateUsername();
});

// 프로필 수정
const handleSaved = async () => {
  if (!validateUsername()) return;

  try {
    const response = await axios.post('/auth/detail/update', {
      userLoginId: id.value,
      userNickname: username.value,
      userEmail: email.value,
    }, {
      headers: {
        Authorization: `Bearer ${userStore.authToken}`,
      }
    });
    console.log(response.data);
    alert("닉네임 변경 성공");
  } catch (error) {
    console.error("프로필 수정 실패", error);
  }
};

// 회원 탈퇴
const handleDelete = async () => {
  if (confirm("정말로 회원 탈퇴를 하시겠습니까?")) {
    try {
      const response = await axios.post('/auth/delete', {}, {
        headers: {
          Authorization: `Bearer ${userStore.authToken}`,
        }
      });
      console.log(response.data);
      alert("회원 탈퇴 성공");
      userStore.removeAuthToken();
      emit('closeModal');
    } catch (error) {
      console.error("회원 탈퇴 실패", error);
    }
  }
};

onMounted(() => {
  fetchUserInfo();
});
</script>

<template>
  <div class="modal-overlay" @click.self="emit('closeModal')">
    <div class="my-page-wrap">
      <div class="my-page-html">
        <input id="tab" type="radio" value="MyPage"/>
        <label for="tab" class="tab">MyPage</label>

        <div class="my-page-form">
          <div class="group">
            <label for="user" class="label">Username</label>
            <input v-model="username" id="user" type="text" class="input"/>
            <p v-if="errors.username" class="error-message">{{ errors.username }}</p>
          </div>
          <div class="group">
            <label for="id" class="label">Id</label>
            <input v-model="id" id="id" type="text" class="input" readonly/>
          </div>
          <div class="group">
            <label for="pass" class="label">Password</label>
            <input id="pass" type="password" class="input" value="12341234" readonly />
          </div>
          <div class="group">
            <label for="email" class="label">Email Address</label>
            <input v-model="email" id="email" type="text" class="input" readonly />
          </div>
          <div class="group">
              <input type="submit" class="button" value="Saved" @click="handleSaved"/>
          </div>
        </div>

        <div class="delete-account" @click="handleDelete">
          회원 탈퇴
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  font: 600 16px/18px 'Open Sans', sans-serif;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.my-page-wrap {
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 670px;
  background: #2C3650;
  border-radius: 30px;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  position: relative;
}

.my-page-html {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 50px 70px 50px 70px;
  text-align: left;
}

.tab {
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  color: #fff;
  border-bottom: 2px solid #1161ee;
  text-transform: uppercase;
}

.my-page-form {
  min-height: 345px;
  position: relative;
  margin-top: 20px;
}

.group {
  margin-bottom: 15px;
}

.label,
.input,
.button {
  width: 100%;
  color: #fff;
}

.my-page-form .group .label {
  color: #aaa;
  font-size: 12px;
}

.input,
.button {
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}

.button {
  background: #1161ee;
  cursor: pointer;
  margin-top: 20px;
}

input[type=radio] {
  display: none;
}

.input[data-type='password'] {
  text-security: circle;
  -webkit-text-security: circle;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

.delete-account {
  width: 65px;
  margin-left: 315px;
  margin-top: 20px;
  color: #fff;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}

.delete-account:hover {
  color: #f44336;
}
</style>
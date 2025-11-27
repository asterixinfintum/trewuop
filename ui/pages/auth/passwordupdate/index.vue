<template>
  <div>
    <div class="landing">
      <Header />

      <ErrorSuccess
        :successMessage="successMessage"
        :errorMessage="errorMessage"
        :closeErrorSuccess="closeErrorSuccess"
      />

      <div class="auth">
        <div class="auth__left">
          <figure class="auth__img">
            <img src="@/assets/imgs/hdassets/skyscraper.avif" />
          </figure>
        </div>

        <div class="auth__right">
          <div class="overview__transaction--header">
            <h1 class="auth-header">
              Change your <span class="orange">{{ sitename }}</span> password
            </h1>
          </div>

          <div class="form form-auth">
            <!-- NEW PASSWORD -->
            <div class="input-area">
              <label class="smlabel">New Password</label>
              <div class="input">
                <span class="input-passwordeye" @click="setvisible('password')">
                  <img src="@/assets/imgs/eyeopen.svg" />
                </span>
                <input placeholder="Enter a new password" :type="pw" v-model="password" />
              </div>
            </div>

            <!-- CONFIRM PASSWORD -->
            <div class="input-area">
              <label class="smlabel" :class="{ fonterror: passwordsDontMatch }">
                Confirm Password
                <span v-if="passwordsDontMatch" class="fonterror">
                  : passwords do not match
                </span>
              </label>

              <div class="input">
                <span class="input-passwordeye" @click="setvisible('confirm')">
                  <img src="@/assets/imgs/eyeopen.svg" />
                </span>
                <input
                  placeholder="Re-enter your password"
                  :type="confirmPw"
                  v-model="confirmPassword"
                />
              </div>
            </div>

            <!-- BUTTON -->
            <div class="overview__withddep">
              <button
                class="button orange-btn-faint fontweight-3 half-flex-space"
                v-if="!allowSubmit"
              >
                Update Password
              </button>

              <button
                class="button orange-btn fontweight-3 half-flex-space"
                v-if="allowSubmit"
                @click="submitNewPassword"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sitename from "@/mixins/sitename";
import auth from "@/mixins/auth";

export default {
  mixins: [sitename, auth],

  data() {
    return {
      password: "",
      confirmPassword: "",
      pw: "password",
      confirmPw: "password",
      userId: null,
    };
  },

  computed: {
    passwordsDontMatch() {
      return (
        this.password.length &&
        this.confirmPassword.length &&
        this.password !== this.confirmPassword
      );
    },

    allowSubmit() {
      return (
        this.password.length &&
        this.confirmPassword.length &&
        this.password === this.confirmPassword
      );
    },
  },

  methods: {
    setvisible(field) {
      if (field === "password") {
        this.pw = this.pw === "password" ? "text" : "password";
      } else {
        this.confirmPw = this.confirmPw === "password" ? "text" : "password";
      }
    },

    submitNewPassword() {
      this.onspinner();
      this.toggleverbiage("");

      const payload = {
        userId: this.userId,
        newPassword: this.password,
      };

      // Example (replace with your own API call)
      this.resetPassword(payload)
        .then(() => {
          this.offspinner();
          this.toggleverbiage(null);
          this.successMessage = "Password updated successfully, You can now login!";

          setTimeout(() => {
            this.$router.push("/auth/signin");
          }, 1500);
        })
        .catch(() => {
          this.offspinner();
          this.errorMessage = "Could not update password.";
        });
    },
  },

  mounted() {
    this.userId = this.$route.query.id;
   // console.log("User ID from query:", this.userId);
  },
};
</script>

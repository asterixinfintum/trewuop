<template>
  <div class="reset-password-page">
    <h2>Reset Password</h2>
    <form @submit.prevent="resetPassword">
      <div class="form-group">
        <label for="new-password">New Password:</label>
        <input type="password" id="new-password" v-model="newPassword" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required />
      </div>
      <button type="submit" class="primary-button" :disabled="loading">
        <span v-if="loading">Loading...</span>
        <span v-else>Reset Password</span>
      </button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script>
let CHAT_API = getCurrentPageDomain();

if (CHAT_API.includes("localhost")) {
  CHAT_API = `http://localhost:8081`;
} else {
  CHAT_API = getCurrentPageDomain();
}

function getCurrentPageDomain() {
  if (process.client) {
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    return url.protocol + "//" + "api." + url.hostname;
  } else {
    return "";
  }
}

export default {
  data() {
    return {
      userId: null,
      resetToken: null,
      newPassword: "",
      confirmPassword: "",
      message: "",
      loading: false, // New state for loading
    };
  },
  created() {
    this.userId = this.$route.query.user;
    this.resetToken = this.$route.query.resetToken;
  },
  methods: {
    async resetPassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.message = "Passwords don't match.";
        return;
      }

      this.loading = true; // Start loading

      try {
        await this.resetPasswordAPI();
        this.message = "Your password has been successfully reset.";
      } catch (error) {
        this.message = "Error resetting password. Please try again.";
      } finally {
        this.loading = false; // End loading
      }
    },
    async resetPasswordAPI() {
      try {
        const { newPassword, userId, resetToken } = this;
        const response = await fetch(`${CHAT_API}/api/send-reset-link/changepassword`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: newPassword, userId, resetToken }),
        });

        if (!response.ok) {
          throw new Error("Failed to update password");
        }

        const data = await response.json();
        if (data.success) {
          this.message = "Your password has been successfully reset.";

          this.$router.push(`/auth/signin`);
        } else {
          throw new Error(data.message || "Failed to update password");
        }
      } catch (error) {
        this.message = error.message || "Error resetting password.";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password-page {
  max-width: scaleValue(400);
  margin: auto;
  padding: $side-padding;
  background: $background;
  border-radius: $border-radius;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: $primary-orange;
  padding-bottom: scaleValue(10);
}

.form-group {
  margin-bottom: scaleValue(15);
}

label {
  display: block;
  margin-bottom: scaleValue(5);
  font-weight: bold;
  color: $font-black;
}

input[type="password"] {
  width: 100%;
  padding: scaleValue(10);
  border: $faint-black-border;
  border-radius: $border-radius;
  box-sizing: border-box;
  background-color: $grey-background;
}

.primary-button {
  width: 100%;
  padding: scaleValue(10);
  background: $button-blue;
  color: $font-white;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  font-weight: bold;
  transition: $transition;
  position: relative;

  &:hover {
    background: $darker-blue;
  }

  &:disabled {
    background-color: $grey-background;
    cursor: not-allowed;
  }

  span {
    display: inline-block;
  }
}

.message {
  margin-top: scaleValue(10);
  text-align: center;
  color: $green-success;
}
</style>

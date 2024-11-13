<template>
  <div class="forgot-password-page">
    <h2>Forgot Password</h2>
    <form @submit.prevent="handleFormSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>

      <button type="submit" class="primary-button" :disabled="!isEmailValid || loading">
        <span v-if="loading">Sending...</span>
        <span v-else>Send Reset Link</span>
      </button>
    </form>

    <p
      v-if="message"
      :class="[
        'message',
        { 'message--success': isSuccess, 'message--error': !isSuccess },
      ]"
    >
      {{ message }}
    </p>
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
      email: "",
      message: "",
      loading: false,
      isSuccess: false, // Determines if the message is a success message
    };
  },
  methods: {
    async handleFormSubmit() {
      if (!this.isEmailValid) {
        this.message = "Please enter a valid email address.";
        this.isSuccess = false;
        return;
      }

      try {
        this.loading = true; // Start loading indicator
        this.message = "";
        await this.sendResetLink();
        this.isSuccess = true;
        this.message = "A reset link has been sent to your email.";
      } catch (error) {
        this.isSuccess = false;
        this.message = "Error sending reset link. Please try again.";
      } finally {
        this.loading = false; // Stop loading indicator
      }
    },
    async sendResetLink() {
      try {
        const response = await fetch(CHAT_API+"/api/send-reset-link", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: this.email }),
        });

        if (!response.ok) {
          throw new Error("Failed to send reset link");
        }

        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(error.message || "Failed to send reset link");
      }
    },
  },
  computed: {
    isEmailValid() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
  },
};
</script>

<style lang="scss" scoped>
.forgot-password-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  width: 100%;
}

label {
  display: block;
  margin-bottom: scaleValue(5);
  font-weight: bold;
  color: $font-black;
}

input[type="email"] {
  width: 100%;
  padding: scaleValue(15);
  border: $faint-black-border;
  border-radius: $border-radius;
  box-sizing: border-box;
  background-color: $grey-background;
}

.primary-button {
  width: 100%;
  padding: scaleValue(15);
  background: $button-blue;
  color: $font-white;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  font-weight: bold;
  transition: $transition;

  &:hover:enabled {
    background: $darker-blue;
  }

  &:disabled {
    filter: blur(1px);
    opacity: 0.5;
    cursor: not-allowed;
  }
}

/* Message Styling */
.message {
  margin-top: scaleValue(10);
  text-align: center;
  font-weight: bold;

  &--success {
    color: $green-success; // Success message color
  }

  &--error {
    color: $error-color; // Error message color
  }
}
</style>

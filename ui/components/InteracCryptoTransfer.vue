<template>
  <div>
    <div class="popup-overlay" @click.stop="toggleInteracCryptoForm">
      <div class="popup">
        <div v-if="transferSuccess" class="interactransfer__transferdone">
          <h2>Transaction Created!</h2>
          <p>
            Your crypto amount will be deposited into your wallet
            {{ destinationCryptoAddress }}.
          </p>
        </div>

        <form class="interactransfer" v-if="!transferSuccess" @click="childHandler">
          <div class="interactransfer__toparea">
            <figure class="interactransfer__figure">
              <img src="@/assets/imgs/interaclogo.jpg" />
            </figure>

            <span> Buy Cryto with Interac </span>
          </div>

          <div class="interactransfer__group input">
            <label class="interactransfer__label" for="security-question"
              >Destination Email:</label
            >
            <input
              class="interactransfer__input input"
              type="text"
              id="security-question"
              v-model="accountInteracEmail"
              placeholder="Email"
              disabled
            />
          </div>

          <div class="interactransfer__group input">
            <label class="interactransfer__label" for="security-question"
              >Security Phrase:</label
            >
            <textarea
              class="interactransfer__input input"
              type="text"
              id="security-question"
              v-model="securityQuestion"
              placeholder="Security Phrase"
              :class="{ 'input-error': securityQuestionError }"
            ></textarea>
            <div v-if="securityQuestionError" class="error-message">
              {{ securityQuestionError }}
            </div>
          </div>

          <div class="interactransfer__group input">
            <label class="interactransfer__label" for="crypto-address"
              >Crypto Address:</label
            >
            <input
              class="interactransfer__input input"
              type="text"
              id="crypto-address"
              v-model="destinationCryptoAddress"
              placeholder="Destination Crypto Address"
              :class="{ 
                'input-error': addressError, 
                'input-success': addressValid 
              }"
              @input="validateAddress"
            />
            <div v-if="addressError" class="error-message">
              {{ addressError }}
            </div>
            <div v-if="addressValid && !addressError" class="success-message">
              ✓ Valid {{ addressType }} address
            </div>
            <div class="address-hint">
              Supported: Bitcoin (starts with 1, 3, or bc1) or Ethereum (starts with 0x)
            </div>
          </div>

          <button
            v-if="allowtransfer"
            class="interactransfer__button button orange-btn"
            :class="{ loading }"
            @click.prevent="createTransaction"
            type="submit"
            :disabled="!isFormValid"
          >
            <span v-if="!loading">Create Transaction</span>
            <span v-if="loading"></span>
          </button>

          <div v-if="generalError" class="error-message general-error">
            {{ generalError }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import requester from "@/store/requester";

export default {
  props: ["toggleInteracCryptoForm", "interacEmail"],
  data() {
    return {
      loading: false,
      transferSuccess: false,
      accountInteracEmail: "",
      securityQuestion: "",
      destinationCryptoAddress: "",
      BASE_URL: requester.BASE,
      addressError: "",
      addressValid: false,
      addressType: "",
      securityQuestionError: "",
      generalError: ""
    };
  },
  mounted() {
    this.accountInteracEmail = this.interacEmail;
  },
  methods: {
    childHandler(event) {
      event.stopPropagation();
    },
    
    validateAddress() {
      // Clear previous validation states
      this.addressError = "";
      this.addressValid = false;
      this.addressType = "";

      if (!this.destinationCryptoAddress.trim()) {
        return;
      }

      const address = this.destinationCryptoAddress.trim();
      
      // Bitcoin address validation regex patterns
      const bitcoinLegacyRegex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
      const bitcoinSegwitRegex = /^bc1[ac-hj-np-z02-9]{11,71}$/;
      
      // Ethereum address validation regex pattern
      const ethereumRegex = /^0x[a-fA-F0-9]{40}$/;

      if (bitcoinLegacyRegex.test(address) || bitcoinSegwitRegex.test(address)) {
        this.addressValid = true;
        this.addressType = "Bitcoin";
      } else if (ethereumRegex.test(address)) {
        this.addressValid = true;
        this.addressType = "Ethereum";
      } else {
        this.addressError = "Please enter a valid Bitcoin or Ethereum address";
      }
    },

    validateSecurityQuestion() {
      this.securityQuestionError = "";
      
      if (!this.securityQuestion.trim()) {
        this.securityQuestionError = "Security phrase is required";
        return false;
      }
      
      if (this.securityQuestion.trim().length < 5) {
        this.securityQuestionError = "Security phrase must be at least 5 characters";
        return false;
      }
      
      return true;
    },

    async createTransaction() {
      try {
        // Reset errors
        this.generalError = "";
        
        // Validate inputs
        const isSecurityValid = this.validateSecurityQuestion();
        this.validateAddress();
        
        if (!isSecurityValid || this.addressError) {
          this.generalError = "Please fix the validation errors above";
          return;
        }

        const token = localStorage.getItem("873__jh6bdjklkjhghn");
        this.loading = true;

        const { accountInteracEmail, securityQuestion, destinationCryptoAddress, BASE_URL } = this;

        const response = await fetch(`${BASE_URL}/new/interac/buy/crypto`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            email: accountInteracEmail,
            securityphrase: securityQuestion.trim(),
            address: destinationCryptoAddress.trim(),
          }),
        });

        if (response.ok) {
          const data = await response.json();
          this.transferSuccess = true;
        } else {
          const errorData = await response.json().catch(() => ({}));
          this.generalError = errorData.message || "Failed to create transaction. Please try again.";
        }
      } catch (error) {
        this.generalError = "Network error. Please check your connection and try again.";
        console.error("Transaction creation error:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {
    allowtransfer() {
      return this.securityQuestion.length > 0 && this.destinationCryptoAddress.length > 0;
    },
    
    isFormValid() {
      return this.allowtransfer && this.addressValid && !this.securityQuestionError && !this.loading;
    }
  },
  watch: {
    securityQuestion() {
      if (this.securityQuestionError) {
        this.validateSecurityQuestion();
      }
    }
  }
};
</script>

<style scoped>
.input-error {
  border-color: #ff4757 !important;
  box-shadow: 0 0 0 1px #ff4757 !important;
}

.input-success {
  border-color: #2ed573 !important;
  box-shadow: 0 0 0 1px #2ed573 !important;
}

.error-message {
  color: #ff4757;
  font-size: 12px;
  margin-top: 5px;
}

.success-message {
  color: #2ed573;
  font-size: 12px;
  margin-top: 5px;
}

.address-hint {
  color: #a4b0be;
  font-size: 11px;
  margin-top: 5px;
}

.general-error {
  margin-top: 15px;
  text-align: center;
  font-size: 14px;
}

.interactransfer__button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
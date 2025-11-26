<template>
  <div>
    <div class="hook">
      <div
        class="hook__header"
        id="header"
        :class="{
          mobile_menu_open: mobile_menu_open,
        }"
      >
        <div class="hook__header--body">
          <div class="hook__header--topbody">
            <div class="hook__header--topbodylogo">
              <figure class="hook__header--figurelo">
                <img src="/woen.png" />
              </figure>
              <p>
                <span>{{ logoOne }}</span> <span>{{ logoTwo }}</span>
              </p>
            </div>

            <div class="hook__headerburger" @click="toggle_mobile_menu_open">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div class="hook__header--topbodymenu">
              <div
                class="hook__header--topbodymenuitem"
                @click="scrollToTarget('contact_support')"
              >
                <figure>
                  <img src="@/assets/imgs/message-icon.png" />
                </figure>
                <span>Contact</span>
              </div>
              <div class="hook__header--topbodymenuitem" @click="got_to_toute('signin')">
                <figure>
                  <img src="@/assets/imgs/signin-icon.png" />
                </figure>
                <span>Sign in</span>
              </div>
              <div class="hook__header--topbodymenuitem" @click="got_to_toute('signup')">
                <figure>
                  <img src="@/assets/imgs/signin-icon.png" />
                </figure>
                <span>Sign up</span>
              </div>
            </div>
          </div>
          <div class="hook__header--bottombody">
            <div class="hook__header--bottombodymenu">
              <span
                @click="scrollToTarget('header')"
                :class="{ current: current_div === 'header' }"
                >Home</span
              >
              <span
                @click="scrollToTarget('services')"
                :class="{ current: current_div === 'services' }"
                >Services</span
              >
              <span
                @click="scrollToTarget('features')"
                :class="{ current: current_div === 'features' }"
                >Features</span
              >
              <span
                @click="scrollToTarget('employees')"
                :class="{ current: current_div === 'employees' }"
                >About Us</span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="hook__jumbotron">
        <div class="hook__padding">
          <div class="hook__jumbotrontext">
            <div class="hook__jumbotrontext--header">
              <h1>Seamless Banking, Redefined for the Modern Era</h1>
            </div>

            <div class="hook__jumbotrontext--subheader">
              <p>
                Experience a unified platform that simplifies financial management,
                empowers your goals, and keeps you in control, anytime and anywhere.
              </p>
            </div>

            <div class="hook__jumbotrontext--auth" @click="got_to_toute('signup')">
              <button class="button">Sign Up</button>
            </div>
          </div>
        </div>

        <div class="hook__slide">
          <figure :class="{ current_jumbotron_img: current_jumbotron_img === 1 }">
            <img src="@/assets/imgs/1-5.jpg" />
          </figure>

          <figure :class="{ current_jumbotron_img: current_jumbotron_img === 2 }">
            <img src="@/assets/imgs/stock-5.jpg" />
          </figure>

          <figure :class="{ current_jumbotron_img: current_jumbotron_img === 3 }">
            <img src="@/assets/imgs/couple-1.jpg" />
          </figure>
        </div>
      </div>

      <div class="hook__content">
        <div class="hook__section one">
          <h1 class="hook__sectionheader">
            Presenting products and services that are right for you
          </h1>

          <div class="hook__featuresgrid" id="services">
            <div class="hook__featuresgrid--box">
              <figure>
                <img src="@/assets/imgs/feature-1.png" />
              </figure>
              <h2>Automated Savings Tools</h2>
              <p>
                Save smarter with tools that analyze your spending habits and set aside
                money automatically.
              </p>

              <div class="hook__featuresgrid--btn">
                <nuxt-link to="/auth/signup" class="btn">Apply online</nuxt-link>
              </div>
            </div>
            <div class="hook__featuresgrid--box">
              <figure>
                <img src="@/assets/imgs/feature-2.png" />
              </figure>
              <h2>Instant Customer Service</h2>
              <p>
                Get assistance anytime with our 24/7 customer service team, always ready
                to help.
              </p>
            </div>
            <div class="hook__featuresgrid--box">
              <figure>
                <img src="@/assets/imgs/feature-3.png" />
              </figure>
              <h2>Well-Structured Investment Plans</h2>
              <p>
                Grow your wealth with expert-designed investment plans tailored to your
                financial goals.
              </p>
            </div>
            <div class="hook__featuresgrid--box">
              <figure>
                <img src="@/assets/imgs/feature-4.png" />
              </figure>
              <h2>Online Deposits and Transfers</h2>
              <p>
                Make seamless deposits and transfers online with just a few clicks,
                anytime, anywhere.
              </p>
            </div>
          </div>
        </div>

        <div class="hook__section two" id="features">
          <h1 class="hook__sectionheader">Business Banking</h1>

          <div class="hook__padding">
            <div class="hook__midmenu">
              <div
                class="hook__midmenu--label"
                :class="{ current: current_midmenucard === 1 }"
                @click="toggle_current_midmenucard(1)"
              >
                Smart Savings
              </div>
              <div
                class="hook__midmenu--label"
                :class="{ current: current_midmenucard === 2 }"
                @click="toggle_current_midmenucard(2)"
              >
                Tailored Investments
              </div>
              <div
                class="hook__midmenu--label"
                :class="{ current: current_midmenucard === 3 }"
                @click="toggle_current_midmenucard(3)"
              >
                Always-On Assistance
              </div>
              <div
                class="hook__midmenu--label"
                :class="{ current: current_midmenucard === 4 }"
                @click="toggle_current_midmenucard(4)"
              >
                Seamless Transactions
              </div>
              <div
                class="hook__midmenu--label"
                :class="{ current: current_midmenucard === 5 }"
                @click="toggle_current_midmenucard(5)"
              >
                Secure Banking
              </div>
            </div>
          </div>

          <div class="hook__padding">
            <div class="hook__midmenucards">
              <div
                class="hook__midmenucard"
                :class="{ current: current_midmenucard === 1 }"
              >
                <figure class="hook__midmenucard--img">
                  <img src="@/assets/imgs/stock-1.jpg" />
                </figure>

                <div class="hook__midmenucard--details">
                  <h2>Save Effortlessly with Automation</h2>

                  <p>
                    Take the stress out of saving. Our automated savings tool analyzes
                    your spending habits and sets aside funds without impacting your daily
                    budget. Watch your savings grow without lifting a finger.
                  </p>

                  <button
                    class="button orange-btn curved"
                    @click="got_to_toute('signup')"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>

            <div class="hook__midmenucards">
              <div
                class="hook__midmenucard"
                :class="{ current: current_midmenucard === 2 }"
              >
                <figure class="hook__midmenucard--img">
                  <img src="@/assets/imgs/stock-2.jpg" />
                </figure>

                <div class="hook__midmenucard--details">
                  <h2>Automated Savings Tools</h2>
                  <p>
                    Save effortlessly with our smart tools that automatically set aside
                    money based on your spending habits, helping you achieve your
                    financial goals faster.
                  </p>
                  <button
                    class="button orange-btn curved"
                    @click="got_to_toute('signup')"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>

            <div class="hook__midmenucards">
              <div
                class="hook__midmenucard"
                :class="{ current: current_midmenucard === 3 }"
              >
                <figure class="hook__midmenucard--img">
                  <img src="@/assets/imgs/stock-3.jpg" />
                </figure>

                <div class="hook__midmenucard--details">
                  <h2>24/7 Customer Support</h2>
                  <p>
                    Our dedicated team is available anytime to answer questions, resolve
                    issues, or guide you through our banking services with expert care.
                  </p>
                  <button
                    class="button orange-btn curved"
                    @click="got_to_toute('signup')"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>

            <div class="hook__midmenucards">
              <div
                class="hook__midmenucard"
                :class="{ current: current_midmenucard === 4 }"
              >
                <figure class="hook__midmenucard--img">
                  <img src="@/assets/imgs/stock-4.jpg" />
                </figure>

                <div class="hook__midmenucard--details">
                  <h2>Custom Investment Plans</h2>
                  <p>
                    Grow your wealth with tailored investment solutions designed by
                    experts to match your financial goals and risk tolerance.
                  </p>
                  <button
                    class="button orange-btn curved"
                    @click="got_to_toute('signup')"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>

            <div class="hook__midmenucards">
              <div
                class="hook__midmenucard"
                :class="{ current: current_midmenucard === 5 }"
              >
                <figure class="hook__midmenucard--img">
                  <img src="@/assets/imgs/stock-5.jpg" />
                </figure>

                <div class="hook__midmenucard--details">
                  <h2>Secure Online Banking</h2>
                  <p>
                    Bank securely from anywhere with our state-of-the-art online platform,
                    offering instant deposits, transfers, and bill payments.
                  </p>
                  <button
                    class="button orange-btn curved"
                    @click="got_to_toute('signup')"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>

            <div class="hook__midmenucards">
              <div class="hook__midmenucard">
                <figure class="hook__midmenucard--img">
                  <img src="@/assets/imgs/stock-6.jpg" />
                </figure>

                <div class="hook__midmenucard--details">
                  <h2>Comprehensive Financial Dashboard</h2>
                  <p>
                    Stay informed and in control with a full view of your financial
                    health, including spending trends, savings progress, and more.
                  </p>
                  <button
                    class="button orange-btn curved"
                    @click="got_to_toute('signup')"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hook__section three">
          <div class="hook__padding">
            <div class="hook__bluebox">
              <div class="hook__bluebox--blue">
                <label>LEARNING CENTER</label>

                <h2>Comprehensive Financial Dashboard</h2>
                <p>
                  Stay informed and in control with a full view of your financial health,
                  including spending trends, savings progress, and more.
                </p>
                <button class="button orange-btn curved" @click="got_to_toute('signup')">
                  Sign up
                </button>
              </div>

              <figure class="hook__bluebox--img">
                <img src="@/assets/imgs/stock-1.jpg" />
              </figure>
            </div>
          </div>
        </div>

        <WorkersGrid />

        <div class="hook__section four" id="about">
          <div>
            <div class="hook__footer">
              <div class="hook__padding">
                <div class="hook__footer--content">
                  <div class="hook__footer--menuarea">
                    <h2 class="hook__footer--menuheader">About Us</h2>

                    <div class="hook__footer--menu">
                      <div class="hook__footer--menuitem">
                        <span><strong>Eco-Friendly Banking</strong></span>
                        <span
                          >Support sustainability with paperless statements and green
                          initiatives.</span
                        >
                      </div>
                      <div class="hook__footer--menuitem">
                        <span><strong>Financial Health Insights</strong></span>
                        <span
                          >Track your spending habits and get personalized recommendations
                          to improve.</span
                        >
                      </div>
                      <div class="hook__footer--menuitem">
                        <span><strong>Goal-Based Savings</strong></span>
                        <span
                          >Set savings goals and watch your progress with visual
                          trackers.</span
                        >
                      </div>
                      <div class="hook__footer--menuitem">
                        <span><strong>Smart Spend Alerts</strong></span>
                        <span
                          >Receive real-time alerts to keep your spending in check and on
                          budget.</span
                        >
                      </div>
                    </div>
                  </div>

                  <div class="hook__footer--about">
                    <div class="hook__footer--aboutheader">
                      <figure></figure>
                      <h2>
                        <span>{{ logoOne }}</span>
                        <span>{{ logoTwo }}</span>
                      </h2>
                    </div>
                    <div class="hook__footer--abouttext">
                      <p>
                        Munnver Capital delivers trusted, innovative financial solutions
                        to help individuals and businesses achieve their goals. Your
                        success is our mission.
                      </p>
                    </div>
                  </div>

                  <div class="hook__footer--email" id="contact_support">
                    {{ suppoxtrd }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requester from "@/store/requester";

const { getfromserver } = requester;

import sitenamemixin from "@/mixins/sitename";

export default {
  mixins: [sitenamemixin],
  data() {
    return {
      current: 1,
      current_jumbotron_img: 1,
      current_midmenucard: 1,
      current_div: "header",
      mobile_menu_open: false,
    };
  },
  methods: {
    async checkAuthState() {
      const token = localStorage.getItem("873__jh6bdjklkjhghn");

      if (token) {
        try {
          const data = await getfromserver({
            token: token,
            path: `userauth/auth/user`,
          });

          if (data && data.user) {
            // console.log("Authenticated user:", data.user);
            return data.user; // Return the user object
          } else {
            // console.log("Authentication failed:", data);
            return null;
          }
        } catch (error) {
          console.error("Error checking auth state:", error);
          return null;
        }
      } else {
        console.log("No token found");
        return null;
      }
    },
    toggle_mobile_menu_open() {
      this.mobile_menu_open = !this.mobile_menu_open;
    },
    scrollToTarget(id) {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Element with ID '${id}' not found.`);
      }

      this.current_div = id;
      this.mobile_menu_open = false;
    },
    got_to_toute(route) {
      this.$router.push(`/auth/${route}`);
    },
    toggle__current_jumbotron_img() {
      if (this.current_jumbotron_img < 3) {
        this.current_jumbotron_img = this.current_jumbotron_img + 1;
      } else {
        this.current_jumbotron_img = 1;
      }
    },
    toggle_current_midmenucard(current_card) {
      this.current_midmenucard = current_card;
    },
  },
  async mounted() {
    const user = await this.checkAuthState();

    if (user) {
      //console.log("User is logged in:", user);
      this.$router.push(`/overview/${user._id}`);
    } else {
      return;
    }

    setInterval(() => {
      this.toggle__current_jumbotron_img();
    }, 3000);
  },
};
</script>

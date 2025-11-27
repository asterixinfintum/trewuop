<template>
  <div
    class="bubble"
    :class="{
      receiver: role === 'receiver',
      sender: role === 'sender',
    }"
  >
    <div
      class="bubble__body bubble__sender"
      :class="{ bubble__receiver: role === 'receiver' }"
    >
      <div class="bubble__body--content" v-html="parsedContent"></div>

      <div class="bubble__body--time">
        <span></span>
        <span>{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["role", "content", "time"],

  computed: {
    parsedContent() {
      return this.convertLinks(this.content);
    },
  },

  methods: {
    convertLinks(text) {
      if (!text) return "";

      // Step 1 — convert URLs to clickable <a> tags
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      let converted = text.replace(urlRegex, (url) => {
        const safeUrl = url.replace(/"/g, "");
        return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeUrl}</a>`;
      });

      // Step 2 — split sentences into new lines
      // Splits on a period followed by space or end of text
      const sentences = converted.split(/\. +|\.?$/).filter((s) => s.trim() !== "");

      // Step 3 — wrap each in <p> with margin
      const html = sentences
        .map((s) => `<p class="bubble-paragraph">${s.trim()}.</p>`)
        .join("");

      return html;
    },
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  color: $font-black;
  margin-bottom: #{scaleValue(20)};
  color: $font-white;
  line-height: #{scaleValue(20)};
  font-size: #{scaleValue(15)};

  @media only screen and (max-width: 414px) {
    font-size: #{scaleValue(70)};
    line-height: #{scaleValue(90)};
  }

  &.receiver {
    padding-left: #{scaleValue(150)};
    transform: translateX(#{scaleValue(-55)});
  }

  &.sender {
    padding-right: #{scaleValue(150)};
  }

  &__body {
    border-radius: 0.5rem;
    padding: #{scaleValue(20)} #{scaleValue(10)};
    padding-bottom: #{scaleValue(10)};

    width: #{scaleValue(195)};
    overflow: hidden;
    text-overflow: clip;

    &--content {
      width: 100%;
      word-wrap: break-word;
      word-break: break-word;
      white-space: normal;
    }

    @media only screen and (max-width: 414px) {
      padding: #{scaleValue(30)} #{scaleValue(100)};
      border-radius: 1.5rem;
      width: #{scaleValue(1200)};
    }

    &--time {
      display: flex;
      justify-content: space-between;
      font-size: #{scaleValue(10)};
      opacity: 0.5;

      @media only screen and (max-width: 414px) {
        font-size: #{scaleValue(40)};
      }
    }
  }

  &__sender {
    background: $darker-blue;
  }

  &__receiver {
    background: $button-blue;
  }
}

.bubble-paragraph {
  margin-bottom: #{scaleValue(15)};
}
</style>

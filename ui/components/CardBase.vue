<template>
  <div>
    <div class="cardbase" :class="{ minheight: !showPhoto }">
      <div>
        <figure class="cardbase__img" v-if="showPhoto">
          <img src="@/assets/imgs/cq5dam.web.590.1000.jpeg" />
        </figure>

        <div class="cardbase__header">
          <h2>{{header}}</h2>
        </div>

        <div class="cardbase__description">
          <p>
            {{description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showPhoto", "description", "header"],
};
</script>



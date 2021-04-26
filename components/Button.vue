<template>
  <div
    class="primary-btn--wrapper"
    @click="$emit('click')"
  >
    <nuxt-link
      v-if="to"
      :to="to"
      class="primary-btn"
    >
      {{ title }}
    </nuxt-link>
    <a
      v-else-if="!href"
      alt="Написать"
      class="primary-btn"
    >
      {{ title }}
    </a>
    <a
      v-else
      :href="href"
      alt="Написать"
      class="primary-btn"
    >
      {{ title }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    href: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: 'Кнопка'
    },
    to: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.primary-btn {
  position: relative;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  color: $color-dark;
  text-shadow: 2px 2px 0px $color-light;
  font-size: 40px;
  line-height: 53px;
  width: max-content;

  @media (min-width: 540px) {
    font-size: 60px;
    line-height: 79px;
  }

  z-index: 1;

  &--wrapper {
    padding-bottom: 80px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(20px, 30px);
    transition: all .5s ease-in-out;
    background: $color-accent;
    z-index: -1;
  }

  &:hover {
    &:before {
      transform: translate(0px,0px);
      transition: all .5s ease-in-out;
    }
  }
}
</style>

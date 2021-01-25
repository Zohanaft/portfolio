<template>
  <div class="tag-list d-flex">
    <a
      v-for="(tag) in tags"
      :key="tag"
      class="tag-list--item"
      :class="{ active : $attrs.value.indexOf(tag) !== -1 }"
      @click="tagsLogick(tag)"
    >
      {{ tag }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'TagList',
  model: {
    selectedTags: {
      type: Array,
      default: () => ([])
    }
  },
  props: {
    tags: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    tagsLogick (tag) {
      const exists = this.$attrs.value.indexOf(tag)
      if (exists === -1) {
        this.$attrs.value.push(tag)
      } else {
        this.$attrs.value.splice(exists, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-list {
  transition: all .5s ease-in-out;

  &--item {
    color: $color-dark;
    transition: all .5s ease-in-out;
    padding-left: 20px;

    &:first-child {
      padding-left: 0px;

      @media (min-width: 540px) {
        padding-left: 20px;
      }

    }

  }

  .active {
    color: $color-accent;
    transition: all .5s ease-in-out;
  }
}
</style>

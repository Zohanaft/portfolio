<template>
  <nuxt-link
    class="card-project mx-sm-auto"
    :to="`/${item.slug}`"
  >
    <div class="card-project--header d-flex">
      <h2 class="card-project--title d-flex">
        {{ item.title }}
      </h2>
      <span class="card-project--year">
        {{ item.year }}
      </span>
    </div>
    <div class="card-project--image">
      <v-img
        :src="item.image"
        style="height: 353px;"
        position="center center"
      />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CardProject',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.card-project {
  max-width: 370px;
  max-height: 447px;
  height: 100%;
  padding: 16px;
  border: solid 1px $color-dark;
  transition: all .5s ease-in-out;
  display: block;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 800px) {
    margin-bottom: 30px;
  }

  &:hover {
    box-shadow: 4px 4px 0px $color-accent;
    transition: all .5s ease-in-out;
  }

  &--header {
    padding-top: 3px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 10px;
  }

  &--title, &--year {
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 142%;
    height: 48px;
    display: flex;
    align-items: flex-end;
    color: $color-dark;
  }

  &--year {
    color: $color-gray;
  }

  &--image {
    max-height: 353px;
    display: flex;
  }
}
</style>

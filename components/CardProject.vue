<template>
  <a class="card-project mx-sm-auto">
    <div class="card-project--header d-flex">
      <h2 class="card-project--title d-flex">
        {{ project.title }}
      </h2>
      <span class="card-project--year">
        {{ project.year }}
      </span>
    </div>
    <div class="card-project--image">
      <v-img
        :src="require('@/assets/img/card-project/36.png')"
        position="center center"
      />
    </div>
  </a>
</template>

<script>
export default {
  name: 'CardProject',
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.card-project {
  max-width: 370px;
  padding: 16px;
  border: solid 1px $color-dark;
  transition: all .5s ease-in-out;
  display: block;
  margin-bottom: 10px;

  @media (min-width: 540px) {
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
}
</style>

<template>
  <div class="card-notes">
    <div class="card-notes--image">
      <v-img
        :src="require('@/assets/img/card-notes/10.jpg')"
        position="center center"
        :contain="false"
        height="100%"
      />
    </div>
    <div class="card-notes--content-sheet" />
    <div class="card-notes--content-wrapper d-flex flex-column">
      <h2 class="card-notes--title d-flex">
        {{ note.title }}
      </h2>
      <v-spacer />
      <div class="card-notes--tags">
        <ul>
          <li
            v-for="(tag, index) in note.tags"
            :key="index"
            class="card-notes--tags__item"
          >
            {{ `| ${tag}` }}
          </li>
        </ul>
      </div>
      <div class="card-notes--social">
        <ul>
          <li
            v-for="(social, index) in note.social"
            :key="index"
          >
            <a href="#">
              {{ social.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardNotes',
  props: {
    note: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.card-notes {
  max-width: 370px;
  max-height: 480px;
  height: 480px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  position: relative;
  transition: all .5s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 40px $color-accent;
    transition: all .5s ease-in-out;
  }

  &--image {
    width: 100%;
    height: 100%;
  }

  &--content-sheet {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    background-color: $color-dark;
    opacity: 0.8;
  }

  &--content-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    padding: 20px 20px 10px 20px;
  }

  &--title {
    font-family: 'Bebas Neue';
    color: $color-light-gray;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.04em;
  }

  &--tags ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 20px;

    @media (min-width: 540px) {
      padding-bottom: 0px;
    }

    li {
      font-size: 16px;
      font-family: 'Roboto Mono';
      line-height: 30px;
      letter-spacing: 0.02em;
      font-weight: 400px;
      color: $color-light-gray;
      padding-left: 20px;

      &:first-child {
        padding-left: 0px;
      }
    }
  }

  &--social {
    padding-bottom: 10px;

    @media (min-width: 540px) {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: baseline;

      @media (min-width: 540px) {
        flex-direction: column;
      }

      li {
        padding-left: 10px;

        @media (min-width: 540px) {
          padding-left: 0px;
          padding-bottom: 10px;
        }

        &:first-child {
          padding-left: 0px;
        }

        a {
          border: solid 1px $color-accent;
          width: 30px;
          height: 30px;
          color: $color-accent;
          font-family: 'Roboto Mono';
          font-size: 18px;
          line-height: 30px;
          letter-spacing: 0.02em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

}
</style>

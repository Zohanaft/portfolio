<template>
  <div
    class="ys-wrapper"
    :class="{
      'to-left': left,
      'to-right': right,
      'to-center': center
    }"
  >
    <select
      id="select-year"
      v-model="yearCopy"
      name="select-year"
      @change="$emit('change', $event.target.value)"
    >
      <option
        v-for="y in yearList"
        :key="y"
        :value="y"
      >
        {{ y }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'YearSort',
  model: {
    prop: 'year',
    event: 'change'
  },
  props: {
    year: {
      type: String,
      default: '2020'
    },
    yearList: {
      type: Array,
      default: () => ([])
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      yearCopy: ''
    }
  },
  watch: {
    year (val) {
      this.yearCopy = this.year
    }
  }
}
</script>

<style lang="scss" scoped>
.ys-wrapper {
  position: relative;

  select {
    outline: none;
    height: 60px;
    display: flex;
    align-items: center;
    border: solid 1px black;
    font-weight: bold;
    border-bottom-width: 4px;
    width: 70px;
  }

  &:after {
    content: '';
    width: 17px;
    height: 17px;
    position: absolute;
    right: 5px;
    top: 30px;
    background: black;
    transform: translateY(-50%);
  }
}
</style>

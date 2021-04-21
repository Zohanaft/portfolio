export { default as Button } from '../..\\components\\Button.vue'
export { default as CardNotes } from '../..\\components\\CardNotes.vue'
export { default as CardProject } from '../..\\components\\CardProject.vue'
export { default as TagList } from '../..\\components\\TagList.vue'
export { default as YearSort } from '../..\\components\\YearSort.vue'

export const LazyButton = import('../..\\components\\Button.vue' /* webpackChunkName: "components_Button" */).then(c => c.default || c)
export const LazyCardNotes = import('../..\\components\\CardNotes.vue' /* webpackChunkName: "components_CardNotes" */).then(c => c.default || c)
export const LazyCardProject = import('../..\\components\\CardProject.vue' /* webpackChunkName: "components_CardProject" */).then(c => c.default || c)
export const LazyTagList = import('../..\\components\\TagList.vue' /* webpackChunkName: "components_TagList" */).then(c => c.default || c)
export const LazyYearSort = import('../..\\components\\YearSort.vue' /* webpackChunkName: "components_YearSort" */).then(c => c.default || c)

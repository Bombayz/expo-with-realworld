// import { createSelector } from 'reselect'

const currentFaqSelector = state => state.faqs.faqs
const faqsByIdSelector = state => state.faqs.faqsById
const isFetchingSelector = state => state.faqs.isFetching

export { currentFaqSelector, faqsByIdSelector, isFetchingSelector }
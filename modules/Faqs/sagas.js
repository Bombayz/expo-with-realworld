import { call, fork, put, select, take } from 'redux-saga/effects'
import {
  ADD_FAQ,
  GET_FAQS_BY_PRODUCT,
  GET_FAQS_BY_PRODUCT_CATEGORY,
  GET_FAQS_BY_SOLUTION_CATEGORY,
} from './types'
import {
  addFaq,
  getFaqsByProduct,
  getFaqsByProductCategory,
  getFaqsBySolutionCategory,
} from './api'

import { selectors as ProductCategoriesSelectors } from 'modules/ProductCategories'
import {
  normalize as faqsNormalized,
  actions as faqsAction,
} from 'modules/Faqs'

const filterSyncApp = faqs =>
  faqs && Object.keys( faqs ).length !== 0
    ? Object.keys( faqs ).reduce(
      ( p, c ) => ( faqs[ c ].syncApp ? { ...p, [ c ]: faqs[ c ] } : p ),
      {}
    )
    : faqs

const watchGetFaqsByProduct = function* watchGetFaqsByProduct() {
  while ( true ) {
    const { productId } = yield take( GET_FAQS_BY_PRODUCT )
    yield put( faqsAction.faqs.request() )
    const faqs = yield call( getFaqsByProduct, productId )
    const normalizedFaqs = yield call(
      faqsNormalized.normalizedFaqs,
      filterSyncApp( faqs )
    )
    yield put( faqsAction.faqs.success( normalizedFaqs ) )
  }
}

const watchGetFaqsByProductCategory = function* watchGetFaqsByProductCategory() {
  while ( true ) {
    const { productCategoryId } = yield take( GET_FAQS_BY_PRODUCT_CATEGORY )
    const query = yield select(
      ProductCategoriesSelectors.currentCategorieQuerySelector
    )
    yield put( faqsAction.faqs.request() )
    const faqs = yield call( getFaqsByProductCategory, query )
    const normalizedFaqs = yield call(
      faqsNormalized.normalizedFaqs,
      filterSyncApp( faqs )
    )
    yield put( faqsAction.faqs.success( normalizedFaqs ) )
  }
}

const watchGetFaqsBySolutionCategory = function* watchGetFaqsBySolutionCategory() {
  while ( true ) {
    const { solutionCategoryId } = yield take( GET_FAQS_BY_SOLUTION_CATEGORY )
    yield put( faqsAction.faqs.request() )
    const faqs = yield call( getFaqsBySolutionCategory, solutionCategoryId )
    const normalizedFaqs = yield call(
      faqsNormalized.normalizedFaqs,
      filterSyncApp( faqs )
    )
    yield put( faqsAction.faqs.success( normalizedFaqs ) )
  }
}

const watchAddFaq = function* watchAddFaq() {
  while ( true ) {
    const { faq } = yield take( ADD_FAQ )
    yield put( faqsAction.addFaqApi.request() )
    const saved = yield call( addFaq, faq )
    yield put( faqsAction.addFaqApi.success( saved ) )
  }
}

export default [
  fork( watchAddFaq ),
  fork( watchGetFaqsByProduct ),
  fork( watchGetFaqsByProductCategory ),
  fork( watchGetFaqsBySolutionCategory ),
]

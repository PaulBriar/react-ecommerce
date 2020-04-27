import React from 'react';
import { connect } from 'react-redux'
import ErrorBoundary from 'react-error-boundary';

import CategoryItem from '../../components/CategoryItem/CategoryItem';

import { selectCategory } from '../../redux/selectors/shopSelector';

import { CategoryPageProps } from '../../utils/interfaces';

import './CategoryPage.styles.scss';

const CategoryPage = ({ category }: CategoryPageProps) => {
  const { title, items } = category;
  return (
    <div className="category-page">
      <ErrorBoundary>
      <h2 className="title">{title}</h2>
      <div className="items">{items.map(item => (
        <CategoryItem key={item.id} item={item} />
      ))}</div>
      </ErrorBoundary>
    </div>
  )
}

const mapStateToProps = (state:any, ownProps: any) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);
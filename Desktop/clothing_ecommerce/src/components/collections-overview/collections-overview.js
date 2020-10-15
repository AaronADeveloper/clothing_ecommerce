import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../preview-collection/preview-collection';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';


import React from 'react'

const CollectionsOverview = ({ collections }) => (
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollectionProps}) => (
              <PreviewCollection key={id} {...otherCollectionProps} />
            ))}
        </div>
    )

const mapStateToProps = createStructuredSelector({
      collections: selectCollectionsForPreview
  })
    


export default connect(mapStateToProps)(CollectionsOverview)

import { Colors } from 'constants'

export default {
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 20,
  },
  thumbnailView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailsView: {
    marginTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  price: {
    backgroundColor: Colors.backgroundSection,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: 25,
    paddingBottom: 30,
    paddingTop: 30,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  pros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  faq: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundSection,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  questions: {
    flexDirection: 'row',
    //justifyContent: 'flex-start',
  },
  shippingText: {
    color: '#C0C0C0',
    fontSize: 13,
  },
  priceText: {
    marginTop: 5,
  },
}

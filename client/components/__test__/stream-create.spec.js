import {expect} from 'chai'
import React from 'react'
import sinon from 'sinon'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {StreamCreate} from '../stream-create'
import {Provider} from 'react-redux'
import StreamForm from '../stream-form'
import configureMockStore from 'redux-mock-store'

const adapter = new Adapter()
enzyme.configure({adapter})
const mockStore = configureMockStore()
const store = mockStore({})
describe('StreamCreate', () => {
  let streamCreate, formDisplay

  beforeEach(() => {
    streamCreate = shallow(
      <Provider store={store}>
        <StreamCreate />
      </Provider>
    )
    formDisplay = shallow(<StreamForm />)
  })

  it('simulates click events', () => {
    //const onButtonClick = sinon.spy()
    expect(formDisplay.find('button').simulate('click'))
  })

  it('has a text box', () => {
    expect(formDisplay.find('textarea')).to.have.lengthOf(1)
  })
})

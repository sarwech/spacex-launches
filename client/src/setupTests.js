import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import '@testing-library/jest-dom/extend-expect'
import ShallowWrapper from 'enzyme/ShallowWrapper'

configure({ adapter: new Adapter() })
configure(ShallowWrapper)

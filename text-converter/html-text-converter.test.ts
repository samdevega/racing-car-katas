import { expect } from 'chai'
import 'mocha'
import HtmlTextConverter from './html-text-converter'

describe('Html Converter', () => {
	describe('HtmlTextConverter', () => {
		it('fix_me', () => {
			const converter = new HtmlTextConverter('foo')
			expect(converter.getFilename()).to.eql('fixme')
		})
	})
})

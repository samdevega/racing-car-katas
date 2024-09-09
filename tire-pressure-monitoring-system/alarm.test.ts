import { expect } from 'chai'
import 'mocha'
import Alarm from './alarm'

describe('Tyre Pressure Monitoring System', () => {
	describe('Alarm', () => {
		it('is off before checking pressure', () => {
			const alarm = new Alarm()

			expect(alarm.isAlarmOn()).eql(false)
		})
	})
})
